import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const copyLink = () => {
    navigator.clipboard.writeText(
      "https://m.india1188.com/?invitation_code-390EA"
    );
    alert("Invitation link copied!");
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="fade-in">Welcome to Vivo Trading Platform</h1>
        <p className="fade-in delay">
          Building wealth together – track progress, manage your wallet, and grow
          with confidence.
        </p>
      </header>

      {/* Wallet Section */}
      <section className="wallet-card slide-up">
        <h3>Main Wallet</h3>
        <p>Your Balance</p>
        <h2>₹ 9821.14</h2>
        <div className="btn-group">
          <button onClick={() => navigate("/recharge")}>Recharge</button>
          <button onClick={() => navigate("/withdraw")}>Withdraw</button>
          <button onClick={() => navigate("/account")}>Account</button>
        </div>
      </section>

      {/* Features */}
      <section className="features-section slide-left">
        <div onClick={() => navigate("/teams")} className="feature-box">
          <h4>👥 Teams</h4>
          <p>Build and manage your trading network.</p>
        </div>
        <div onClick={() => navigate("/mail")} className="feature-box">
          <h4>💬 Mail</h4>
          <p>Stay connected with real-time updates.</p>
        </div>
        <div onClick={() => navigate("/orders")} className="feature-box">
          <h4>📦 Orders</h4>
          <p>Track your active and past orders easily.</p>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="invitation-card slide-right">
        <h3>Invitation</h3>
        <a href="#" onClick={() => navigate("/teams")}>
          My Team →
        </a>
        <p>
          Promotional Link: <br />
          <span className="link">
            https://m.india1188.com/?invitation_code-390EA
          </span>
        </p>
        <button onClick={copyLink}>Copy Invitation Link</button>
      </section>

      {/* Lucky Draw */}
      <section className="lucky-draw slide-up">
        <h3>Lucky Draw 🎉</h3>
        <p>The lucky wheel keeps spinning with great gifts!</p>
        <button onClick={() => navigate("/luckydraw")}>Try Your Luck</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Vivo Trading Platform. All rights reserved.</p>
      </footer>

      {/* Bottom Navbar */}
      <nav className="bottom-navbar">
        <button onClick={() => navigate("/home")}>
          <span>🏠</span>
          <p>Home</p>
        </button>
        <button onClick={() => navigate("/invest")}>
          <span>💰</span>
          <p>Invest</p>
        </button>
        <button onClick={() => navigate("/teams")}>
          <span>👥</span>
          <p>Teams</p>
        </button>
        <button onClick={() => navigate("/mail")}>
          <span>💬</span>
          <p>Mail</p>
        </button>
        <button onClick={() => navigate("/account")}>
          <span>👤</span>
          <p>Account</p>
        </button>
      </nav>
    </div>
  );
};

export default Home;
