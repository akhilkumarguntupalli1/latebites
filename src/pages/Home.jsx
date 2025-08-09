import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useCart } from "../context/CartContext.jsx";

export default function Home() {
  const [menu, setMenu] = useState([]);
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const querySnapshot = await getDocs(collection(db, "menu"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMenu(items);
    };
    fetchMenu();
  }, []);

  const handleAddToCart = (item) => {
  const itemWithNumberPrice = {
    ...item,
    price: Number(item.price) || 0, // ensure number
  };

  addToCart(itemWithNumberPrice);
  setAddedItems((prev) => [...prev, item.id]);

  setTimeout(() => {
    setAddedItems((prev) => prev.filter((id) => id !== item.id));
  }, 1500);
};


  // Group menu by category
  const groupedMenu = menu.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>🍔 LateBites Menu</h1>

      {Object.keys(groupedMenu).map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "15px" }}>{category}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {groupedMenu[category].map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #eee",
                  borderRadius: "15px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  background: "white",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <div style={{ padding: "10px" }}>
                  <h3 style={{ margin: "5px 0" }}>{item.name}</h3>
                  <p style={{ margin: "5px 0", color: "gray" }}>{item.category}</p>
                  <p style={{ margin: "5px 0", fontWeight: "bold" }}>
                    ₹{item.price}{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "gray",
                        fontSize: "14px",
                      }}
                    >
                      ₹{item.originalPrice}
                    </span>
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    style={{
                      background: addedItems.includes(item.id) ? "#4CAF50" : "#ff4d4d",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100%",
                      marginTop: "8px",
                      transition: "all 0.3s ease",
                      transform: addedItems.includes(item.id) ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {addedItems.includes(item.id) ? "Added ✅" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
