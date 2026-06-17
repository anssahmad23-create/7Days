"use client";

import { useEffect, useRef } from "react";

/**
 * Inner dot snaps to the raw mouse position every mousemove (no lag).
 * Outer ring is lerped toward the mouse position inside a single rAF
 * loop (factor ~0.2/frame @60fps settles in ~100ms). Hidden entirely on
 * touch/coarse-pointer devices, where there is no mouse to replace.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    document.documentElement.classList.add("has-custom-cursor");

    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
      }
    };

    const handleOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest("[data-cursor-hover]");
      ringRef.current?.classList.toggle("cursor-ring-hover", !!el);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    let rafId: number;
    const tick = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.2;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[300] pointer-events-none hidden md:block"
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "var(--toasted)",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[300] pointer-events-none hidden md:block cursor-ring"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1px solid var(--toasted)",
        }}
      />
    </>
  );
}
