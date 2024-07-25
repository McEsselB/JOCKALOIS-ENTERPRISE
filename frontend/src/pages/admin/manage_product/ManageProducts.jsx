import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./ManageProducts.modules.css";
import UploadProduct from "../../../components/UploadProduct";

const ManageProducts = () => {
  const initialProducts = [
    {
      image: "/images/fire_extinguisher.jpg",
      name: "Fire Extinguisher",
      category: "Fire Safety",
      price: 10.0,
      piece: 6,
      colors: ["#FF0000", "#000000"],
    },
    {
      image: "/images/smoke_detector.jpg",
      name: "Smoke Detector",
      category: "Fire Safety",
      price: 15.0,
      piece: 4,
      colors: ["#FFFFFF"],
    },
  ];

  const [toggleAddProduct, setToggleAddProduct] = useState(false);

  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // const addProduct = (newProduct) => {
  //   setProducts([...products, newProduct]);
  // };

  const navigate = useNavigate();

  const handleEdit = (product) => {
    navigate("/products2", { state: { product } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDelete = (index) => {
    if (window.confirm("Do you want to delete this product?")) {
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="products-page">
      <div className="products-content">
        <main className="main-content">
          <div className="header-section">
            <h2>Product Stock</h2>
            <button
              onClick={() => setToggleAddProduct(!toggleAddProduct)}
              className="add-stock-button"
            >
              {!toggleAddProduct ? "Manage Products" : "Upload Product"}
            </button>
          </div>
          <>
            {toggleAddProduct ? (
              <>
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th className="hidden md:block">Category</th>
                      <th>Price</th>
                      <th>Piece</th>
                      <th className="hidden md:block ">Available Color</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentProducts.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                          />
                        </td>
                        <td>{product.name}</td>
                        <td className="hidden md:table-cell">
                          {product.category}
                        </td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>{product.piece}</td>
                        <td className="hidden md:table-cell">
                          {product.colors.map((color, idx) => (
                            <span
                              key={idx}
                              className="color-dot"
                              style={{ backgroundColor: color }}
                            ></span>
                          ))}
                        </td>
                        <td>
                          <button
                            className="edit-button"
                            onClick={() => handleEdit(product)}
                          >
                            ✏️
                          </button>
                          <button
                            className="delete-button"
                            onClick={() => handleDelete(index)}
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pagination">
                  <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                  </button>
                  <span>
                    Showing {indexOfFirstProduct + 1}-{indexOfLastProduct} of{" "}
                    {products.length}
                  </span>
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <UploadProduct />
            )}
          </>
        </main>
      </div>
    </div>
  );
};

export default ManageProducts;
