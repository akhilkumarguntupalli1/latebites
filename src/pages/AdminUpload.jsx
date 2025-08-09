import React from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// ✅ Full menu data
const menuItems = [
  // 🍝 Pasta
  { name: "Cheese Corn Pasta", price: 59, originalPrice: 70, category: "Pasta", image: "/assets/cheese-corn-pasta.jpg", available: true },
  { name: "Maggi", price: 49, originalPrice: 60, category: "Pasta", image: "/assets/maggi.jpg", available: true },
  { name: "Masala Penne Pasta", price: 59, originalPrice: 70, category: "Pasta", image: "/assets/masala-penne.jpg", available: true },

  // 🥞 Tiffins
  { name: "Dosa", price: 40, originalPrice: 50, category: "Tiffins", image: "/assets/dosa.jpg", available: true },
  { name: "Onion Dosa", price: 50, originalPrice: 60, category: "Tiffins", image: "/assets/onion-dosa.jpg", available: true },
  { name: "Egg Dosa", price: 60, originalPrice: 70, category: "Tiffins", image: "/assets/egg-dosa.jpg", available: true },
  { name: "Idly", price: 30, originalPrice: 40, category: "Tiffins", image: "/assets/idly.jpg", available: true },
  { name: "Karam Dosa", price: 55, originalPrice: 65, category: "Tiffins", image: "/assets/karam-dosa.jpg", available: true },
  { name: "Ghee Karam Dosa", price: 65, originalPrice: 75, category: "Tiffins", image: "/assets/ghee-karam-dosa.jpg", available: true },
  { name: "Ghee Karam Idli", price: 50, originalPrice: 60, category: "Tiffins", image: "/assets/ghee-karam-idli.jpg", available: true },

  // 🍟 Snacks
  { name: "French Fries", price: 70, originalPrice: 90, category: "Snacks", image: "/assets/french-fries.jpg", available: true },
  { name: "Veg Rolls", price: 80, originalPrice: 100, category: "Snacks", image: "/assets/veg-rolls.jpg", available: true },
  { name: "Chicken Lollipop", price: 120, originalPrice: 150, category: "Snacks", image: "/assets/chicken-lollipop.jpg", available: true },
  { name: "Chicken Popcorn", price: 110, originalPrice: 140, category: "Snacks", image: "/assets/chicken-popcorn.jpg", available: true },
  { name: "Chicken Strips", price: 130, originalPrice: 160, category: "Snacks", image: "/assets/chicken-strips.jpg", available: true },
  { name: "Cheese Corn Nuggets", price: 90, originalPrice: 120, category: "Snacks", image: "/assets/cheese-corn-nuggets.jpg", available: true },
];

export default function AdminUpload() {
  const uploadMenu = async () => {
    try {
      for (const item of menuItems) {
        await addDoc(collection(db, "menu"), item);
        console.log(`✅ Uploaded: ${item.name}`);
      }
      alert("🎉 All menu items uploaded successfully!");
    } catch (error) {
      console.error("❌ Error uploading menu:", error);
      alert("Upload failed! Check console.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Admin Menu Upload</h1>
      <button
        onClick={uploadMenu}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "green",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Upload Menu to Firestore
      </button>
    </div>
  );
}
