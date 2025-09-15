

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      
      <div className="top-bar">
        <img
          src="https://latestlogo.com/wp-content/uploads/2024/02/vivo.png"
          alt="Vivo Logo"
          className="logo"
        />
      </div>

      {/* Main Card */}
      <div className="card">
        <h2 className="register-title">Register</h2>

        <div className="input-group">
          <input type="text" placeholder="Please enter your number" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Please enter your password" />
        </div>

        <div className="input-group">
          <input type="text" placeholder="Enter Invitation code" />
        </div>

        {/* Verification Code + Send Button in One Row */}
        <div className="verification-row">
          <input type="text" placeholder="Enter verification code" />
          <button className="send-btn">Send</button>
        </div>

        {/* Register Button */}
        <button className="register-btn" onClick={() => navigate("/login")}>
          Register
        </button>

        {/* Login Redirect */}
        <p className="login-text">
          Already have an account?{" "}
          <span className="login-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;