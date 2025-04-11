import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import images from '../Assests/images.png';
import cart_icon from '../Assests/cart_icon.png';
import { useCart } from '../../Context/CartContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={images} alt="Logo" />
        <p>QuickCart</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to='/' className={menu === "shop" ? "nav-link active" : "nav-link"}>Shop</Link>
        </li>
        <li onClick={() => setMenu("Equipments")}>
          <Link to='/Equipments' className={menu === "Equipments" ? "nav-link active" : "nav-link"}>Equipments</Link>
        </li>
        <li onClick={() => setMenu("Electronics")}>
          <Link to='/Electronics' className={menu === "Electronics" ? "nav-link active" : "nav-link"}>Electronics</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('token') ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to='/login'><button className="login-btn">Login</button></Link>
        )}

        <Link to='/cart' className="cart-icon-wrapper">
          <img src={cart_icon} alt="Cart" />
          {cartCount > 0 && <div className="nav-cart-count">{cartCount}</div>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
