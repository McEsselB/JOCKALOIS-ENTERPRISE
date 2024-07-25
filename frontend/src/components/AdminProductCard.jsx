import "./AdminProductCard.modules.css";

const AdminProductCard = ({
  name,
  price,
  piecesLeft,
  discount,
  onClick,
  images,
}) => {
  return (
    <div className="product-card2" onClick={onClick}>
      {discount && <div className="discount-tag">{discount}</div>}
      <div>
        <img src={images[0]} alt="" className="product-image" />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>GH₵ {price}</p>
        <p>{piecesLeft} items left</p>
      </div>
    </div>
  );
};

export default AdminProductCard;
