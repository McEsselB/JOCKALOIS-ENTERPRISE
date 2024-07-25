import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './Orderlists.modules.css';

const Products = () => {
  return (
    <div className="products-page">
      <div className="products-content"> 
        <main className="main-content">
          <h2>Order Lists</h2>
          <div className="products-list">
            {/* You can add the list or table of products here */}
            <p>Product 1</p>
            <p>Product 2</p>
            <p>Product 3</p>
            {/* Add more product items as needed */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
