import React from 'react';
import ProductCard from './ProductCard';
import './Section.css';

const Section = ({ title, products }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            piecesLeft={product.piecesLeft}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
