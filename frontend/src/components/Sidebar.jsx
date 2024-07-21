import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Sidebar.css";
import dashboardIcon from "../assets/images/dashboard-icon.png";
import productsIcon from "../assets/images/products-icon.png";
import favoritesIcon from "../assets/images/favorites-icon.png";
import inboxIcon from "../assets/images/inbox-icon.png";
import orderListsIcon from "../assets/images/order-lists-icon.png";
import productStockIcon from "../assets/images/product-stock-icon.png";
import pricingIcon from "../assets/images/pricing-icon.png";
import calendarIcon from "../assets/images/calendar-icon.png";
import contactIcon from "../assets/images/contact-icon.png";
import invoiceIcon from "../assets/images/invoice-icon.png";
import teamIcon from "../assets/images/team-icon.png";
import tableIcon from "../assets/images/table-icon.png";
import settingsIcon from "../assets/images/settings-icon.png";
import logoutIcon from "../assets/images/logout-icon.png";

const Sidebar = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1].replace(/-/g, " ");
    setSelected(currentPath.charAt(0).toUpperCase() + currentPath.slice(1));
  }, [location]);

  const handleNavigation = (path) => {
    if (path === "admin/logout") {
      navigate("/");
    } else {
      setSelected(path);
      navigate(`/${path}`);
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon, path: "" },
    { name: "Products", icon: productsIcon, path: "all-products" },
    { name: "Top Sellers", icon: favoritesIcon, path: "top-sellers" },
    { name: "Inbox", icon: inboxIcon, path: "inbox" },
    { name: "Order Lists", icon: orderListsIcon, path: "order-lists" },
    { name: "Product Stock", icon: productStockIcon, path: "product-stock" },
    { name: "Pricing", icon: pricingIcon, path: "pricing" },
    { name: "Calendar", icon: calendarIcon, path: "calendar" },
    { name: "Contact", icon: contactIcon, path: "contact" },
    { name: "Invoice", icon: invoiceIcon, path: "invoice" },
    { name: "Team", icon: teamIcon, path: "team" },
    { name: "Table", icon: tableIcon, path: "table" },
    { name: "Settings", icon: settingsIcon, path: "settings" },
    { name: "Logout", icon: logoutIcon, path: "logout" },
  ];

  return (
    <aside className="sidebar">
      <div className="menu-section">
        {menuItems.slice(0, 6).map((item) => (
          <div
            key={item.name}
            className={`menu-item ${selected === item.name ? "selected" : ""}`}
            onClick={() => handleNavigation(`admin/${item.path}`)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{t(item.name)}</span>
          </div>
        ))}
      </div>
      <hr />
      <div className="menu-section">
        <span className="section-title">{t("PAGES")}</span>
        {menuItems.slice(6, 12).map((item) => (
          <div
            key={item.name}
            className={`menu-item ${selected === item.name ? "selected" : ""}`}
            onClick={() => handleNavigation(`admin/${item.path}`)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{t(item.name)}</span>
          </div>
        ))}
      </div>
      <hr />
      <div className="menu-section">
        {menuItems.slice(12).map((item) => (
          <div
            key={item.name}
            className={`menu-item ${selected === item.name ? "selected" : ""}`}
            onClick={() => handleNavigation(`admin/${item.path}`)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{t(item.name)}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
