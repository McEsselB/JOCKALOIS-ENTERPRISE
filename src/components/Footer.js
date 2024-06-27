import React from 'react';
import './Footer.css';
import logoImage from '../assets/images/logo.png';
import googleImage from '../assets/images/google.png';
import appleImage from '../assets/images/apple.png';

const Footer = () => (
  <footer className="footer">
    <div className="top-section">
      <div className="icons3">
        <img src={googleImage} alt="Google" className="icon3" />
        <img src={appleImage} alt="Apple" className="icon3" />
      </div>
    </div>
    <hr className="divider" />
    <div className="middle-section">
      <h2>WANT TO LEARN MORE ABOUT US?</h2>
      <p>Connect with us ↗</p>
    </div>
    <hr className="divider" />
    <div className="bottom-section">
      <div className="business-info">
        <img src={logoImage} alt="Construction Equipment" className="logo2-image" />
        <p className="business-name">THE JOCKALOIS ENTERPRISE</p>
        <p className='business-address'>Amoonakwa Rd. Accra<br />Accra, Ghana</p>
      </div>
      <div className="contact">
        <h3>CONTACT</h3>
        <div className="contact-divider"></div>
        <div className="contact-item">
          <p>+43 664 93214399</p> <span className="arrow">→</span>
        </div>
        <div className="contact-item">
          <p>+233 (0) 545256254</p> <span className="arrow">→</span>
        </div>
        <div className="contact-item">
          <p>jokalois@gmail.com</p> <span className="arrow">→</span>
        </div>
      </div>
      <div className="stay-in-touch">
        <h3>STAY IN TOUCH</h3>
        <div className="email-section">
          <span>Enter your email</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
