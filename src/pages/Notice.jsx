import React from "react";
import { useNavigate } from "react-router-dom";
import "./Notice.css";

export default function Notice() {
  const navigate = useNavigate();

  return (
    <div className="notice-page">
      {/* Header */}
      <div className="header">
        <button className="back-btn" onClick={() => navigate("/accounts")}>
          ←
        </button>
        <h1>notice</h1>
      </div>

      {/* Notice Content */}
      <div className="notice-container">
        <p className="notice-text animate-fadeIn">No Notice yet</p>
      </div>
    </div>
  );
}