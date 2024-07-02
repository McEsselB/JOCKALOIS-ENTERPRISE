import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.modules.css';
import logo from '../assets/images/logo.png';
import flag from '../assets/images/flag.png';
import cart from '../assets/images/cart.png';
import user from '../assets/images/user.png';
import searchIcon from '../assets/images/search.png';
import menuIcon from '../assets/images/menu.png';

const Header = () => {
  const [showLoginBox, setShowLoginBox] = useState(false);
  const navigate = useNavigate();

  const toggleLoginBox = () => {
    setShowLoginBox(!showLoginBox);
  };

  const closeLoginBox = () => {
    setShowLoginBox(false);
  };

  const handleLogin = () => {
    navigate('/sign-in');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.header-right') && showLoginBox) {
        closeLoginBox();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showLoginBox]);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <div className="search-box">
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <img src={flag} alt="Flag" className="icon normal-icon" />
        <img src={cart} alt="Cart" className="icon normal-icon" />
        <img src={user} alt="User" className="icon normal-icon" onClick={toggleLoginBox} />
        <img src={menuIcon} alt="Menu Icon" className="icon menu-icon" onClick={toggleLoginBox} />
        {showLoginBox && (
          <div className="login-box">
            <button className="login-button" onClick={handleLogin}>Log In</button>
            <button className="signup-button">Sign Up</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
