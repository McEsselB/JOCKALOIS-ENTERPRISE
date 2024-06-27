import React, { useState } from 'react';
import './Sidebar.css';
import dashboardIcon from '../assets/images/dashboard-icon.png';
import productsIcon from '../assets/images/products-icon.png';
import favoritesIcon from '../assets/images/favorites-icon.png';
import inboxIcon from '../assets/images/inbox-icon.png';
import orderListsIcon from '../assets/images/order-lists-icon.png';
import productStockIcon from '../assets/images/product-stock-icon.png';
import pricingIcon from '../assets/images/pricing-icon.png';
import calendarIcon from '../assets/images/calendar-icon.png';
import contactIcon from '../assets/images/contact-icon.png';
import invoiceIcon from '../assets/images/invoice-icon.png';
import teamIcon from '../assets/images/team-icon.png';
import tableIcon from '../assets/images/table-icon.png';
import settingsIcon from '../assets/images/settings-icon.png';
import logoutIcon from '../assets/images/logout-icon.png';

const Sidebar = () => {
  const [selected, setSelected] = useState('Dashboard');

  const handleSelect = (menuItem) => {
    setSelected(menuItem);
  };

  const menuItems = [
    { name: 'Dashboard', icon: dashboardIcon },
    { name: 'Products', icon: productsIcon },
    { name: 'Favorites', icon: favoritesIcon },
    { name: 'Inbox', icon: inboxIcon },
    { name: 'Order Lists', icon: orderListsIcon },
    { name: 'Product Stock', icon: productStockIcon },
    { name: 'Pricing', icon: pricingIcon },
    { name: 'Calendar', icon: calendarIcon },
    { name: 'Contact', icon: contactIcon },
    { name: 'Invoice', icon: invoiceIcon },
    { name: 'Team', icon: teamIcon },
    { name: 'Table', icon: tableIcon },
    { name: 'Settings', icon: settingsIcon },
    { name: 'Logout', icon: logoutIcon },
  ];

  return (
    <aside className="sidebar">
      <div className="menu-section">
        {menuItems.slice(0, 6).map((item) => (
          <div
            key={item.name}
            className={`menu-item ${selected === item.name ? 'selected' : ''}`}
            onClick={() => handleSelect(item.name)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <hr />
      <div className="menu-section">
        <span className="section-title">PAGES</span>
        {menuItems.slice(6, 12).map((item) => (
          <div
            key={item.name}
            className={`menu-item ${selected === item.name ? 'selected' : ''}`}
            onClick={() => handleSelect(item.name)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <hr />
      <div className="menu-section">
        {menuItems.slice(12).map((item) => (
          <div
            key={item.name}
            className={`menu-item ${selected === item.name ? 'selected' : ''}`}
            onClick={() => handleSelect(item.name)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
