/* eslint-disable react/prop-types */
import "./AdminProducts.modules.css";
import AdminProductCard from "./AdminProductCard";

const AdminProducts = ({ title, products, onProductClick }) => {
  return (
    <div className="section2">
      <h2>{title}</h2>
      <div className="product-grid">
        {products?.map((product, index) => (
          <AdminProductCard
            key={index}
            images={product.images}
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

export default AdminProducts;
