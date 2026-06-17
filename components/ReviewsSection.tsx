interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Muhammad Ali",
    rating: 5,
    text: "Best burgers in Sialkot, hands down! The Smokehouse Stack is incredible — juicy, perfectly seasoned, and the BBQ glaze takes it to another level. Delivery arrived hot and on time. Will definitely be back!",
    date: "2 weeks ago",
  },
  {
    name: "Ayesha Raza",
    rating: 5,
    text: "Visited with family and everyone was impressed. The food quality is consistently great and the staff is very welcoming. The Spicy Inferno Stack is not for the faint-hearted but absolutely delicious!",
    date: "1 month ago",
  },
  {
    name: "Hamza Tariq",
    rating: 5,
    text: "Seven Days never disappoints! The Original Stack is my go-to every week. Fresh ingredients, perfect bun-to-patty ratio, and the house sauce is genuinely addictive. Best value for money in Sialkot.",
    date: "3 weeks ago",
  },
  {
    name: "Sara Khan",
    rating: 4,
    text: "Great food and very reasonable prices for the quality you get. The Double Trouble Stack is massive — perfect for sharing. Free home delivery is a huge plus. Will definitely order again.",
    date: "1 month ago",
  },
  {
    name: "Usman Ahmed",
    rating: 5,
    text: "Ordered delivery for the first time and was blown away. The Obsession burger lives up to its name — truffle aioli and caramelised onions together are something else. Arrived hot and fresh. 10/10!",
    date: "2 months ago",
  },
];

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={star <= rating ? "var(--toasted)" : "var(--divider-toasted)"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section style={{ background: "var(--bg-section)", padding: "80px 24px" }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--toasted)",
              marginBottom: "12px",
            }}
          >
            Google Reviews
          </div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 6vw, 64px)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--cream)",
              margin: "0 0 16px",
            }}
          >
            WHAT PEOPLE SAY.
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <StarRating rating={5} size={16} />
            <span
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "24px",
                color: "var(--cream)",
                letterSpacing: "1px",
                lineHeight: 1,
              }}
            >
              4.8
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                color: "var(--cream-muted)",
              }}
            >
              on Google Maps
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                borderTop: "2px solid var(--divider-toasted)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {/* Reviewer info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "var(--gradient-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-bebas)",
                      fontSize: "18px",
                      color: "var(--bg-deep)",
                      flexShrink: 0,
                    }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--cream)",
                        margin: 0,
                      }}
                    >
                      {review.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "11px",
                        color: "var(--cream-muted)",
                        margin: "3px 0 0",
                      }}
                    >
                      {review.date}
                    </p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>

              {/* Review text */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--cream-muted)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
