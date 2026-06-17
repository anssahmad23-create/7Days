const stats = [
  { number: "100%", label: "GRASS-FED" },
  { number: "0", label: "FROZEN INGREDIENTS" },
  { number: "14hrs", label: "PREP TO PLATE" },
];

export default function StatsSection() {
  return (
    <section className="px-6 py-24 md:py-32" style={{ background: "var(--bg-deep)" }}>
      <div className="flex flex-col sm:flex-row items-center justify-center max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center">
            <div className="text-center px-10 py-6">
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "72px",
                  color: "var(--toasted)",
                }}
              >
                {stat.number}
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--cream-muted)",
                }}
              >
                {stat.label}
              </div>
            </div>
            {i < stats.length - 1 && (
              <div
                className="hidden sm:block"
                style={{ width: "1px", height: "80px", background: "var(--divider-toasted)" }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
