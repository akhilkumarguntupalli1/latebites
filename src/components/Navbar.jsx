import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartDrawer from "./CartDrawer.jsx";

export default function Navbar() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          background: "#ff4d4d",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          LateBites
        </Link>

        {/* Links */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/checkout" style={{ color: "white", textDecoration: "none" }}>
            Checkout
          </Link>

          {/* Cart Icon */}
          <div
            style={{
              position: "relative",
              cursor: "pointer",
              fontSize: "22px",
            }}
            onClick={() => setIsCartOpen(true)}
          >
            🛒
            {cart.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  background: "yellow",
                  color: "black",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Swiggy-style Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
