"use client";

import { useState, useCallback, useRef } from "react";
import { menuCategories, MenuItem, MenuCategory } from "@/lib/menuData";
import MenuModal from "./MenuModal";
import CartDrawer, { CartItem } from "./CartDrawer";

interface Selected {
  item: MenuItem;
  cat: MenuCategory;
}

export default function MenuSection() {
  const [activeId, setActiveId] = useState("burgers");
  const [selected, setSelected] = useState<Selected | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  const totalQty = cart.reduce((s, ci) => s + ci.qty, 0);
  const currentCategory = menuCategories.find((c) => c.id === activeId)!;

  const addToCart = useCallback((item: MenuItem, qty: number) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.name === item.name);
      if (existing) {
        return prev.map((ci) =>
          ci.item.name === item.name ? { ...ci, qty: ci.qty + qty } : ci
        );
      }
      return [...prev, { item, qty }];
    });
  }, []);

  const increment = useCallback((name: string) => {
    setCart((prev) =>
      prev.map((ci) => (ci.item.name === name ? { ...ci, qty: ci.qty + 1 } : ci))
    );
  }, []);

  const decrement = useCallback((name: string) => {
    setCart((prev) =>
      prev
        .map((ci) => (ci.item.name === name ? { ...ci, qty: ci.qty - 1 } : ci))
        .filter((ci) => ci.qty > 0)
    );
  }, []);

  const remove = useCallback((name: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.name !== name));
  }, []);

  const selectCategory = (id: string) => {
    setActiveId(id);
    const tab = tabsRef.current?.querySelector(`[data-tab="${id}"]`);
    tab?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <>
      <section id="menu" style={{ background: "var(--bg-deep)" }}>
        {/* Section header */}
        <div className="px-6 pt-24 md:pt-32 pb-0">
          <div className="flex flex-wrap items-center justify-between gap-6 max-w-6xl mx-auto mb-10">
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(36px, 6vw, 64px)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--cream)",
                margin: 0,
              }}
            >
              THE MENU.
            </h2>

            {totalQty > 0 && (
              <button
                onClick={() => setCartOpen(true)}
                data-cursor-hover
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  background: "var(--toasted)",
                  color: "var(--bg-deep)",
                  padding: "11px 22px",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  borderLeft: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>VIEW CART</span>
                <span
                  style={{
                    background: "var(--bg-deep)",
                    color: "var(--toasted)",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-bebas)",
                    fontSize: "15px",
                  }}
                >
                  {totalQty}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Sticky category tab bar */}
        <div
          style={{
            borderBottom: "1px solid var(--divider-toasted)",
            position: "sticky",
            top: "104px",
            zIndex: 100,
            background: "var(--bg-deep)",
          }}
        >
          <div
            ref={tabsRef}
            className="flex overflow-x-auto"
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 24px",
              scrollbarWidth: "none",
            }}
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                data-tab={cat.id}
                data-cursor-hover
                onClick={() => selectCategory(cat.id)}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: activeId === cat.id ? "var(--toasted)" : "var(--cream-muted)",
                  background: "transparent",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom:
                    activeId === cat.id
                      ? "2px solid var(--toasted)"
                      : "2px solid transparent",
                  borderLeft: "none",
                  padding: "14px 18px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s ease, border-bottom-color 0.2s ease",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "14px" }}>{cat.emoji}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Items grid */}
        <div className="px-6 py-12 pb-24 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {currentCategory.items.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelected({ item, cat: currentCategory })}
                data-cursor-hover
                className="hover-card flex flex-col text-left w-full"
                style={{
                  background: "var(--bg-card)",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "none",
                  borderLeft: "none",
                  outline: "none",
                  padding: 0,
                  transition: "transform 0.25s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                {/* Food visual header */}
                <div
                  style={{
                    background: currentCategory.gradient,
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 24px",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <span style={{ fontSize: "60px", lineHeight: 1, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}>
                    {item.image ? undefined : currentCategory.emoji}
                  </span>
                  {/* Price badge */}
                  <div
                    style={{
                      background: "rgba(8,4,0,0.72)",
                      backdropFilter: "blur(4px)",
                      padding: "6px 14px",
                      borderTop: "1px solid var(--divider-toasted)",
                      borderRight: "1px solid var(--divider-toasted)",
                      borderBottom: "1px solid var(--divider-toasted)",
                      borderLeft: "1px solid var(--divider-toasted)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: "22px",
                        color: "var(--toasted-light)",
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>

                  {item.tag && (
                    <span
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        fontFamily: "var(--font-inter)",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        background: "var(--toasted)",
                        color: "var(--bg-deep)",
                        padding: "3px 8px",
                      }}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Text content */}
                <div
                  className="flex flex-col flex-1"
                  style={{
                    padding: "20px 22px 20px",
                    borderTop: "2px solid var(--toasted)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      fontSize: "17px",
                      color: "var(--cream)",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </h3>

                  {item.description && (
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        fontSize: "13px",
                        color: "var(--cream-muted)",
                        margin: "8px 0 0",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </p>
                  )}

                  <div
                    style={{
                      borderTop: "1px solid var(--divider-toasted)",
                      marginTop: "16px",
                      paddingTop: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "var(--toasted-light)",
                      }}
                    >
                      VIEW & ORDER →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <MenuModal
          item={selected.item}
          categoryEmoji={selected.cat.emoji}
          categoryGradient={selected.cat.gradient}
          onClose={() => setSelected(null)}
          onAddToCart={(item, qty) => {
            addToCart(item, qty);
            setCartOpen(true);
          }}
        />
      )}

      {cartOpen && (
        <CartDrawer
          items={cart}
          onClose={() => setCartOpen(false)}
          onIncrement={increment}
          onDecrement={decrement}
          onRemove={remove}
        />
      )}
    </>
  );
}
