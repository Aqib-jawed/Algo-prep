"use client";

import React, { useEffect, useRef } from "react";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  vz: number;
}

export function RoadmapCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate 45 3D particles with depth (z) values
    const colors = ["#f97316", "#3b82f6", "#10b981", "#8b5cf6", "#ec4899"];
    const particles: Particle3D[] = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      z: Math.random() * 500 + 100,
      radius: Math.random() * 2.5 + 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      vz: (Math.random() - 0.5) * 0.4,
    }));

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left - width / 2;
      mouseY = e.clientY - rect.top - height / 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const fov = 350; // Field of view for 3D projection

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Center origin at center of canvas
      const cx = width / 2;
      const cy = height / 2;

      // Update particle positions
      particles.forEach((p) => {
        p.x += p.vx + mouseX * 0.0003;
        p.y += p.vy + mouseY * 0.0003;
        p.z += p.vz;

        // Wrap around boundaries
        if (p.x < -width / 2) p.x = width / 2;
        if (p.x > width / 2) p.x = -width / 2;
        if (p.y < -height / 2) p.y = height / 2;
        if (p.y > height / 2) p.y = -height / 2;
        if (p.z < 50) p.z = 500;
        if (p.z > 550) p.z = 50;
      });

      // Sort by depth (z) for 3D rendering order
      particles.sort((a, b) => b.z - a.z);

      // Draw constellation connections between nearby 3D points
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 140) {
            const scale1 = fov / (fov + p1.z);
            const scale2 = fov / (fov + p2.z);

            const x1 = cx + p1.x * scale1;
            const y1 = cy + p1.y * scale1;
            const x2 = cx + p2.x * scale2;
            const y2 = cy + p2.y * scale2;

            const alpha = (1 - dist / 140) * 0.25;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw projected 3D nodes
      particles.forEach((p) => {
        const scale = fov / (fov + p.z);
        const projX = cx + p.x * scale;
        const projY = cy + p.y * scale;
        const projRadius = p.radius * scale;

        const opacity = Math.max(0.2, 1 - p.z / 600);

        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(1, projRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = projRadius * 4;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60 z-0"
    />
  );
}
