"use client";

import { useEffect, useRef, useState } from "react";
import { SCROLL_HEIGHT_VH } from "@/lib/constants";

export interface ScrollProgressState {
  /**
   * 0-1, clamped: progress through the hero canvas's own 500vh scroll
   * journey specifically (not the whole page). Drives the canvas frame
   * index and the 4 text overlay sections, since the spec's scroll
   * percentages ("Built Different visible 0-22%" etc.) describe beats
   * within the hero story, not the full page including below-fold
   * sections.
   */
  heroProgress: number;
  /**
   * 0-1, clamped: window.scrollY / (document.scrollHeight - innerHeight)
   * across the WHOLE page — matches the scroll progress bar's spec'd
   * formula literally, and is a different (smaller-denominator-free)
   * value than heroProgress once below-fold sections add height.
   */
  pageProgress: number;
  /** raw scroll position in px */
  scrollY: number;
}

const INITIAL_STATE: ScrollProgressState = { heroProgress: 0, pageProgress: 0, scrollY: 0 };

/**
 * Single source of truth for scroll position, consumed by the canvas,
 * all text overlays, the navbar, and the progress bar. One passive
 * scroll listener feeds a ref; an rAF loop reads the ref and commits
 * state only when the value actually changes, so we never thrash React
 * on every scroll event and never use setInterval for anything visual.
 */
export function useScrollProgress(): ScrollProgressState {
  const [state, setState] = useState<ScrollProgressState>(INITIAL_STATE);
  const latestScrollY = useRef(0);
  const lastCommitted = useRef<ScrollProgressState>(INITIAL_STATE);

  useEffect(() => {
    const handleScroll = () => {
      latestScrollY.current = window.scrollY;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    let rafId: number;
    const tick = () => {
      const scrollY = latestScrollY.current;
      const innerHeight = window.innerHeight;

      const pageMaxScroll = document.documentElement.scrollHeight - innerHeight;
      const pageProgress = pageMaxScroll > 0 ? Math.min(1, Math.max(0, scrollY / pageMaxScroll)) : 0;

      const heroMaxScroll = (SCROLL_HEIGHT_VH / 100) * innerHeight - innerHeight;
      const heroProgress = heroMaxScroll > 0 ? Math.min(1, Math.max(0, scrollY / heroMaxScroll)) : 0;

      const prev = lastCommitted.current;
      if (prev.scrollY !== scrollY || prev.pageProgress !== pageProgress || prev.heroProgress !== heroProgress) {
        const next = { heroProgress, pageProgress, scrollY };
        lastCommitted.current = next;
        setState(next);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return state;
}
