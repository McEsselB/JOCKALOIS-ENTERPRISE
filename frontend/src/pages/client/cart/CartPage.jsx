import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Section from "../../../components/Section"; // Import the Section component for recommended products
import trashBinIcon from "../../../assets/images/trashbin.png";
import shoppingBagIcon from "../../../assets/images/shoppingbag.png";
import "./CartPage.modules.css";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const fetchRecommendedProducts = async () => {
    await axios
      .get("/api/get-all-products")
      .then((res) => {
        setRecommendedProducts(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecommendedProducts();
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
    updateTotalPrice(storedCartItems);
  }, []);

  const handleQuantityChange = (index, increment) => {
    const updatedCartItems = [...cartItems];
    if (increment) {
      updatedCartItems[index].quantity += 1;
    } else if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    updateTotalPrice(updatedCartItems);
  };

  const handleDeleteItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    updateTotalPrice(updatedCartItems);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const updateTotalPrice = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const openCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-content">
        <div className="cart-title-section">
          <img
            src={shoppingBagIcon}
            alt="Shopping Bag"
            className="cart-title-icon"
          />
          <h2 className="cart-title">My Cart</h2>
        </div>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              
              <div className="cart-image-placeholder"></div>
              <div className="cart-product-details">
                <h3 className="cart-product-name">
                  {item.name}
                  <button
                    className="cart-trash-bin"
                    onClick={() => handleDeleteItem(index)}
                  >
                    <img src={trashBinIcon} alt="Delete" />
                  </button>
                </h3>
                <div className="cart-product-price-section">
                  <span>Product Price:</span>
                  <span className="cart-product-price">GH₵ {item.price}</span>
                </div>
                <div className="cart-product-info">
                  <span>Items Selected: {item.quantity}</span>
                  <span className="cart-total-amount">
                    Total: GH₵ {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="cart-product-price-section">
                  <span>Discount:</span>
                  <span className="cart-product-price">
                    GH₵ {item.discount}
                  </span>
                </div>
                <div className="cart-quantity-controls">
                  <button
                    className="cart-quantity-minus"
                    onClick={() => handleQuantityChange(index, false)}
                  >
                    -
                  </button>
                  <span className="cart-quantity-indicator">
                    {item.quantity}
                  </span>
                  <button
                    className="cart-quantity-plus"
                    onClick={() => handleQuantityChange(index, true)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-bottom-section">
          <div className="cart-bottom-left">
          </div>
          <span className="cart-total-price">
            Total GH₵ {totalPrice.toFixed(2)}
          </span>
          <button className="cart-checkout-button" onClick={openCheckout}>
            Checkout
          </button>
        </div>
        <div className="cart-continue-shopping">
          <a href="/" className="continue-shopping-link">
            Continue Shopping
          </a>
        </div>
      </div>
      <div className="cart-recommended-products">
        <Section
          title="Recommended Products"
          products={recommendedProducts}
          onProductClick={(product) => console.log(product)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
