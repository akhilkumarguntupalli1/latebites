import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // ✅ Update confetti size on resize
  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => navigate("/"), 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

  return (
    <div style={styles.container}>
      {/* 🎉 Confetti on top */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={250}
        recycle={false}
      />

      <div style={styles.card}>
        <svg
          viewBox="0 0 52 52"
          style={styles.checkIcon}
        >
          <circle style={styles.checkCircle} cx="26" cy="26" r="25" fill="none" />
          <path
            style={styles.checkMark}
            fill="none"
            d="M14 27 l7 7 l16 -16"
          />
        </svg>

        <h1 style={styles.title}>Order Placed Successfully! 🎉</h1>
        <p style={styles.subtitle}>Thank you for ordering with LateBites.</p>
        <p style={styles.redirect}>Redirecting to Home in 5 seconds...</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  card: {
    textAlign: "center",
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    zIndex: 10,
  },
  checkIcon: {
    width: "100px",
    height: "100px",
    stroke: "#28a745",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    marginBottom: "20px",
  },
  checkCircle: {
    strokeDasharray: 166,
    strokeDashoffset: 166,
    animation: "dash 1s ease forwards",
  },
  checkMark: {
    strokeDasharray: 48,
    strokeDashoffset: 48,
    animation: "dash 0.5s ease 1s forwards",
  },
  title: {
    color: "#28a745",
    fontSize: "28px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#555",
    fontSize: "18px",
  },
  redirect: {
    color: "#888",
    marginTop: "15px",
  },
};

// ✅ Add global CSS animation in index.css
/*
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
*/
