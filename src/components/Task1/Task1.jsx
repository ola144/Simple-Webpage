import React, { useState } from "react";
import "./Task1.css";

function Task1() {
  const products = [
    { id: 1, name: "Laptop", price: 2500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Keyboard", price: 100 },
    { id: 5, name: "Monitor", price: 600 },
  ];

  const [showAffordable, setShowAffordable] = useState(false);

  // filter
  const filteredProducts = showAffordable
    ? products.filter((p) => p.price <= 1000)
    : products;

  // reduce
  const totalPrice = filteredProducts.reduce((sum, p) => sum + p.price, 0);

  // forEach (console log only)
  filteredProducts.forEach((p) => console.log("Product name:", p.name));

  return (
    <div className="container">
      <div className="task1">
        <div className="innerContainer">
          <h1>React Array Methods Demo</h1>

          <button onClick={() => setShowAffordable((prev) => !prev)}>
            {showAffordable ? "Show All Products" : "Show Affordable (≤ $1000)"}
          </button>

          <h2>Products:</h2>
          <ul>
            {/* map */}
            {filteredProducts.map((p) => (
              <li key={p.id}>
                {p.name} - ${p.price}
              </li>
            ))}
          </ul>

          <h3>Total Price: ${totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}

export default Task1;
