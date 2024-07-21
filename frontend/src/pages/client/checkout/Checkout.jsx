import { useState, useEffect } from "react";
import Header from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import shippingIcon from "../../../assets/images/shoppingbag.png";
import checkoutIcon from "../../../assets/images/checkout.png";
import "./Checkout.modules.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedShippingOption, setSelectedShippingOption] =
    useState("express");
  const [showAllShippingOptions, setShowAllShippingOptions] = useState(false);
  const [note, setNote] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTotalPrice = () => {
    return cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getDeliveryFee = () => {
    switch (selectedShippingOption) {
      case "express":
        return 20.0;
      case "standard":
        return 10.0;
      case "economy":
        return 5.0;
      case "basic":
      default:
        return 0.0;
    }
  };

  const getFinalTotal = () => {
    return (parseFloat(getTotalPrice()) + getDeliveryFee()).toFixed(2);
  };

  const openCart = () => {
    navigate("/cart");
  };

  const handlePaymentMethodClick = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleShippingOptionClick = (option) => {
    setSelectedShippingOption(option);
    setShowAllShippingOptions(false);
  };

  const toggleShippingOptions = () => {
    setShowAllShippingOptions(!showAllShippingOptions);
  };

  const getEstimatedArrivalDate = (option) => {
    const deliveryDate = new Date(currentDate);
    switch (option) {
      case "express":
        deliveryDate.setDate(deliveryDate.getDate() + 5);
        break;
      case "standard":
        deliveryDate.setDate(deliveryDate.getDate() + 7);
        break;
      case "economy":
        deliveryDate.setDate(deliveryDate.getDate() + 10);
        break;
      default:
        break;
    }
    return deliveryDate.toDateString();
  };

  const shippingOptions = {
    express: {
      label: "Express",
      description: `Estimated arrival ${getEstimatedArrivalDate("express")}`,
      price: 20.0,
    },
    standard: {
      label: "Standard",
      description: `Estimated arrival ${getEstimatedArrivalDate("standard")}`,
      price: 10.0,
    },
    economy: {
      label: "Economy",
      description: `Estimated arrival ${getEstimatedArrivalDate("economy")}`,
      price: 5.0,
    },
    basic: {
      label: "Basic",
      description: "Pick up from store",
      price: 0.0,
    },
  };

  return (
    <div className="checkout-page">
      <Header />
      <div className="checkout-content">
        <div className="checkout-header">
          <img src={checkoutIcon} alt="Checkout" className="cart-title-icon2" />
          <h2 className="checkout-title">Checkout</h2>
        </div>
        <button className="backtocart" onClick={openCart}>
          Back to Cart
        </button>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="checkout-product-section" key={index}>
              <div className="checkout-product-image-placeholder"></div>
              <div className="checkout-product-details">
                <p className="checkout-product-name">{item.name}</p>
                <p className="checkout-product-specification">
                  {item.specification}
                </p>
                <div className="checkout-product-price-section">
                  <p className="checkout-product-price">
                    GH₵ {item.price} x {item.quantity}
                  </p>
                  <p className="checkout-product-total-price">
                    GH₵ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
        <div className="checkout-subtotal">
          <span>Subtotal, {cartItems.length} item(s)</span>
          <span>GH₵ {getTotalPrice()}</span>
        </div>
        <div className="checkout-select-shipping">
          <div className="shipping-header">
            <span>Select shipping</span>
            <a onClick={toggleShippingOptions} className="see-options">
              See all options
            </a>
          </div>
          {!showAllShippingOptions && (
            <div className="shipping-option">
              <div className="shipping-option-detail">
                <strong>{shippingOptions[selectedShippingOption].label}</strong>
                <p>{shippingOptions[selectedShippingOption].description}</p>
              </div>
              <span className="shipping-price">
                GH₵ {shippingOptions[selectedShippingOption].price.toFixed(2)}
              </span>
            </div>
          )}
          {showAllShippingOptions && (
            <>
              {Object.keys(shippingOptions).map((optionKey) => (
                <div
                  key={optionKey}
                  className={`shipping-option ${
                    selectedShippingOption === optionKey ? "selected" : ""
                  }`}
                  onClick={() => handleShippingOptionClick(optionKey)}
                >
                  <div className="shipping-option-detail">
                    <strong>{shippingOptions[optionKey].label}</strong>
                    <p>{shippingOptions[optionKey].description}</p>
                  </div>
                  <span className="shipping-price">
                    GH₵ {shippingOptions[optionKey].price.toFixed(2)}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
        {selectedShippingOption !== "basic" && (
          <div className="checkout-shipping-address">
            <div className="shipping-address-header">
              <img
                src={shippingIcon}
                alt="Shipping Icon"
                className="shipping-icon"
              />
              <span>Shipping Address</span>
            </div>
            <p className="shipping-address-detail">
              <strong>Home</strong> University of Ghana, Legon hall, Accra
              <br />
              <br></br>
              Lucy Stone, +233570450450
            </p>
          </div>
        )}
        <div className="checkout-note">
          <span>Note:</span>
          <textarea
            className="note-input"
            placeholder="Enter your note here"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        <div className="checkout-payment-methods">
          <span>Payment methods</span>
          <div className="payment-methods-options">
            <button
              className={`payment-method ${
                selectedPaymentMethod === "cash" ? "selected" : ""
              }`}
              onClick={() => handlePaymentMethodClick("cash")}
            >
              <span>Cash</span>
              <p>Pay when product arrives</p>
            </button>
            <button
              className={`payment-method ${
                selectedPaymentMethod === "bank-transfer" ? "selected" : ""
              }`}
              onClick={() => handlePaymentMethodClick("bank-transfer")}
            >
              <span>Bank Transfer</span>
              <p>Click to access account details</p>
            </button>
          </div>
        </div>
        <div className="checkout-total-section">
          <p className="checkout-total">Total: GH₵ {getFinalTotal()}</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
