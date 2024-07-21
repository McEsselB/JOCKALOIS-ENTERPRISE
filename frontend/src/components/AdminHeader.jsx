import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Header2.modules.css";
import logo from "../assets/images/logo.png";
import profilePic from "../assets/images/profile-pic.jpg";
import menuIcon from "../assets/images/menu4.png";
import notificationIcon from "../assets/images/notification.png";
import downArrow2 from "../assets/images/dropdown4.png";
import manageAccountIcon from "../assets/images/manage-account.png";
import changePasswordIcon from "../assets/images/change-password.png";
import activityLogIcon from "../assets/images/activity-log.png";
import logoutIcon from "../assets/images/logout.png";

const AdminHeader = ({ toggleSidebar }) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Ensure the navigate function is available
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const profileDropdownRef = useRef(null);

  const handleLogout = () => {
    navigate("/sign-in");
  };

  const handleClickOutside = (event) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target)
    ) {
      setProfileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header2 w-full">
      <img
        src={menuIcon}
        alt="Menu"
        className="icon2 menu-icon2 block sm:hidden"
        onClick={toggleSidebar}
      />

      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="Logo"
        className="logo2 cursor-pointer"
      />
      <img
        src={notificationIcon}
        alt={t("Notification")}
        className="icon2 notification-icon mr-10"
      />

      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <span className="profile-name">Lucy</span>
          <span className="profile-role">{t("Admin")}</span>
        </div>
        <img
          src={downArrow2}
          alt="Down Arrow"
          className="icon2 down-arrow profile-arrow"
          onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
        />
        {profileDropdownOpen && (
          <div className="profile-dropdown" ref={profileDropdownRef}>
            <div className="profile-option">
              <img
                src={manageAccountIcon}
                alt="Manage Account"
                className="icon2"
              />
              <span className="profile-option-text">{t("Manage Account")}</span>
            </div>
            <div className="profile-option">
              <img
                src={changePasswordIcon}
                alt="Change Password"
                className="icon2"
              />
              <span className="profile-option-text">
                {t("Change Password")}
              </span>
            </div>
            <div className="profile-option">
              <img src={activityLogIcon} alt="Activity Log" className="icon2" />
              <span className="profile-option-text">{t("Activity Log")}</span>
            </div>
            <div className="profile-option" onClick={handleLogout}>
              <img src={logoutIcon} alt="Log out" className="icon2" />
              <span className="profile-option-text">{t("Log out")}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
