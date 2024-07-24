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
    {
      image: "/images/carbon_monoxide_detector.jpg",
      name: "Carbon Monoxide Detector",
      category: "Fire Safety",
      price: 20.0,
      piece: 2,
      colors: ["#FFFFFF"],
    },
    {
      image: "/images/fire_blanket.jpg",
      name: "Fire Blanket",
      category: "Fire Safety",
      price: 25.0,
      piece: 10,
      colors: ["#FF0000"],
    },
    {
      image: "/images/fire_alarm.jpg",
      name: "Fire Alarm",
      category: "Fire Safety",
      price: 30.0,
      piece: 5,
      colors: ["#FF0000", "#FFFFFF"],
    },
    {
      image: "/images/emergency_exit_sign.jpg",
      name: "Emergency Exit Sign",
      category: "Fire Safety",
      price: 35.0,
      piece: 8,
      colors: ["#00FF00"],
    },
    {
      image: "/images/fire_hose.jpg",
      name: "Fire Hose",
      category: "Fire Safety",
      price: 40.0,
      piece: 1,
      colors: ["#FF0000", "#000000"],
    },
    {
      image: "/images/fireproof_safe.jpg",
      name: "Fireproof Safe",
      category: "Fire Safety",
      price: 45.0,
      piece: 7,
      colors: ["#000000"],
    },
    {
      image: "/images/sprinkler_head.jpg",
      name: "Sprinkler Head",
      category: "Fire Safety",
      price: 50.0,
      piece: 3,
      colors: ["#CCCCCC"],
    },
    {
      image: "/images/fireproof_cabinet.jpg",
      name: "Fireproof Cabinet",
      category: "Fire Safety",
      price: 55.0,
      piece: 6,
      colors: ["#FF0000", "#000000"],
    },
    {
      image: "/images/escape_ladder.jpg",
      name: "Escape Ladder",
      category: "Fire Safety",
      price: 60.0,
      piece: 2,
      colors: ["#000000", "#CCCCCC"],
    },
    {
      image: "/images/fire_door.jpg",
      name: "Fire Door",
      category: "Fire Safety",
      price: 65.0,
      piece: 9,
      colors: ["#CCCCCC", "#000000"],
    },
    {
      image: "/images/safety_harness.jpg",
      name: "Safety Harness",
      category: "Fall Protection",
      price: 70.0,
      piece: 5,
      colors: ["#FF5733", "#900C3F"],
    },
    {
      image: "/images/lanyard.jpg",
      name: "Lanyard",
      category: "Fall Protection",
      price: 30.0,
      piece: 7,
      colors: ["#C70039"],
    },
    {
      image: "/images/self_retracting_lifeline.jpg",
      name: "Self-Retracting Lifeline",
      category: "Fall Protection",
      price: 120.0,
      piece: 3,
      colors: ["#000000", "#CCCCCC"],
    },
    {
      image: "/images/anchorage_connector.jpg",
      name: "Anchorage Connector",
      category: "Fall Protection",
      price: 40.0,
      piece: 10,
      colors: ["#000000", "#FFFFFF"],
    },
    {
      image: "/images/vertical_lifeline.jpg",
      name: "Vertical Lifeline",
      category: "Fall Protection",
      price: 80.0,
      piece: 4,
      colors: ["#FF5733"],
    },
    {
      image: "/images/horizontal_lifeline.jpg",
      name: "Horizontal Lifeline",
      category: "Fall Protection",
      price: 200.0,
      piece: 2,
      colors: ["#900C3F"],
    },
    {
      image: "/images/guardrail_system.jpg",
      name: "Guardrail System",
      category: "Fall Protection",
      price: 150.0,
      piece: 5,
      colors: ["#FF5733", "#900C3F"],
    },
    {
      image: "/images/roof_hatch_safety.jpg",
      name: "Roof Hatch Safety",
      category: "Fall Protection",
      price: 100.0,
      piece: 8,
      colors: ["#000000", "#CCCCCC"],
    },
    {
      image: "/images/scaffold_fall_protection.jpg",
      name: "Scaffold Fall Protection",
      category: "Fall Protection",
      price: 90.0,
      piece: 6,
      colors: ["#FF5733"],
    },
    {
      image: "/images/ladder_safety_system.jpg",
      name: "Ladder Safety System",
      category: "Fall Protection",
      price: 110.0,
      piece: 3,
      colors: ["#900C3F"],
    },
    {
      image: "/images/safety_netting.jpg",
      name: "Safety Netting",
      category: "Fall Protection",
      price: 60.0,
      piece: 9,
      colors: ["#FF5733"],
    },
    {
      image: "/images/beam_anchor.jpg",
      name: "Beam Anchor",
      category: "Fall Protection",
      price: 50.0,
      piece: 7,
      colors: ["#C70039"],
    },
    {
      image: "/images/safety_goggles.jpg",
      name: "Safety Goggles",
      category: "PPE",
      price: 15.0,
      piece: 6,
      colors: ["#000000"],
    },
    {
      image: "/images/ear_protection.jpg",
      name: "Ear Protection",
      category: "PPE",
      price: 12.0,
      piece: 4,
      colors: ["#FFC300"],
    },
    {
      image: "/images/respirator_mask.jpg",
      name: "Respirator Mask",
      category: "PPE",
      price: 25.0,
      piece: 3,
      colors: ["#000000"],
    },
    {
      image: "/images/hard_hat.jpg",
      name: "Hard Hat",
      category: "PPE",
      price: 20.0,
      piece: 10,
      colors: ["#FFC300", "#000000"],
    },
    {
      image: "/images/protective_gloves.jpg",
      name: "Protective Gloves",
      category: "PPE",
      price: 10.0,
      piece: 5,
      colors: ["#000000", "#FFFFFF"],
    },
    {
      image: "/images/reflective_vest.jpg",
      name: "Reflective Vest",
      category: "PPE",
      price: 18.0,
      piece: 8,
      colors: ["#FFC300"],
    },
    {
      image: "/images/safety_boots.jpg",
      name: "Safety Boots",
      category: "PPE",
      price: 50.0,
      piece: 2,
      colors: ["#000000", "#CCCCCC"],
    },
    {
      image: "/images/coveralls.jpg",
      name: "Coveralls",
      category: "PPE",
      price: 30.0,
      piece: 7,
      colors: ["#000000", "#FFFFFF"],
    },
    {
      image: "/images/face_shield.jpg",
      name: "Face Shield",
      category: "PPE",
      price: 22.0,
      piece: 9,
      colors: ["#000000", "#CCCCCC"],
    },
    {
      image: "/images/knee_pads.jpg",
      name: "Knee Pads",
      category: "PPE",
      price: 15.0,
      piece: 6,
      colors: ["#000000"],
    },
    {
      image: "/images/welding_helmet.jpg",
      name: "Welding Helmet",
      category: "PPE",
      price: 45.0,
      piece: 3,
      colors: ["#000000", "#FFFFFF"],
    },
    {
      image: "/images/chemical_resistant_suit.jpg",
      name: "Chemical Resistant Suit",
      category: "PPE",
      price: 40.0,
      piece: 4,
      colors: ["#000000"],
    },
  ];

  const [toggleAddProduct, setToggleAddProduct] = useState(true);

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
