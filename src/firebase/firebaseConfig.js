// src/firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCMrAcvxyu0ATvDAmna0LDQjG3x__Luw04",
  authDomain: "latebites-ee7d5.firebaseapp.com",
  projectId: "latebites-ee7d5",
  storageBucket: "latebites-ee7d5.appspot.com",  // 🔁 Fixed typo here (.app → .com)
  messagingSenderId: "185631362273",
  appId: "1:185631362273:web:ae9a59ae3328c2656abba0",
  measurementId: "G-DNDT41PJDM"
};

// ✅ Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
const db = getFirestore(app);

// ✅ Optional: Initialize Analytics safely
isSupported().then((yes) => {
  if (yes) {
    getAnalytics(app);
  }
});

export { db };
