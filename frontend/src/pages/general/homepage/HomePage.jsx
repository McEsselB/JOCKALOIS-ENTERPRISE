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

const fireSafetyProducts = [
  {
    name: "Fire Extinguisher",
    price: "10.00",
    piecesLeft: 6,
    discount: "-25%",
  },
  { name: "Smoke Detector", price: "15.00", piecesLeft: 4, discount: null },
  {
    name: "Carbon Monoxide Detector",
    price: "20.00",
    piecesLeft: 2,
    discount: null,
  },
  { name: "Fire Blanket", price: "25.00", piecesLeft: 10, discount: "-25%" },
  { name: "Fire Alarm", price: "30.00", piecesLeft: 5, discount: null },
  {
    name: "Emergency Exit Sign",
    price: "35.00",
    piecesLeft: 8,
    discount: null,
  },
  { name: "Fire Hose", price: "40.00", piecesLeft: 1, discount: "-25%" },
  { name: "Fireproof Safe", price: "45.00", piecesLeft: 7, discount: null },
  { name: "Sprinkler Head", price: "50.00", piecesLeft: 3, discount: null },
  {
    name: "Fireproof Cabinet",
    price: "55.00",
    piecesLeft: 6,
    discount: "-25%",
  },
  { name: "Escape Ladder", price: "60.00", piecesLeft: 2, discount: null },
  { name: "Fire Door", price: "65.00", piecesLeft: 9, discount: null },
];

const fallProducts = [
  { name: "Safety Harness", price: "70.00", piecesLeft: 5, discount: "-20%" },
  { name: "Lanyard", price: "30.00", piecesLeft: 7, discount: null },
  {
    name: "Self-Retracting Lifeline",
    price: "120.00",
    piecesLeft: 3,
    discount: "-15%",
  },
  {
    name: "Anchorage Connector",
    price: "40.00",
    piecesLeft: 10,
    discount: null,
  },
  {
    name: "Vertical Lifeline",
    price: "80.00",
    piecesLeft: 4,
    discount: "-10%",
  },
  {
    name: "Horizontal Lifeline",
    price: "200.00",
    piecesLeft: 2,
    discount: null,
  },
  {
    name: "Guardrail System",
    price: "150.00",
    piecesLeft: 5,
    discount: "-25%",
  },
  { name: "Roof Hatch Safety", price: "100.00", piecesLeft: 8, discount: null },
  {
    name: "Scaffold Fall Protection",
    price: "90.00",
    piecesLeft: 6,
    discount: "-15%",
  },
  {
    name: "Ladder Safety System",
    price: "110.00",
    piecesLeft: 3,
    discount: null,
  },
  { name: "Safety Netting", price: "60.00", piecesLeft: 9, discount: "-10%" },
  { name: "Beam Anchor", price: "50.00", piecesLeft: 7, discount: null },
];

const ppeProducts = [
  { name: "Safety Goggles", price: "15.00", piecesLeft: 6, discount: "-10%" },
  { name: "Ear Protection", price: "12.00", piecesLeft: 4, discount: null },
  { name: "Respirator Mask", price: "25.00", piecesLeft: 3, discount: "-15%" },
  { name: "Hard Hat", price: "20.00", piecesLeft: 10, discount: null },
  { name: "Protective Gloves", price: "10.00", piecesLeft: 5, discount: "-5%" },
  { name: "Reflective Vest", price: "18.00", piecesLeft: 8, discount: null },
  { name: "Safety Boots", price: "50.00", piecesLeft: 2, discount: "-20%" },
  { name: "Coveralls", price: "30.00", piecesLeft: 7, discount: null },
  { name: "Face Shield", price: "22.00", piecesLeft: 9, discount: "-10%" },
  { name: "Knee Pads", price: "15.00", piecesLeft: 6, discount: null },
  { name: "Welding Helmet", price: "45.00", piecesLeft: 3, discount: "-25%" },
  {
    name: "Chemical Resistant Suit",
    price: "40.00",
    piecesLeft: 4,
    discount: null,
  },
];

const HomePage = () => {
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
        products={ppeProducts}
        onProductClick={handleProductClick}
      />
      <Section
        title="Fall Protection"
        products={fallProducts}
        onProductClick={handleProductClick}
      />
      <Banner2 />
      <Section
        title="Fire Safety"
        products={fireSafetyProducts}
        onProductClick={handleProductClick}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
