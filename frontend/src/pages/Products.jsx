import Section2 from "../components/Section2";
import "./Products.modules.css";

const AllProducts = [
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

const Products = () => {
  return (
    <div className="products-page">
      <div className="products-content">
        <main className="main-content">
          <h2>Products</h2>
          <div className="products-list">
            <Section2 products={AllProducts} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
