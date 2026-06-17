import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--divider-toasted)" }}>
      <div className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/logo.png"
            alt="Seven Days Family Restaurant"
            width={220}
            height={70}
            style={{
              objectFit: "contain",
              filter:
                "drop-shadow(0 0 12px rgba(212,132,10,0.55)) drop-shadow(0 0 3px rgba(255,255,255,0.5)) brightness(1.1)",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--toasted)",
              marginTop: "14px",
            }}
          >
            Eat Fresh
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              fontWeight: 300,
              color: "var(--cream-muted)",
              marginTop: "8px",
              maxWidth: "420px",
            }}
          >
            Pizza, Fried Chicken &amp; Fast Food — Family Restaurant
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--divider-toasted)", marginBottom: "40px" }} />

        {/* Info columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
          {/* Address */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--toasted)",
                marginBottom: "12px",
              }}
            >
              ADDRESS
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
                color: "var(--cream-muted)",
                lineHeight: 1.75,
              }}
            >
              Jammu Road, Dalowali
              <br />
              Sialkot, Pakistan
            </p>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--toasted)",
                marginBottom: "12px",
              }}
            >
              CONTACT
            </div>
            {(["052 3206050", "052 3206060", "0324-5600177", "0324-5600220"] as const).map(
              (num) => (
                <a
                  key={num}
                  href={`tel:${num.replace(/-/g, "")}`}
                  className="hover-toasted"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    color: "var(--cream-muted)",
                    display: "block",
                    textDecoration: "none",
                    lineHeight: 1.9,
                    transition: "color 0.2s ease",
                  }}
                >
                  {num}
                </a>
              )
            )}
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--toasted)",
                marginBottom: "12px",
              }}
            >
              QUICK LINKS
            </div>
            {(
              [
                ["#menu", "Menu"],
                ["#locations", "Find Us"],
                ["tel:0523206050", "Order Now"],
              ] as const
            ).map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="hover-toasted"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  color: "var(--cream-muted)",
                  display: "block",
                  textDecoration: "none",
                  lineHeight: 1.9,
                  transition: "color 0.2s ease",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--divider-toasted)",
          padding: "16px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            color: "var(--cream-muted)",
            opacity: 0.5,
          }}
        >
          © {year} Seven Days Family Restaurant · Jammu Road, Dalowali, Sialkot
        </p>
      </div>
    </footer>
  );
}
