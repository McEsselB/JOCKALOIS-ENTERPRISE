import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.modules.css";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import user from "../assets/images/user.png";
import searchIcon from "../assets/images/search.png";
import { useUserContext } from "../context/userContext";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  const { currentUser } = useUserContext();

  const [showLoginBox, setShowLoginBox] = useState(false);
  const navigate = useNavigate();

  const toggleLoginBox = () => {
    setShowLoginBox(!showLoginBox);
  };

  const closeLoginBox = () => {
    setShowLoginBox(false);
  };

  const handleLogout = async () => {
    axios
      .get("/api/auth/logout", { withCredentials: true })
      .then(() => {
        toast.success("Logged Out");
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  const cartOpen = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".header-right") && showLoginBox) {
        closeLoginBox();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showLoginBox]);

  return (
    <header className="header">
      <div className="header-left cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <div className="search-box">
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <div className="header-right">
        <img
          src={cart}
          alt="Cart"
          className="icon normal-icon"
          onClick={cartOpen}
        />
        {currentUser ? (
          <img
            onClick={toggleLoginBox}
            className="icon normal-icon rounded-full"
            src={currentUser.profilePicture}
          />
        ) : (
          <img
            src={user}
            alt="User"
            className="icon normal-icon"
            onClick={toggleLoginBox}
          />
        )}
        {showLoginBox && (
          <div className="login-box">
            {currentUser ? (
              <>
                <button
                  className="signup-button"
                  onClick={() => navigate("/admin")}
                >
                  Admin Dashboard
                </button>
                <button className="signup-button" onClick={handleLogout}>
                  Log out
                </button>
              </>
            ) : (
              <>
                <a href="/sign-in">
                  <button className="login-button">Log In</button>
                </a>
                <a href="/sign-up">
                  <button className="signup-button">Sign Up</button>
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
