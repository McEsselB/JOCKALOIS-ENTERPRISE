import React from 'react';
import ProductCard2 from './ProductCard2';
import './Section2.modules.css';

const Section2 = ({ title, products, onProductClick }) => {
  return (
    <div className="section2">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard2
            key={index}
            name={product.name}
            price={product.price}
            piecesLeft={product.piecesLeft}
            discount={product.discount}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;
