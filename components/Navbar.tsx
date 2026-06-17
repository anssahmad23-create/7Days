"use client";

import Image from "next/image";
import { NAVBAR_SOLID_THRESHOLD } from "@/lib/constants";

interface NavbarProps {
  scrollY: number;
}

const linkStyle = {
  fontFamily: "var(--font-inter)",
  fontSize: "12px",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  color: "var(--cream-muted)",
  transition: "color 0.25s ease",
};

export default function Navbar({ scrollY }: NavbarProps) {
  const isSolid = scrollY > NAVBAR_SOLID_THRESHOLD;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[150] flex items-center justify-between px-6 py-2"
      style={{
        // Glass effect: never goes fully opaque — no more "black bar"
        background: isSolid ? "rgba(8, 4, 0, 0.48)" : "transparent",
        backdropFilter: isSolid ? "blur(22px)" : "none",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        borderBottom: isSolid ? "1px solid rgba(212,132,10,0.12)" : "1px solid transparent",
      }}
    >
      {/* Logo — bigger, no white box, drop-shadow keeps it readable on the dark vignette */}
      <a href="#" data-cursor-hover style={{ textDecoration: "none", flexShrink: 0 }}>
        <Image
          src="/logo.png"
          alt="7 Seven Days Family Restaurant"
          width={280}
          height={88}
          priority
          style={{
            objectFit: "contain",
            display: "block",
            filter:
              "drop-shadow(0 0 10px rgba(255,248,231,0.5)) drop-shadow(0 0 3px rgba(255,255,255,0.8)) brightness(1.1)",
          }}
        />
      </a>

      <div className="hidden md:flex items-center gap-8">
        <a href="#menu" data-cursor-hover className="hover-toasted" style={linkStyle}>
          Menu
        </a>
        <a href="#locations" data-cursor-hover className="hover-toasted" style={linkStyle}>
          Locations
        </a>
        <a href="#" data-cursor-hover className="hover-toasted" style={linkStyle}>
          Story
        </a>
        <a
          href="#menu"
          data-cursor-hover
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "var(--toasted)",
            color: "var(--bg-deep)",
            padding: "9px 22px",
            borderRadius: "2px",
            transition: "background 0.25s ease",
            textDecoration: "none",
          }}
          className="hover-toasted-bg"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
