"use client";

import { useEffect, useState } from "react";
import { MenuItem } from "@/lib/menuData";

interface MenuModalProps {
  item: MenuItem;
  categoryEmoji: string;
  categoryGradient: string;
  onClose: () => void;
  onAddToCart: (item: MenuItem, qty: number) => void;
}

export default function MenuModal({
  item,
  categoryEmoji,
  categoryGradient,
  onClose,
  onAddToCart,
}: MenuModalProps) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleAdd = () => {
    onAddToCart(item, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      className="fixed inset-0 z-[500] flex items-center justify-center p-4"
      style={{ background: "rgba(8, 4, 0, 0.92)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg"
        style={{
          background: "var(--bg-card)",
          borderTop: "3px solid var(--toasted)",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Food visual — large emoji on category-coloured gradient */}
        <div
          style={{
            background: item.image
              ? undefined
              : categoryGradient,
            height: "260px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {item.image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <>
              {/* Subtle radial glow behind emoji */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at center, rgba(212,132,10,0.12) 0%, transparent 70%)",
                }}
              />
              <div
                style={{
                  fontSize: "96px",
                  lineHeight: 1,
                  filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.6))",
                  zIndex: 1,
                }}
              >
                {categoryEmoji}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "10px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--toasted)",
                  fontWeight: 600,
                  zIndex: 1,
                }}
              >
                Seven Days Family Restaurant
              </div>
            </>
          )}

          {item.tag && (
            <span
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                fontFamily: "var(--font-inter)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                background: "var(--toasted)",
                color: "var(--bg-deep)",
                padding: "5px 12px",
                zIndex: 2,
              }}
            >
              {item.tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "30px 34px 42px" }}>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(28px, 5vw, 44px)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--cream)",
              margin: 0,
              lineHeight: 1,
            }}
          >
            {item.name}
          </h2>

          {item.description && (
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
                fontWeight: 300,
                color: "var(--cream-muted)",
                marginTop: "12px",
                lineHeight: 1.75,
              }}
            >
              {item.description}
            </p>
          )}

          {/* Price + qty row */}
          <div
            style={{
              marginTop: "26px",
              paddingTop: "22px",
              borderTop: "1px solid var(--divider-toasted)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "18px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "40px",
                color: "var(--toasted)",
                lineHeight: 1,
              }}
            >
              {item.price}
            </span>

            {/* Quantity selector */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                data-cursor-hover
                style={{
                  width: "38px",
                  height: "38px",
                  background: "var(--bg-section)",
                  borderTop: "1px solid var(--divider-toasted)",
                  borderRight: "1px solid var(--divider-toasted)",
                  borderBottom: "1px solid var(--divider-toasted)",
                  borderLeft: "1px solid var(--divider-toasted)",
                  color: "var(--cream)",
                  fontSize: "20px",
                  lineHeight: 1,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                −
              </button>
              <span
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "26px",
                  color: "var(--cream)",
                  minWidth: "26px",
                  textAlign: "center",
                }}
              >
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                data-cursor-hover
                style={{
                  width: "38px",
                  height: "38px",
                  background: "var(--bg-section)",
                  borderTop: "1px solid var(--divider-toasted)",
                  borderRight: "1px solid var(--divider-toasted)",
                  borderBottom: "1px solid var(--divider-toasted)",
                  borderLeft: "1px solid var(--divider-toasted)",
                  color: "var(--cream)",
                  fontSize: "20px",
                  lineHeight: 1,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            data-cursor-hover
            className="w-full mt-6"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              background: added ? "var(--green)" : "var(--gradient-gold)",
              color: "var(--bg-deep)",
              padding: "19px",
              borderTop: "none",
              borderRight: "none",
              borderBottom: "none",
              borderLeft: "none",
              cursor: "pointer",
              transition: "background 0.35s ease, transform 0.2s ease",
              transform: added ? "scale(1.02)" : "scale(1)",
            }}
          >
            {added
              ? "✓ ADDED TO CART!"
              : `ADD TO CART — Rs. ${(item.priceNum * qty).toLocaleString()}`}
          </button>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          data-cursor-hover
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            width: "36px",
            height: "36px",
            background: "rgba(8, 4, 0, 0.7)",
            borderTop: "1px solid var(--divider-toasted)",
            borderRight: "1px solid var(--divider-toasted)",
            borderBottom: "1px solid var(--divider-toasted)",
            borderLeft: "1px solid var(--divider-toasted)",
            color: "var(--cream-muted)",
            fontSize: "15px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
