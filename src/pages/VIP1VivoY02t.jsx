import React from "react";
import "./VIP1VivoY02t.css";

export default function VIP1VivoY02t() {
  return (
    <div className="order-details-page">
      <header className="order-header">
        <h1>My Products</h1>
      </header>

      <div className="order-card-details slide-in">
        <h2>VIP1 Vivo Y02t</h2>
        <div className="order-info">
          <p><strong>Price:</strong> ₹459.00</p>
          <p><strong>Revenue:</strong> 6 Days</p>
          <p><strong>Buy Share:</strong> 1</p>
          <p><strong>Generated Income:</strong> ₹4984.74</p>
          <p><strong>Estimate Income:</strong> ₹4984.74</p>
        </div>
      </div>

      <div className="order-card-details slide-in delay">
        <h3>Settlement Records</h3>
        <ul className="records-list">
          <li>2025-08-25 <span>₹830.79</span></li>
          <li>2025-08-26 <span>₹830.79</span></li>
          <li>2025-08-27 <span>₹830.79</span></li>
          <li>2025-08-28 <span>₹830.79</span></li>
          <li>2025-08-29 <span>₹830.79</span></li>
        </ul>
        <div className="total-box">
          <p><strong>Total Income:</strong> ₹4984.74</p>
          <button className="finish-btn" style={{"background-color": "#341539"}}>Finish</button>
        </div>
      </div>
    </div>
  );
}