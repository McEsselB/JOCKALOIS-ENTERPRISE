import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useNavigate, useLocation } from 'react-router-dom';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

function Sidebar22() {
  const navigate = useNavigate();
  const location = useLocation();

  const { collapseSidebar, collapsed } = useProSidebar();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    } else {
      collapseSidebar();
    }
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    { name: 'Dashboard', icon: <DashboardOutlinedIcon />, path: "" },
    { name: 'All Products', icon: <ShoppingCartOutlinedIcon />, path: "all-products" },
    { name: 'Top Sellers', icon: <StarOutlineOutlinedIcon />, path: 'top-sellers' },
    { name: 'Inbox', icon: <MailOutlineOutlinedIcon />, path: 'inbox' },
    { name: 'Order Lists', icon: <ListAltOutlinedIcon />, path: 'order-lists' },
    { name: 'Manage Products', icon: <Inventory2OutlinedIcon />, path: 'product-stock' },
    { name: 'Calendar', icon: <CalendarTodayOutlinedIcon />, path: 'calendar' },
    { name: 'Contact', icon: <ContactMailOutlinedIcon />, path: 'contact' },
    { name: 'Invoice', icon: <DescriptionOutlinedIcon />, path: 'invoice' },
    { name: 'Team', icon: <GroupOutlinedIcon />, path: 'team' },
    { name: 'Table', icon: <TableChartOutlinedIcon />, path: 'table' },
    { name: 'Settings', icon: <SettingsOutlinedIcon />, path: 'settings' },
    { name: 'Logout', icon: <ExitToAppOutlinedIcon />, path: '/ad-login' }
  ];

  return (
    <div id="app" style={{ height: "100vh", display: "flex" }}>
      <Sidebar
        style={{
          height: "100vh",
          overflowY: "auto",
          scrollBehavior: "smooth",
          marginBottom: "0px",
          zIndex: isOpen ? 1000 : 1,
          position: isOpen ? 'fixed' : 'relative',
        }}
        collapsed={collapsed || window.innerWidth < 768}
        toggled={isOpen}
        onBackdropClick={() => setIsOpen(false)}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={handleMenuClick}
            style={{ textAlign: "center" }}
          >
            <h2 style={{ marginLeft: "-80px" }}>Menu</h2>
          </MenuItem>
          {menuItems.map(item => (
            <MenuItem
              key={item.name}
              icon={item.icon}
              onClick={() => handleMenuItemClick(item.path)}
              active={location.pathname === item.path}
              className={location.pathname === item.path ? 'selected' : ''}
              style={{
                backgroundColor: location.pathname === item.path ? '#3b82f6' : 'transparent',
                transition: 'background-color 0.3s ease',
                ...(location.pathname === item.path && { ':hover': { backgroundColor: '#3b82f6' } })
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
      <style jsx>{
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", 
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          height: 100vh;
        }

        #app {
          height: 100vh;
          display: flex;
        }

        .sidebar {
          width: 190px;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          overflow-y: auto;
          background-color: white;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          z-index: 1000;
        }

        .sidebar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        .sidebar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .menu-item.selected {
          background-color: #3b82f6;
        }

        .menu-item.selected:hover {
          background-color: #3b82f6;
        }

        @media (max-width: 768px) {
          .sidebar {
            display: ${isOpen ? 'block' : 'none'};
          }
        }
      }</style>
    </div>
  );
}

export default Sidebar22;
