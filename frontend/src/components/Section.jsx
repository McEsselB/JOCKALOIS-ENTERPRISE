import React from "react";
import ProductCard from "./ProductCard";
import "./Section.modules.css";

const Section = ({ title, products, onProductClick }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="product-list">
        {products?.map((product, index) => (
          <ProductCard
            image={product.images[0]}
            key={index}
            name={product.name}
            price={product.price}
            piecesLeft={product.numberOfProductsAvailable}
            discount={product.discount}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
