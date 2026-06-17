"use client";

import { ReactNode, useEffect, useRef } from "react";
import { remapScrollToFrameFraction } from "@/lib/constants";

interface ScrollCanvasProps {
  images: HTMLImageElement[];
  progress: number;
  children?: ReactNode;
}

/**
 * Full-viewport sticky canvas. Draws the frame selected by the
 * remapped scroll progress (see lib/constants.ts for why this isn't a
 * straight linear mapping). All drawing happens inside requestAnimationFrame,
 * never setInterval.
 */
export default function ScrollCanvas({ images, progress, children }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let lastDrawnIndex = -1;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      lastDrawnIndex = -1; // force redraw at new size
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (index: number) => {
      const img = images[index];
      if (!img || !img.complete) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = cw / ch;

      let drawWidth: number;
      let drawHeight: number;

      if (window.innerWidth < 768) {
        // Contain on mobile: landscape frames would be severely over-cropped
        // with cover-fit on portrait phones, so show the full frame with the
        // dark background filling the bars (virtually invisible on --bg-deep).
        if (imgRatio > canvasRatio) {
          drawWidth = cw;
          drawHeight = cw / imgRatio;
        } else {
          drawHeight = ch;
          drawWidth = ch * imgRatio;
        }
      } else {
        // Cover on desktop: fill the viewport, cropping overflow.
        if (imgRatio > canvasRatio) {
          drawHeight = ch;
          drawWidth = ch * imgRatio;
        } else {
          drawWidth = cw;
          drawHeight = cw / imgRatio;
        }
      }

      const dx = (cw - drawWidth) / 2;
      const dy = (ch - drawHeight) / 2;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
    };

    const tick = () => {
      const frameFraction = remapScrollToFrameFraction(progressRef.current);
      const index = Math.min(images.length - 1, Math.round(frameFraction * (images.length - 1)));
      if (index !== lastDrawnIndex) {
        draw(index);
        lastDrawnIndex = index;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, [images]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      {/* Warm canvas glow — subtle radial warmth behind the frame */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, var(--glow-toasted) 0%, transparent 70%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Dark vignette at top — keeps navbar logo readable without navbar needing a solid bg */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none canvas-top-vignette"
        style={{
          background: "linear-gradient(to bottom, rgba(8,4,0,0.72) 0%, transparent 100%)",
        }}
      />
      {children}
    </div>
  );
}
