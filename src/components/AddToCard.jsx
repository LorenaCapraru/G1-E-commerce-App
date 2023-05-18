import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styling/AddToCard.css";

function AddToCard({
  cartCount,
  setCartCount,
  totalCount,
  setTotalCount,
  handleIncrease,
  handleDecrease,
  handleAddToCart,
}) {
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="add-to-card-container">
      <div className="quantity-container">
        <div className="quantity">
          <button className="decrease" onClick={handleDecrease}>
            -
          </button>
          <span className="count">{cartCount}</span>
          <button className="increase" onClick={handleIncrease}>
            +
          </button>
        </div>
        <button className="add-Cart" onClick={handleAddToCart}>
          {cartIcon} Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AddToCard;
