// src/Pages/Electronics.jsx
import React from 'react';
import './Electronics.css';
import { useCart } from '../Context/CartContext'; // ✅ Correct import

const electronicsData = [
  {
    id: 1,
    image: require('../Components/Assests/elect1.jpg'),
    title: 'Smartwatch Pro',
    description: 'Tracks fitness, heart rate & notifications.',
    price: 2999,
  },
  {
    id: 2,
    image: require('../Components/Assests/elect2.png'),
    title: 'Smart Ring',
    description: 'Tracks health, sleep & workouts.',
    price: 1999,
  },
  {
    id: 3,
    image: require('../Components/Assests/elect3.webp'),
    title: 'Fitness JogPad-3',
    description: '2-in-1 treadmill with remote & Bluetooth.',
    price: 1499,
  },
  {
    id: 4,
    image: require('../Components/Assests/elect4.webp'),
    title: 'Digital Weight Machine',
    description: 'Tempered glass scale with LCD display.',
    price: 999,
  },
];

const Electronics = () => {
  const { addToCart } = useCart(); // ✅ Use the hook directly

  return (
    <div className="electronics-container">
      <h1 className="electronics-heading">Top Electronics</h1>
      <div className="electronics-grid">
        {electronicsData.map((item) => (
          <div className="electronics-card" key={item.id}>
            <img src={item.image} alt={item.title} className="electronics-image" />
            <h3 className="electronics-title">{item.title}</h3>
            <p className="electronics-description">{item.description}</p>
            <p className="electronics-price">₹{item.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
