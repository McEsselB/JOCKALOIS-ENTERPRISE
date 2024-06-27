import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, piecesLeft, discount }) => {
  return (
    <div className="product-card">
      {discount && <div className="discount-tag">{discount}</div>}
      <div className="product-image"></div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>GH₵ {price}</p>
        <p>{piecesLeft} items left</p>
      </div>
    </div>
  );
};

export default ProductCard;
