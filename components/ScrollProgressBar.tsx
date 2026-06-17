interface ScrollProgressBarProps {
  progress: number;
}

/**
 * Gold -> red -> green gradient, mirroring the burger's own layers
 * (toasted bun, ketchup, lettuce). Intentional and non-negotiable.
 */
export default function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  return (
    <div
      className="fixed top-0 left-0 z-[260] pointer-events-none"
      style={{ height: "2px", width: `${progress * 100}%`, background: "var(--gradient-progress)" }}
    />
  );
}
