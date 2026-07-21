"use client";

import React, { useRef, useState } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glowColor?: string;
}

export function Card3D({ children, className = "", depth = 15, glowColor = "#f97316" }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -depth;
    const rotY = ((x - centerX) / centerX) * depth;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out preserve-3d cursor-pointer ${className}`}
      style={{
        perspective: "1000px",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic Glare & Specular Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-card transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`,
          opacity: glarePos.opacity,
        }}
      />

      {/* Dynamic 3D Neon Backlight Shadow */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-card opacity-0 hover:opacity-40 transition-opacity duration-300 blur-xl z-0"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Card Content Layer */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
