import { useNavigate } from "react-router-dom";
import "./Footer.modules.css";
import logoImage from "../assets/images/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact-us");
  };

  return (
    <footer className="footer">
      <div className="top-section"></div>
      <hr className="divider2" />
      <div className="middle-section">
        <h2>WANT TO LEARN MORE ABOUT US?</h2>
        <p onClick={handleContact}>Connect with us ↗</p>
      </div>
      <hr className="divider2" />
      <div className="bottom-section">
        <div className="business-info">
          <img
            src={logoImage}
            alt="Construction Equipment"
            className="logo2-image"
          />
          <p className="business-name">JOCKALOIS INN ENTERPRISE</p>
          <p className="business-address">
            Amoonakwa Rd. Accra
            <br />
            Accra, Ghana
          </p>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <div className="contact-divider"></div>
          <div className="contact-item">
            <p onClick={handleContact}>+43 664 93214399</p>{" "}
            <span className="arrow">→</span>
          </div>
          <div className="contact-item">
            <p onClick={handleContact}>+233 (0) 545256254</p>{" "}
            <span className="arrow">→</span>
          </div>
          <div className="contact-item">
            <p onClick={handleContact}>jockalois@gmail.com</p>{" "}
            <span className="arrow">→</span>
          </div>
        </div>
        <div className="stay-in-touch">
          <h3>STAY IN TOUCH</h3>
          <div className="email-section">
            <span>Enter your email</span>
            <span className="arrow" onClick={handleContact}>
              →
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
