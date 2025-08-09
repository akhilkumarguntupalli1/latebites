import React, { useState } from "react";
import Confetti from "react-confetti";

export default function TestConfetti() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 Confetti Test Page</h1>
      <button
        onClick={() => setShow(true)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          background: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Trigger Confetti
      </button>

      {show && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          recycle={false}
        />
      )}
    </div>
  );
}
