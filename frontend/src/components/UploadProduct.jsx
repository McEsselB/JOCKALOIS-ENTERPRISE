import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./UploadProduct.modules.css";
import { FaCheck, FaCloudUploadAlt } from "react-icons/fa";

const colorsList = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Yellow", value: "yellow" },
  { name: "Black", value: "black" },
  { name: "White", value: "white" },
  { name: "Purple", value: "purple" },
  { name: "Orange", value: "orange" },
  { name: "Pink", value: "pink" },
];

const UploadProduct = ({ addProduct }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingProduct = location.state ? location.state.product : null;

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [pieces, setPieces] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (existingProduct) {
      setProductName(existingProduct.name);
      setCategory(existingProduct.category);
      setPrice(existingProduct.price.toString());
      setPieces(existingProduct.piece.toString());
      setSelectedColors(existingProduct.colors);
      setImages(existingProduct.images || []);
    }
  }, [existingProduct]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleColorSelect = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + images.length <= 4) {
      const readers = files.map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
        });
      });
      Promise.all(readers).then((newImages) => {
        setImages((prevImages) => [...prevImages, ...newImages]);
      });
    } else {
      alert("You can upload up to 4 images.");
    }
  };

  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      images,
      name: productName,
      category,
      price: parseFloat(price),
      piece: parseInt(pieces),
      colors: selectedColors,
    };
    addProduct(newProduct);
    navigate("/productstock");
  };

  return (
    <div className="product-page">
      <div className="product-content">
        <main className="main-content">
          <form className="product-form" onSubmit={handleSubmit}>
            <div className="product-fields">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="productName">Product Name</label>
                  <input
                    type="text"
                    id="productName"
                    className="form-input"
                    placeholder="Enter Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    className="form-input"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="Fire Safety">Fire Safety</option>
                    <option value="Fall Protection">Fall Protection</option>
                    <option value="PPE">PPE</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <div className="cur-group">
                    <input
                      type="text"
                      id="price"
                      className="form-input"
                      placeholder="Enter Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Discount</label>
                  <div className="cur-group">
                    <input
                      type="text"
                      id="price"
                      className="form-input"
                      placeholder="Enter Discount"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="pieces">Number of Pieces Available</label>
                <input
                  type="text"
                  id="pieces"
                  className="form-input"
                  placeholder="Enter Number of Pieces"
                  value={pieces}
                  onChange={(e) => setPieces(e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group mt-8">
                  <label htmlFor="colors">Tick Colors Available</label>
                  <div className="color-dropdown">
                    {colorsList.map((color) => (
                      <div
                        key={color.value}
                        className="color-option"
                        onClick={() => handleColorSelect(color.value)}
                      >
                        <div
                          className="color-circle"
                          style={{
                            backgroundColor: color.value,
                          }}
                        ></div>
                        {selectedColors.includes(color.value) && (
                          <FaCheck className="color-tick" />
                        )}
                        <span>{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="upload-logo-section mt-6">
              <label htmlFor="productImage" className="font-bold text-xl mb-2">
                Upload Image
              </label>
              <label htmlFor="uploadImageInput">
                <div className="p-2 bg-slate-100 cursor-pointer flex justify-center items-center border  rounded h-32 w-full">
                  <div className="text-slate-500  flex justify-center items-center flex-col gap-1">
                    <span className="text-4xl">
                      <FaCloudUploadAlt />
                    </span>
                    <p className="text-sm">Upload Product Image</p>
                    <input
                      type="file"
                      id="uploadImageInput"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
              </label>
              <div className="uploaded-images">
                {images.map((img, index) => (
                  <div key={index} className="uploaded-image-box">
                    <img
                      src={img}
                      alt={`Product ${index}`}
                      className="uploaded-image"
                    />
                    <button
                      type="button"
                      className="remove-image"
                      onClick={() => handleImageRemove(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="save-button-container">
              <button type="submit" className="save-button">
                Upload Product
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default UploadProduct;
