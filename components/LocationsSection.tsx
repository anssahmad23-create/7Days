import Image from "next/image";

export default function LocationsSection() {
  return (
    <section id="locations" style={{ background: "var(--bg-section)" }}>
      <div className="px-6 py-24 md:py-32">
        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(36px, 6vw, 64px)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--cream)",
          }}
        >
          FIND US.
        </h2>

        <div className="max-w-2xl mx-auto">
          <div
            style={{
              background: "var(--bg-card)",
              borderTop: "2px solid var(--toasted)",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            {/* Logo inside the card */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Seven Days Family Restaurant"
                width={180}
                height={58}
                style={{
                  objectFit: "contain",
                  filter:
                    "drop-shadow(0 0 8px rgba(212,132,10,0.5)) drop-shadow(0 0 2px rgba(255,255,255,0.4)) brightness(1.1)",
                }}
              />
            </div>

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
              Our Location
            </div>

            <h3
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(26px, 5vw, 40px)",
                letterSpacing: "2px",
                color: "var(--cream)",
                margin: "0 0 16px",
                textTransform: "uppercase",
              }}
            >
              Seven Days Family Restaurant
            </h3>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "17px",
                fontWeight: 400,
                color: "var(--cream-muted)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Jammu Road, Dalowali
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "17px",
                fontWeight: 400,
                color: "var(--cream-muted)",
                margin: "4px 0 0",
              }}
            >
              Sialkot, Pakistan
            </p>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "var(--divider-toasted)",
                margin: "36px 0",
              }}
            />

            {/* Contact grid */}
            <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16">
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--toasted)",
                    marginBottom: "10px",
                  }}
                >
                  PHONE
                </div>
                <a
                  href="tel:0523206050"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "var(--cream)",
                    display: "block",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  className="hover-toasted"
                >
                  052 3206050
                </a>
                <a
                  href="tel:0523206060"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "var(--cream)",
                    display: "block",
                    textDecoration: "none",
                    marginTop: "6px",
                    transition: "color 0.2s ease",
                  }}
                  className="hover-toasted"
                >
                  052 3206060
                </a>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--toasted)",
                    marginBottom: "10px",
                  }}
                >
                  MOBILE
                </div>
                <a
                  href="tel:03245600177"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "var(--cream)",
                    display: "block",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  className="hover-toasted"
                >
                  0324-5600177
                </a>
                <a
                  href="tel:03245600220"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "var(--cream)",
                    display: "block",
                    textDecoration: "none",
                    marginTop: "6px",
                    transition: "color 0.2s ease",
                  }}
                  className="hover-toasted"
                >
                  0324-5600220
                </a>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "var(--toasted)",
                    marginBottom: "10px",
                  }}
                >
                  DELIVERY
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "var(--green)",
                    margin: 0,
                    fontWeight: 600,
                  }}
                >
                  FREE
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    color: "var(--cream-muted)",
                    margin: "6px 0 0",
                  }}
                >
                  Home delivery
                </p>
              </div>
            </div>

            {/* Tagline */}
            <div
              style={{
                marginTop: "36px",
                paddingTop: "28px",
                borderTop: "1px solid var(--divider-toasted)",
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
                fontStyle: "italic",
                color: "var(--cream-muted)",
              }}
            >
              &ldquo;Eat Fresh&rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <a
        href="tel:0523206050"
        data-cursor-hover
        className="block w-full text-center py-10 transition-opacity hover:opacity-90"
        style={{ background: "var(--gradient-gold)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(18px, 4vw, 28px)",
            color: "var(--bg-deep)",
            letterSpacing: "2px",
          }}
        >
          CALL TO ORDER — 052 3206050
        </span>
      </a>
    </section>
  );
}
