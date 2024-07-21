import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Header.modules.css";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import user from "../assets/images/user.png";
import searchIcon from "../assets/images/search.png";
import ukFlag from "../assets/images/flag-icon.webp";
import frFlag from "../assets/images/fr-flag.jpeg";
import esFlag from "../assets/images/es-flag.jpeg";
import downArrow from "../assets/images/dropdown2.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showLoginBox, setShowLoginBox] = useState(false);
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");
  const [flag, setFlag] = useState(ukFlag);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languageDropdownRef = useRef(null);

  const languages = [
    { name: "English", flag: ukFlag, code: "en" },
    { name: "French", flag: frFlag, code: "fr" },
    { name: "Spanish", flag: esFlag, code: "es" },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang.name);
    setFlag(lang.flag);
    setLanguageDropdownOpen(false);
    i18n.changeLanguage(lang.code);
  };

  const handleClickOutside = (event) => {
    if (
      languageDropdownRef.current &&
      !languageDropdownRef.current.contains(event.target)
    ) {
      setLanguageDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLoginBox = () => {
    setShowLoginBox(!showLoginBox);
  };

  const closeLoginBox = () => {
    setShowLoginBox(false);
  };

  const handleLogin = () => {
    navigate("/sign-in");
  };

  const handleSignup = () => {
    navigate("/sign-up");
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
        <div
          className="language-selector"
          ref={languageDropdownRef}
          onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
        >
          <img src={flag} alt="Flag" className="icon2 flag-icon" />
          <span className="language-text">{language}</span>
          <img src={downArrow} alt="Down Arrow" className="icon2 down-arrow" />
          {languageDropdownOpen && (
            <div className="language-dropdown">
              <p className="lang-main">{t("Select a language")}</p>
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="language-option"
                  onClick={() => handleLanguageChange(lang)}
                >
                  <img
                    src={lang.flag}
                    alt={`${lang.name} Flag`}
                    className="icon2 flag-icon"
                  />
                  <span className="language-text">{lang.name}</span>
                  {language === lang.name && (
                    <span className="selected-icon">✓</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <img
          src={cart}
          alt="Cart"
          className="icon normal-icon"
          onClick={cartOpen}
        />
        <img
          src={user}
          alt="User"
          className="icon normal-icon"
          onClick={toggleLoginBox}
        />
        {showLoginBox && (
          <div className="login-box">
            <button className="login-button" onClick={handleLogin}>
              Log In
            </button>
            <button className="signup-button" onClick={handleSignup}>
              Sign Up
            </button>
            <button
              className="signup-button"
              onClick={() => navigate("/admin")}
            >
              Admin Dashboard
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
