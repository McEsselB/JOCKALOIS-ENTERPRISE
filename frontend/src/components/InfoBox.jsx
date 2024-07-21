import React from 'react';
import './InfoBox.css';

const InfoBox = ({ title, value, percentage, icon }) => {
  const isIncrease = percentage.includes('Up');
  const [percent, ...textParts] = percentage.split(' ');

  return (
    <div className="info-container">
    <div className="info-box">
      <div className="info-content">
        <div className="info-title-icon">
        <div className="info-title">
          <p>{title}</p>
          </div>
          <div className="info-icon">
            <img src={icon} alt={`${title} icon`} />
          </div>
        </div>
        <p className='info-value'>{value}</p>
        <div className="percentage-container">
        <span className={isIncrease ? 'percentage increase' : 'percentage decrease'}>
          {percent}
        </span>
        <span className="percentage-text">
          {textParts.join(' ')}
        </span>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default InfoBox;
