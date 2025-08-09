import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all the details to place the order.");
      return;
    }

    alert(`Thank you ${formData.name}! Your order is placed successfully.`);

    clearCart();
    navigate("/order-success");
  };

  const getItemTotal = (item) =>
    (Number(item.price) || 0) * (item.quantity || 0);

  const getCartTotal = () =>
    cart.reduce((sum, item) => sum + getItemTotal(item), 0);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Add some items first.</p>
      ) : (
        <>
          {/* Name */}
          <div style={{ marginBottom: "15px" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          {/* Address */}
          <div style={{ marginBottom: "15px" }}>
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter delivery address"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "15px" }}>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          {/* Order Summary */}
          <h3>Order Summary:</h3>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} x {item.quantity} - ₹
                {getItemTotal(item).toLocaleString("en-IN")}
              </li>
            ))}
          </ul>
          <h3>
            Total: ₹{getCartTotal().toLocaleString("en-IN")}
          </h3>

          <button
            onClick={handlePlaceOrder}
            style={{
              marginTop: "15px",
              width: "100%",
              padding: "10px",
              background: "green",
              color: "white",
              fontSize: "18px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
