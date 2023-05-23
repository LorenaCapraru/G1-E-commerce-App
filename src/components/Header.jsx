import React from "react";
import avatar from "../images/image-avatar.png";
import { Sidebar } from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styling/Header.css";
import { Link } from "react-router-dom";

export const Header = ({ totalCount, openCart, setOpenCart }) => {
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  const handleCartClick = (e) => {
    e.preventDefault();
    openCart === false ? setOpenCart(true) : setOpenCart(false);
  };

  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <Sidebar />
          <h1 className="headingLogo">sneakers</h1>
          <ul className="desktopMenuList">
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="headerRight">
          <div className="cart" onClick={handleCartClick}>
            {cartIcon}
            <span className="cart-count">{totalCount}</span>
          </div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </>
  );
};
