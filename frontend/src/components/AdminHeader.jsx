import { useState, useEffect, useRef } from "react";
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
import { useUserContext } from "../context/userContext";
import axios from "axios";
import toast from "react-hot-toast";

const AdminHeader = () => {
  const navigate = useNavigate();

  const { currentUser } = useUserContext();

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const profileDropdownRef = useRef(null);

  const handleLogout = async () => {
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
    <header className="header2 w-full overflow-hidden">
      <div className="flex flex-row items-center">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          className="logo2 cursor-pointer sm:ml-2"
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <img src={notificationIcon} alt={"Notification"} className="icon2" />

        <div className="flex flex-row items-center gap-3">
          <img
            src={currentUser?.profilePicture}
            alt="Profile"
            className="w-[35px] h-[35px] rounded-full "
          />
          <div className="md:profile-info md:flex md:flex-col hidden">
            <span className="profile-name">{currentUser?.username}</span>
            <span className="profile-role">{currentUser?.role}</span>
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
                <span className="profile-option-text">{"Manage Account"}</span>
              </div>
              <div className="profile-option">
                <img
                  src={changePasswordIcon}
                  alt="Change Password"
                  className="icon2"
                />
                <span className="profile-option-text">{"Change Password"}</span>
              </div>
              
              <div className="profile-option" onClick={handleLogout}>
                <img src={logoutIcon} alt="Log out" className="icon2" />
                <span className="profile-option-text">{"Log out"}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
