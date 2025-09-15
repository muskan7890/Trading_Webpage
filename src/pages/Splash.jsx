
import React from "react";
import "./Splash.css";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/register"); 
  };

  return (
    <div className="splash-container">
      <div className="splash-content">
        <h1 className="title">Building Wealth Together</h1>
        <p className="subtitle">
          A smarter way to invest – gain confidence, track progress and build
          wealth over time with tailored insights and expert guidance.
        </p>
        <button className="continue-btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Splash;