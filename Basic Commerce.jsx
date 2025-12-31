import React, { useState } from "react";

function BasicCommerce() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Smartwatch", price: 150 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="commerce-container">
      <h2>Product Listing</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h3>Cart Items ({cart.length})</h3>
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map((item, index) => (
          <p key={index}>{item.name} - ${item.price}</p>
        ))}
      </div>
    </div>
  );
}

export default BasicCommerce;
