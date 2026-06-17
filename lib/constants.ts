// Discovered via: ffmpeg -i burger.mp4 -vf fps=30 -c:v libwebp -q:v 80 public/frames/frame_%04d.webp
// then (Get-ChildItem public/frames -Filter *.webp).Count -> 579
export const TOTAL_FRAMES = 579;

export const MOBILE_BREAKPOINT = 768;

// On mobile we draw every 2nd frame to cut preload/network cost roughly
// in half, per the spec's "skip every 2nd frame on < 768px" rule.
export const MOBILE_FRAME_STRIDE = 2;

/**
 * The source footage is a steam-and-settle "explosion loop": it starts
 * fully assembled (frame 1), blows apart to peak chaos around the
 * midpoint (~frame 290), then reassembles and settles back to fully
 * assembled by the last frame (579). The brand narrative wants the
 * OPPOSITE pacing: ingredients fully separated early (by 28% scroll),
 * stacking back together through the middle (28-68%), and a long,
 * lingering "perfect burger" hold at the end (72-100%).
 *
 * To make the actual footage hit those story beats at the exact scroll
 * percentages from the spec, frame selection is NOT a straight
 * `progress * totalFrames` mapping. Instead we remap scroll progress
 * (0-1) to a "frame fraction" (0-1) through a few anchor points, walking
 * piecewise-linearly between them:
 *   - 0%   scroll -> 0.00 frame fraction (frame 1, assembled "Built Different" open)
 *   - 28%  scroll -> 0.50 frame fraction (frame ~290, peak separation = "ingredients floating")
 *   - 68%  scroll -> 0.88 frame fraction (frame ~520, nearly reassembled = end of "stacking")
 *   - 100% scroll -> 1.00 frame fraction (frame 579, fully assembled + steam settled)
 */
export const FRAME_REMAP_ANCHORS: [scroll: number, frame: number][] = [
  [0, 0],
  [0.28, 0.5],
  [0.68, 0.88],
  [1, 1],
];

export function remapScrollToFrameFraction(progress: number): number {
  const p = Math.min(1, Math.max(0, progress));
  for (let i = 0; i < FRAME_REMAP_ANCHORS.length - 1; i++) {
    const [s0, f0] = FRAME_REMAP_ANCHORS[i];
    const [s1, f1] = FRAME_REMAP_ANCHORS[i + 1];
    if (p >= s0 && p <= s1) {
      const t = s1 === s0 ? 0 : (p - s0) / (s1 - s0);
      return f0 + (f1 - f0) * t;
    }
  }
  return 1;
}

// Small linear fade applied at each text section's visible-range edges,
// expressed as a fraction of total scroll (0.03 = 3 percentage points).
export const FADE_EDGE = 0.03;

export const TEXT_SECTIONS = {
  builtDifferent: { start: 0, end: 0.22 },
  layerByLayer: { start: 0.3, end: 0.55 },
  stackIsPerfect: { start: 0.6, end: 0.78 },
  cta: { start: 0.84, end: 1.0 },
} as const;

// Scroll height of the canvas/story container, in viewport heights.
export const SCROLL_HEIGHT_VH = 500;

// Navbar background swap threshold, in raw scroll px.
export const NAVBAR_SOLID_THRESHOLD = 80;
