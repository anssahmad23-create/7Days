"use client";

import { CSSProperties } from "react";
import { FADE_EDGE } from "@/lib/constants";

export type OverlayPosition = "bottom-left" | "top-right" | "center";

interface TextOverlayProps {
  progress: number;
  range: { start: number; end: number };
  position: OverlayPosition;
  label: string;
  headlineLines: string[];
  subtext: string;
  /** CSS gradient (var(--gradient-x)) applied as gradient text on the headline, or undefined for solid cream. */
  headlineGradient?: string;
  headlineSize: string; // e.g. "clamp(48px, 9vw, 110px)"
  headlineLetterSpacing: string;
  headlineLineHeight?: string;
}

function sectionOpacity(progress: number, start: number, end: number, edge = FADE_EDGE): number {
  if (progress < start - edge || progress > end + edge) return 0;
  if (progress < start) return (progress - (start - edge)) / edge;
  if (progress > end) return 1 - (progress - end) / edge;
  return 1;
}

const positionClasses: Record<OverlayPosition, string> = {
  "bottom-left": "items-start text-left justify-end pb-[15%] pl-[10%]",
  "top-right": "items-end text-right justify-start pt-[18%] pr-[8%]",
  center: "items-center text-center justify-center",
};

export default function TextOverlay({
  progress,
  range,
  position,
  label,
  headlineLines,
  subtext,
  headlineGradient,
  headlineSize,
  headlineLetterSpacing,
  headlineLineHeight = "0.9",
}: TextOverlayProps) {
  const opacity = sectionOpacity(progress, range.start, range.end);

  const headlineStyle: CSSProperties = {
    fontFamily: "var(--font-bebas)",
    fontSize: headlineSize,
    letterSpacing: headlineLetterSpacing,
    lineHeight: headlineLineHeight,
    textTransform: "uppercase",
    margin: 0,
    textShadow: "0 2px 24px rgba(8, 4, 0, 0.6)",
    ...(headlineGradient
      ? { backgroundImage: headlineGradient }
      : { color: "var(--cream)" }),
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex flex-col px-6 ${positionClasses[position]}`}
      style={{ opacity, transition: "opacity 0.05s linear" }}
    >
      <div style={{ maxWidth: position === "center" ? "100%" : "560px" }}>
        <div
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--toasted)",
          }}
        >
          {label}
        </div>
        <h2 className={headlineGradient ? "gradient-text" : ""} style={headlineStyle}>
          {headlineLines.map((line, i) => (
            <span key={i} style={{ display: "block" }}>
              {line}
            </span>
          ))}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "16px",
            color: "var(--cream-muted)",
            marginTop: "24px",
          }}
        >
          {subtext}
        </p>
      </div>
    </div>
  );
}
