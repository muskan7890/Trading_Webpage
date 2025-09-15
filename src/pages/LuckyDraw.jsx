import React, { useState } from "react";
import "./LuckyDraw.css";

export default function LuckyDraw() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const prizes = [
    { name: "iPhone 15", emoji: "📱" },
    { name: "Car", emoji: "🚗" },
    { name: "Apple Watch", emoji: "⌚" },
    { name: "Laptop", emoji: "💻" },
    { name: "Headphones", emoji: "🎧" },
    { name: "Gift Card", emoji: "🎟️" },
    { name: "Tablet", emoji: "📲" },
    { name: "Surprise Box", emoji: "🎁" },
  ];

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);

    const randomIndex = Math.floor(Math.random() * prizes.length);
    const wheel = document.querySelector(".wheel");

    const rotation =
      360 * 5 + (360 / prizes.length) * randomIndex + 360 / prizes.length / 2;
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
      setResult(prizes[randomIndex]);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="lucky-container">
      <h1 className="title">🎡 Lucky Draw</h1>

      <div className="wheel-container">
        <div className="wheel">
          {prizes.map((prize, i) => (
            <div
              key={i}
              className="segment"
              style={{
                transform: `rotate(${i * (360 / prizes.length)}deg) skewY(-45deg)`,
                background: `hsl(${i * 45}, 80%, 60%)`,
              }}
            >
              <div className="label">
                {prize.emoji} <br />
                {prize.name}
              </div>
            </div>
          ))}
        </div>
        <div className="pointer">▼</div>
      </div>

      <button className="spin-btn" onClick={spinWheel} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin the Wheel"}
      </button>

      {result && (
        <div className="result">
          <h2>🎉 You Won: {result.emoji} {result.name}!</h2>
        </div>
      )}

      <div className="prizes-list">
        <h3>Available Prizes:</h3>
        <ul>
          {prizes.map((prize, i) => (
            <li key={i}>
              <span className="emoji">{prize.emoji}</span> {prize.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


