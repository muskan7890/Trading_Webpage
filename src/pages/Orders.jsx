import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Orders.css";

export default function Orders() {
  const [filter, setFilter] = useState("all");

  const orders = [
    {
      id: "vip1vivoy100",
      title: "VIP1 Vivo Y100",
      buyShare: 1,
      days: 5,
      dailyIncome: "₹886.88",
      totalIncome: "₹4434.40",
      status: "finish",
    },
    {
      id: "vip1vivoy02t",
      title: "VIP1 Vivo Y02t",
      buyShare: 1,
      days: 6,
      dailyIncome: "₹830.79",
      totalIncome: "₹4984.74",
      status: "finish",
    },
    {
      id: "vip1welfare",
      title: "VIP1 Welfare",
      buyShare: 1,
      days: 1,
      dailyIncome: "₹300.00",
      totalIncome: "₹300.00",
      status: "finish",
    },
    {
      id: "buyupgradevip1",
      title: "Buy and Upgrade VIP1",
      buyShare: 1,
      days: 42,
      dailyIncome: "₹229.60",
      totalIncome: "₹4132.80",
      status: "normal",
    },
  ];

  const filteredOrders =
    filter === "all" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="orders-page">
      {/* Header */}
      <header className="orders-header">
        <h1>My Products</h1>
      </header>

      {/* Filter Tabs */}
      <div className="tabs">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "normal" ? "active" : ""}
          onClick={() => setFilter("normal")}
        >
          Normal
        </button>
        <button
          className={filter === "finish" ? "active" : ""}
          onClick={() => setFilter("finish")}
        >
          Finish
        </button>
      </div>

      {/* Orders List */}
      <div className="orders-list">
        {filteredOrders.map((order, index) => (
          <motion.div
            key={order.id}
            className="order-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="order-title">
              <h3>{order.title}</h3>
              <span className={`status ${order.status}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>

            <div className="order-body">
              <p>
                <strong>Buy Share:</strong> {order.buyShare}
              </p>
              <p>
                <strong>Days:</strong> {order.days}.0000 Days
              </p>
              <p>
                <strong>Daily Income:</strong> {order.dailyIncome}
              </p>
              <p>
                <strong>Total Income:</strong> {order.totalIncome}
              </p>
            </div>

            {/* Details Button */}
            <Link to={`/${order.id}`} className="details-btn">
              Details →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}