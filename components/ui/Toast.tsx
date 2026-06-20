"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useReducer } from "react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "info" | "milestone";
type Toast = { id: number; message: string; type: ToastType };
type ToastAction = { type: "push"; toast: Toast } | { type: "remove"; id: number };
type ToastListener = (message: string, type: ToastType) => void;
type ToastState = { visible: Toast[]; queue: Toast[] };

const listeners = new Set<ToastListener>();

export function showGlobalToast(message: string, type: ToastType = "info") {
  listeners.forEach((listener) => listener(message, type));
}

function reducer(state: ToastState, action: ToastAction): ToastState {
  if (action.type === "push") {
    if (state.visible.length < 3) return { ...state, visible: [action.toast, ...state.visible] };
    return { ...state, queue: [...state.queue, action.toast] };
  }
  const visible = state.visible.filter((toast) => toast.id !== action.id);
  if (visible.length < 3 && state.queue.length) {
    const [next, ...queue] = state.queue;
    return { visible: [next, ...visible], queue };
  }
  return { ...state, visible };
}

const ToastContext = createContext<{ showToast: (message: string, type: ToastType) => void } | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, dispatch] = useReducer(reducer, { visible: [], queue: [] });

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const toast = { id: Date.now() + Math.random(), message, type };
    dispatch({ type: "push", toast });
    window.setTimeout(() => dispatch({ type: "remove", id: toast.id }), 4000);
  }, []);

  useEffect(() => {
    listeners.add(showToast);
    return () => {
      listeners.delete(showToast);
    };
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="sticky bottom-7 z-50 ml-auto flex w-full max-w-sm flex-col gap-2 px-4 pb-3">
        {toasts.visible.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "animate-[toast-in_180ms_ease-out] rounded-card border border-border bg-surface px-3 py-2 text-sm text-primary",
              toast.type === "success" && "border-l-[3px] border-l-easy",
              toast.type === "info" && "border-l-[3px] border-l-accent",
              toast.type === "milestone" && "border-l-[3px] border-l-medium text-[15px]"
            )}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
}
