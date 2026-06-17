"use client";

import Image from "next/image";

interface LoadingScreenProps {
  percent: number;
  fadingOut: boolean;
}

export default function LoadingScreen({ percent, fadingOut }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center ${
        fadingOut ? "loading-fade-out" : ""
      }`}
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Seven Days logo — prominent brand presence on the loading screen */}
      <Image
        src="/logo.png"
        alt="Seven Days Family Restaurant"
        width={260}
        height={82}
        priority
        style={{
          objectFit: "contain",
          filter:
            "drop-shadow(0 0 16px rgba(212,132,10,0.6)) drop-shadow(0 0 4px rgba(255,255,255,0.5)) brightness(1.12)",
        }}
      />

      <div
        className="mt-8"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "10px",
          letterSpacing: "4px",
          color: "var(--cream-muted)",
          textTransform: "uppercase",
        }}
      >
        LOADING THE GOOD STUFF...
      </div>

      <div
        className="mt-5 overflow-hidden"
        style={{ width: "240px", height: "2px", background: "var(--track-fill)" }}
      >
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            background: "var(--gradient-gold)",
            transition: "width 0.15s ease-out",
          }}
        />
      </div>

      <div
        className="mt-3"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "11px",
          color: "var(--cream-muted)",
        }}
      >
        {percent}%
      </div>

      <div
        className="mt-6"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--toasted)",
          opacity: 0.7,
        }}
      >
        Eat Fresh
      </div>
    </div>
  );
}
