import axios from "axios";
import Section2 from "../components/AdminProducts";
import { useUserContext } from "../context/userContext";
import "./AllProducts.modules.css";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState();
  const fetchAllProducts = async () => {
    await axios
      .get("/api/get-all-products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="products-page">
      <div className="products-content">
        <main className="main-content">
          <h2>Products</h2>
          <div className="products-list">
            <Section2 products={products} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllProducts;
