"use client";

import { useEffect, useRef, useState } from "react";
import { MOBILE_BREAKPOINT, MOBILE_FRAME_STRIDE, TOTAL_FRAMES } from "@/lib/constants";

export interface FramePreloaderState {
  images: HTMLImageElement[];
  percent: number;
  isLoaded: boolean;
}

function frameUrl(index: number): string {
  // ffmpeg's %04d output, 1-indexed.
  return `/frames/frame_${String(index + 1).padStart(4, "0")}.webp`;
}

/**
 * Preloads the full frame sequence (or, on mobile, every Nth frame) and
 * reports a throttled percentage back to the loading screen. The same
 * HTMLImageElement[] array produced here is reused as the canvas draw
 * source — no duplicate fetches once loading completes.
 */
export function useFramePreloader(): FramePreloaderState {
  const [percent, setPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT;
    const indices: number[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i += isMobile ? MOBILE_FRAME_STRIDE : 1) {
      indices.push(i);
    }

    const images: HTMLImageElement[] = new Array(indices.length);
    let loadedCount = 0;
    let cancelled = false;

    indices.forEach((frameIndex, arrayIndex) => {
      const img = new Image();
      const onDone = () => {
        loadedCount += 1;
        if (!cancelled && (loadedCount % 4 === 0 || loadedCount === indices.length)) {
          setPercent(Math.round((loadedCount / indices.length) * 100));
        }
        if (!cancelled && loadedCount === indices.length) {
          imagesRef.current = images;
          setIsLoaded(true);
        }
      };
      img.onload = onDone;
      img.onerror = () => {
        console.warn(`Stack'd: failed to preload ${frameUrl(frameIndex)}`);
        onDone();
      };
      img.src = frameUrl(frameIndex);
      images[arrayIndex] = img;
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return { images: imagesRef.current, percent, isLoaded };
}
