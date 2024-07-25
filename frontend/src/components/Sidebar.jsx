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
import './styles.css'; // Import the external CSS file

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
        className={`sidebar ${isOpen ? 'open' : ''}`}
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
              className={`menu-item ${location.pathname === item.path ? 'selected' : ''}`}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sidebar22;
