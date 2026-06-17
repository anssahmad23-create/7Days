const ingredients = [
  {
    name: "CHICKEN & BEEF",
    description: "Fresh chicken and 100% grass-fed beef, sourced daily and never frozen.",
    color: "var(--red)",
    // Drumstick + burger patty combined silhouette
    path: "M15 3c2 1.5 3 4 2 6L9 17c-1.5 1-3.5 1-5-0.5a2 2 0 0 1 0-3l.5-.5L3 11c0-2 1.5-3.5 3-4M9 3c1.5-1 3.5-1 5 0.5l7 7c1.5 1.5 1 4-0.5 5",
  },
  {
    name: "LETTUCE",
    description: "Crisp, hand-torn, sourced from local farms daily.",
    color: "var(--green)",
    path: "M12 4c4 0 8 3 8 8s-4 8-8 8-8-3-8-8 4-8 8-8z M12 4v16 M8 8c2 2 2 8 0 12 M16 8c-2 2-2 8 0 12",
  },
  {
    name: "CHEESE",
    description: "Aged cheddar, melted to a perfect golden drape.",
    color: "var(--toasted)",
    path: "M3 18l9-11 9 11H3z M8 18l2-5 2 5 M14 18l2-5",
  },
  {
    name: "BUN",
    description: "Toasted gold, sesame-topped, baked fresh in-house.",
    color: "var(--cream)",
    path: "M4 14c0-4 3.5-8 8-8s8 4 8 8H4z M5 17h14 M9 11l.5-1 M12 10l.5-1 M15 11l.5-1",
  },
];

export default function IngredientsSection() {
  return (
    <section className="px-6 py-24 md:py-32" style={{ background: "var(--bg-section)" }}>
      <h2
        className="text-center mb-16"
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(36px, 6vw, 64px)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--cream)",
        }}
      >
        WHAT GOES IN.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {ingredients.map((ing) => (
          <div
            key={ing.name}
            className="hover-card"
            style={{
              background: "var(--bg-card)",
              borderTop: "2px solid var(--toasted)",
              padding: "36px 28px",
              transition: "transform 0.25s ease, border-top-color 0.25s ease",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={ing.color} strokeWidth="1.5">
              <path d={ing.path} />
            </svg>
            <h3
              className="mt-5"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "20px",
                letterSpacing: "2px",
                color: "var(--cream)",
              }}
            >
              {ing.name}
            </h3>
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "14px",
                color: "var(--cream-muted)",
              }}
            >
              {ing.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
