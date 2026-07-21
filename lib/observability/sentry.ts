/**
 * Sentry & Runtime Observability Module
 * Captures client & server unhandled exceptions and reports structured error metadata.
 */

export interface ErrorReport {
  message: string;
  stack?: string;
  context?: Record<string, any>;
  level?: "info" | "warning" | "error" | "fatal";
  timestamp: string;
}

export function captureException(error: unknown, context?: Record<string, any>): void {
  const errObj = error instanceof Error ? error : new Error(String(error));
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN;

  const report: ErrorReport = {
    message: errObj.message,
    stack: errObj.stack,
    context,
    level: "error",
    timestamp: new Date().toISOString(),
  };

  if (dsn) {
    // Send telemetry report to Sentry ingestion endpoint if DSN configured
    try {
      fetch(dsn, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(report),
        keepalive: true,
      }).catch(() => {});
    } catch {
      // Ignore network transport failures in observability wrapper
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.error("[Observability Error Captured]:", report);
  }
}

export function captureMessage(message: string, level: "info" | "warning" | "error" = "info"): void {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Observability ${level.toUpperCase()}]: ${message}`);
  }
}
