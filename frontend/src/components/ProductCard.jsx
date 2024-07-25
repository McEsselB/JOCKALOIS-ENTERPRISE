import React from "react";
import "./ProductCard.modules.css";

const ProductCard = ({ name, price, piecesLeft, discount, onClick, image }) => {
  return (
    <div className="product-card" onClick={onClick}>
      {discount && <div className="discount-tag">{discount}</div>}
      <img src={image} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <p>GH₵ {price}</p>
        <p>{piecesLeft} items left</p>
      </div>
    </div>
  );
};

export default ProductCard;
