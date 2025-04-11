import React, { useState } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';

import equipmentImg from '../Components/Assests/equip1.webp';
import electronicsImg from '../Components/Assests/elect2.png';

const Shop = () => {
  const [category, setCategory] = useState('All');

  return (
    <div className="shop-container">
      <div className="shop-hero">
        <h1>Welcome to Shopper</h1>
        <p>Discover the best deals on Equipments and Electronics!</p>
      </div>

      {/* Filter Section */}
      <div className="shop-filter">
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Equipments">Equipments</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      {/* Highlights */}
      <div key={category} className="shop-highlights fade-up">
        {(category === 'All' || category === 'Equipments') && (
          <Link to="/Equipments" className="highlight-card">
            <img src={equipmentImg} alt="Equipments" />
            <h3>Top Equipments</h3>
            <p>Gear up with the latest and greatest tools.</p>
          </Link>
        )}
        {(category === 'All' || category === 'Electronics') && (
          <Link to="/Electronics" className="highlight-card">
            <img src={electronicsImg} alt="Electronics" />
            <h3>Electronics</h3>
            <p>Upgrade your life with cutting-edge gadgets.</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Shop;
