import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./AddToCard.css";

function AddToCard() {
  const [cartCount, setCartCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const handleIncrease = () => {
    setCartCount(cartCount + 1);
  };

  const handleDecrease = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const handleAddToCart = () => {
    setTotalCount(totalCount + cartCount);
  };

  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="App">
      <header>
        <h1>E-commerce App</h1>
        <div className="cart">
          {cartIcon}
          <span className="cart-count">{totalCount}</span>
        </div>
      </header>
      <main>
        <div className="product">
          <h2>Product Name</h2>
          <h3>Price: $10</h3>
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
      </main>
    </div>
  );
}

export default AddToCard;
