import React from "react";
import "./VIP1Welfare.css";
import { Link } from "react-router-dom";

export default function VIP1Welfare() {
  return (
    <div className="vip1welfare-container">
      {/* Header */}
      <header className="vip1welfare-header">
        <Link to="/orders" className="back-btn">←</Link>
        <h1>My Products</h1>
      </header>

      {/* Product Card */}
      <section className="product-card">
        <div className="product-header">
          <h2>VIP 1 Welfare</h2>
          
        </div>

        <div className="info-box">
          <p><span>Price</span> ₹200.00</p>
          <p><span>Revenue</span> 1 Day</p>
          <p><span>Buy Share</span> 1</p>
          <p><span>Generated Income</span> ₹300.00</p>
          <p><span>Estimate Income</span> ₹300.00</p>
        </div>
      </section>

      {/* Settlement Records */}
      <section className="settlement-card">
        <h3>Settlement Records</h3>
        <div className="record-row">
          <p>2025-08-21</p>
          <p className="amount">₹300.00</p>
        </div>
        <div className="record-footer">
          <p>₹300.00 <small>Total Income</small></p>
          <button className="finish-btn" style={{"background-color": "#341539"}}>Finish</button>
        </div>
      </section>
    </div>
  );
}