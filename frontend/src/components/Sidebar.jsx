import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import "./Sidebar.css";
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
import axios from "axios";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const handleNavigation = (path) => {
    if (path === "admin/logout") {
      axios
        .get("/api/auth/logout", { withCredentials: true })
        .then(() => {
          toast.success("Logged Out");
          navigate("/");
          navigate(0);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    } else {
      navigate(`/${path}`);
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon, path: "" },
    { name: "All Products", icon: productsIcon, path: "all-products" },
    { name: "Top Products", icon: favoritesIcon, path: "top-sellers" },
    { name: "Inbox", icon: inboxIcon, path: "inbox" },
    { name: "Order Lists", icon: orderListsIcon, path: "order-lists" },
    {
      name: "Manage Products",
      icon: productStockIcon,
      path: "product-stock",
      border: true,
    },
    { name: "Calendar", icon: calendarIcon, path: "calendar" },
    { name: "Contact", icon: contactIcon, path: "contact" },
    { name: "Invoice", icon: invoiceIcon, path: "invoice" },
    { name: "Stuff", icon: teamIcon, path: "stuff", border: true },
    // { name: "Table", icon: tableIcon, path: "table",  },
    { name: "Settings", icon: settingsIcon, path: "settings" },
    { name: "Logout", icon: logoutIcon, path: "logout" },
  ];

  return (
    <aside className="">
      <div className="flex flex-col gap-4">
        {menuItems.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={`pl-3 pr-2 sm:px-[20px]  sm:py-1 flex gap-2 items-center  cursor-pointer ${
                  location === `/admin/${item.path}` && "bg-blue-600"
                } ${
                  item.name === `Dashboard` &&
                  location === "/admin" &&
                  "bg-blue-600"
                } `}
                onClick={() => handleNavigation(`admin/${item.path}`)}
              >
                <img
                  className="w-[40px] h-[40px] p-2"
                  src={item.icon}
                  alt={item.name}
                />

                <span className="hidden sm:block">{t(item.name)}</span>
              </div>

              {item.border && <hr />}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
