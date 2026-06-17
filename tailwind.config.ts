import type { Config } from "tailwindcss";

// Deliberately no theme.extend.colors mapping for the brand palette —
// components reference CSS variables directly via arbitrary values
// (e.g. bg-[var(--toasted)]) or inline styles, never a Tailwind color
// utility, per the project's "no hardcoded hex / no shortcut colors"
// rule. Tailwind here only owns layout, spacing, and responsive breakpoints.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Matches the spec's mobile frame-skip breakpoint exactly.
        mobile: { max: "767px" },
      },
    },
  },
  plugins: [],
};
export default config;
