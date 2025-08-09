import React from "react";
import { useCart } from "../context/CartContext.jsx";

export default function CartDrawer({ isOpen, onClose }) {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: isOpen ? 0 : "-400px",
        width: "300px",
        height: "100vh",
        background: "white",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        transition: "right 0.3s ease-in-out",
        padding: "20px",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "red",
          color: "white",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        ✕
      </button>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <button
            style={{
              background: "green",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
