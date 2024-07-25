import { useState, useEffect, useRef } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Banner from "../../../components/Banner";
import Banner2 from "../../../components/Banner2";
import FilterButton from "../../../components/FilterButton";
import FilterMenu from "../../../components/FilterMenu";
import "./HomePage.modules.css";
import Section from "../../../components/Section";
import searchIcon from "../../../assets/images/search2.png"; // Replace with your search icon path
import downArrow from "../../../assets/images/dropdown2.png"; // Replace with your down arrow icon path
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
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
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const filterMenuRef = useRef(null);
  const navigate = useNavigate();
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = [
    "fire extinguisher",
    "smoke detector",
    "safety harness",
  ];

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!isFilterMenuOpen);
  };

  const closeFilterMenu = () => {
    setFilterMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target)
    ) {
      closeFilterMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleProductClick = (product) => {
    navigate("/product/1", { state: { product } });
  };

  return (
    <div className="homepage">
      <Header />
      <div className="filter-search-container">
        <FilterButton toggleFilterMenu={toggleFilterMenu} />
        <div ref={filterMenuRef}>
          <FilterMenu
            isOpen={isFilterMenuOpen}
            closeFilterMenu={closeFilterMenu}
          />
        </div>
        <div className="search-container">
          <button className="dropdown-button">
            Products
            <img src={downArrow} alt="Down Arrow" className="dropdown-icon" />
          </button>
          <input
            type="text"
            placeholder={placeholders[placeholderIndex]}
            className="search-input"
          />
          <button className="search-button">
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
            Search
          </button>
        </div>
      </div>
      <Banner />
      <Section
        title="Personal Protective Equipments"
        products={products}
        onProductClick={handleProductClick}
      />
      <Section
        title="Fall Protection"
        products={products}
        onProductClick={handleProductClick}
      />
      <Banner2 />
      <Section
        title="Fire Safety"
        products={products}
        onProductClick={handleProductClick}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
