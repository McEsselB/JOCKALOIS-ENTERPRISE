import React, { useState } from 'react';
import './Header2.modules.css';
import logo from '../assets/images/logo.png';
import profilePic from '../assets/images/profile-pic.jpg';
import menuIcon from '../assets/images/menu4.png';
import notificationIcon from '../assets/images/notification.png';
import downArrow from '../assets/images/dropdown2.png';
import downArrow2 from '../assets/images/dropdown4.png';
import ukFlag from '../assets/images/flag-icon.webp';
import searchIcon2 from '../assets/images/search.png';

const Header2 = ({ toggleSidebar }) => {
  return (
    <header className="header2">
      <img src={menuIcon} alt="Menu" className="icon2 menu-icon2" onClick={toggleSidebar} />
      <div className="search-container2">
        <img src={searchIcon2} alt="Search" className="search-icon2" />
        <input type="text" className="search-box2" placeholder="Search" />
      </div>
      <img src={logo} alt="Logo" className="logo2" />
      <img src={notificationIcon} alt="Notification" className="icon2 notification-icon" />
      <div className="language-selector">
        <img src={ukFlag} alt="UK Flag" className="icon2 flag-icon" />
        <span className="language-text">English</span>
        <img src={downArrow} alt="Down Arrow" className="icon2 down-arrow" />
      </div>
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <span className="profile-name">Lucy</span>
          <span className="profile-role">Admin</span>
        </div>
        <img src={downArrow2} alt="Down Arrow" className="icon2 down-arrow profile-arrow" />
      </div>
    </header>
  );
};

export default Header2;
