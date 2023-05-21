import React from "react";
import "../styling/PopUpBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import productImg from "../images/image-product-1-thumbnail.jpg";

export const PopUpBox = ({ totalCount, setTotalCount }) => {
  const emptyBasket = () => {
    return (
      <div className="empty">
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  };

  const deleteProduct = (e) => {
    e.preventDefault();
    setTotalCount((totalCount -= 1));
  };

  const fullBasket = () => {
    return (
      <div className="full">
        <h1>Cart</h1>
        <div className="productContainer">
          <img src={productImg} alt="product" />
          <div className="productDetails">
            <p className="productName">Fall Limited Edition Sneakers</p>
            <p className="productPrice">
              $125.00 x {totalCount}{" "}
              <span>${(125 * totalCount).toFixed(2)}</span>
            </p>
          </div>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="trash"
            onClick={deleteProduct}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      {totalCount === 0 ? emptyBasket() : fullBasket()}
    </div>
  );
};
