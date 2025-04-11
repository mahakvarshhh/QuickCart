// src/Pages/Home.jsx (or update Electronics.jsx to this structure)

import React, { useEffect, useState } from 'react';
import './Shop.css'; // Optional
import { useCart } from '../Context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Failed to fetch products", error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-heading">All Products</h1>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <h3>{item.title}</h3>
            <p>{item.description.slice(0, 100)}...</p>
            <p>₹{Math.round(item.price * 80)}</p> {/* Convert $ to ₹ */}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
