"use client";

import { MenuItem } from "@/lib/menuData";

export interface CartItem {
  item: MenuItem;
  qty: number;
}

interface CartDrawerProps {
  items: CartItem[];
  onClose: () => void;
  onIncrement: (name: string) => void;
  onDecrement: (name: string) => void;
  onRemove: (name: string) => void;
}

const btnStyle = {
  width: "30px",
  height: "30px",
  background: "var(--bg-section)",
  borderTop: "1px solid var(--divider-toasted)",
  borderRight: "1px solid var(--divider-toasted)",
  borderBottom: "1px solid var(--divider-toasted)",
  borderLeft: "1px solid var(--divider-toasted)",
  color: "var(--cream)",
  fontSize: "16px",
  lineHeight: 1,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

export default function CartDrawer({
  items,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
}: CartDrawerProps) {
  const total = items.reduce((sum, ci) => sum + ci.item.priceNum * ci.qty, 0);
  const itemCount = items.reduce((sum, ci) => sum + ci.qty, 0);

  return (
    <div className="fixed inset-0 z-[400]">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(8, 4, 0, 0.72)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="absolute right-0 top-0 bottom-0 flex flex-col"
        style={{
          width: "min(420px, 100vw)",
          background: "var(--bg-card)",
          borderLeft: "1px solid var(--divider-toasted)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px 28px",
            borderBottom: "1px solid var(--divider-toasted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "28px",
                letterSpacing: "3px",
                color: "var(--cream)",
                margin: 0,
              }}
            >
              YOUR ORDER
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                color: "var(--cream-muted)",
                margin: "4px 0 0",
              }}
            >
              {itemCount} item{itemCount !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            data-cursor-hover
            style={{
              ...btnStyle,
              width: "36px",
              height: "36px",
              color: "var(--cream-muted)",
              fontSize: "15px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Item list */}
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 28px" }}>
          {items.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "48px" }}>🛒</div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  color: "var(--cream-muted)",
                  margin: 0,
                }}
              >
                Your cart is empty
              </p>
            </div>
          ) : (
            items.map((ci) => (
              <div
                key={ci.item.name}
                style={{
                  padding: "18px 0",
                  borderBottom: "1px solid var(--divider-toasted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--cream)",
                      margin: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {ci.item.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "20px",
                      color: "var(--toasted)",
                      margin: "4px 0 0",
                      lineHeight: 1,
                    }}
                  >
                    Rs. {(ci.item.priceNum * ci.qty).toLocaleString()}
                  </p>
                </div>

                {/* Qty controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                  <button
                    onClick={() => onDecrement(ci.item.name)}
                    data-cursor-hover
                    style={btnStyle}
                  >
                    −
                  </button>
                  <span
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "20px",
                      color: "var(--cream)",
                      minWidth: "22px",
                      textAlign: "center",
                    }}
                  >
                    {ci.qty}
                  </span>
                  <button
                    onClick={() => onIncrement(ci.item.name)}
                    data-cursor-hover
                    style={btnStyle}
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(ci.item.name)}
                  aria-label={`Remove ${ci.item.name}`}
                  data-cursor-hover
                  style={{
                    width: "28px",
                    height: "28px",
                    background: "transparent",
                    border: "none",
                    color: "var(--cream-muted)",
                    cursor: "pointer",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.6,
                    flexShrink: 0,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              padding: "24px 28px 32px",
              borderTop: "1px solid var(--divider-toasted)",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--cream-muted)",
                }}
              >
                TOTAL
              </span>
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "34px",
                  color: "var(--cream)",
                  lineHeight: 1,
                }}
              >
                Rs. {total.toLocaleString()}
              </span>
            </div>

            <a
              href="tel:0523206050"
              data-cursor-hover
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                background: "var(--gradient-gold)",
                color: "var(--bg-deep)",
                padding: "18px",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
            >
              PLACE ORDER — CALL NOW
            </a>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                color: "var(--green)",
                textAlign: "center",
                marginTop: "12px",
                fontWeight: 500,
              }}
            >
              ✓ Free home delivery on all orders
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
