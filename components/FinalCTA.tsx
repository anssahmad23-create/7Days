"use client";

import { FADE_EDGE, TEXT_SECTIONS } from "@/lib/constants";

function sectionOpacity(progress: number, start: number, end: number, edge = FADE_EDGE): number {
  if (progress < start - edge || progress > end + edge) return 0;
  if (progress < start) return (progress - (start - edge)) / edge;
  if (progress > end) return 1 - (progress - end) / edge;
  return 1;
}

interface FinalCTAProps {
  progress: number;
}

export default function FinalCTA({ progress }: FinalCTAProps) {
  const { start, end } = TEXT_SECTIONS.cta;
  const opacity = sectionOpacity(progress, start, end);
  const isInteractive = opacity > 0.4;

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      style={{
        opacity,
        transition: "opacity 0.05s linear",
        pointerEvents: isInteractive ? "auto" : "none",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(44px, 9vw, 104px)",
          letterSpacing: "4px",
          lineHeight: 0.9,
          textTransform: "uppercase",
          color: "var(--cream)",
          margin: 0,
          textShadow: "0 2px 24px rgba(8, 4, 0, 0.6)",
        }}
      >
        <span style={{ display: "block" }}>ORDER THE</span>
        <span style={{ display: "block" }}>OBSESSION.</span>
      </h2>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "15px",
          color: "var(--cream-muted)",
          marginTop: "20px",
        }}
      >
        Now open. Always worth the wait.
      </p>

      <button
        data-cursor-hover
        className="mt-10 transition-transform duration-[250ms] ease-out hover:scale-[1.04]"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "3px",
          textTransform: "uppercase",
          background: "var(--gradient-gold)",
          color: "var(--bg-deep)",
          padding: "20px 56px",
          borderRadius: 0,
          border: "none",
          boxShadow: "0 0 60px var(--cursor-fill)",
          cursor: "none",
        }}
      >
        FIND YOUR NEAREST →
      </button>

      <a
        data-cursor-hover
        href="#menu"
        className="mt-5 hover:underline"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "13px",
          color: "var(--toasted)",
        }}
      >
        View Full Menu
      </a>
    </div>
  );
}
