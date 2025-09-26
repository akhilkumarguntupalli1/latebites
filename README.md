# LateBites

**Website:** https://latebites.onrender.com

**Description**  
LateBites is a demo food delivery web app built with React + Vite and Firebase.  
It supports browsing items, adding to cart, and checkout flow (without live payments for now).

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Backend / Services | Firebase (Auth, Firestore, Storage) |
| Hosting | Render |
| Payment (future) | 

---

## 🚀 Features

- User authentication (signup / login)  
- Display menu items with categories  
- Add to cart with quantity management  
- Checkout page with order summary  
- Deployment via Render  
- Set up Razorpay KYC (ready for payment integration)  

---

## 📂 Project Structure (important files/directories)

- `src/` — main frontend code  
  - `pages/` — React pages (Home, Checkout, etc.)  
  - `context/CartContext.jsx` — global cart state  
  - `firebase/` — Firebase config  
  - `assets/` — static images  
- `.env` — environment variables (for Firebase keys, etc.)  
- `package.json` — scripts and dependencies  
- `vite.config.js` — Vite configuration  

---

## 🔧 Setup Instructions (for devs)

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/latebites.git
   cd latebites
