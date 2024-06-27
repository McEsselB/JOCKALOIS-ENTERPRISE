import React from 'react';
import './Banner.css';
import bannerImage from '../assets/images/banner.png';

const Banner = () => (
  <div className="banner">
    <div className="banner-content">
      <h2>FLASH SALE!</h2>
      <p>50% Off<br></br> Construction<br></br> equipments</p>
    </div>
    <img src={bannerImage} alt="Construction Equipment" className="banner-image" />
  </div>
);

export default Banner;
