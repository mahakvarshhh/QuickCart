import React from 'react';
import './Equipments.css';
import { useCart } from '../Context/CartContext'; // ✅ Correct

const products = [
  {
    id: 1,
    title: "Dumbbells",
    description: "Adjustable dumbbells (2.5kg–24kg) for home workouts.",
    price: 15000,
    image: require("../Components/Assests/equip1.webp"),
  },
  {
    id: 2,
    title: "Fitness Straps",
    description: "TRX suspension kit with door anchor for strength training.",
    price: 2500,
    image: require("../Components/Assests/equip2.webp"),
  },
  {
    id: 3,
    title: "Yoga Mat",
    description: "Eco-friendly non-slip mat with alignment markers.",
    price: 5000,
    image: require("../Components/Assests/equip3.jpeg"),
  },
  {
    id: 4,
    title: "Pull-up Bar",
    description: "Sturdy doorway bar for upper body exercises.",
    price: 1200,
    image: require("../Components/Assests/equip4.webp"),
  },
];

const Equipments = () => {
  const { addToCart } = useCart(); // ✅ Use the hook directly

  return (
    <div className="equipments-container">
      <h1 className="equipments-heading">Our Gym Equipments</h1>
      <div className="equipments-grid">
        {products.map((product) => (
          <div key={product.id} className="equipment-card">
            <img src={product.image} alt={product.title} className="equipment-image" />
            <h2 className="equipment-title">{product.title}</h2>
            <p className="equipment-description">{product.description}</p>
            <p className="equipment-price">₹{product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipments;
