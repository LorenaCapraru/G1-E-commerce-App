import React from "react";
import avatar from "../images/image-avatar.png";
import { Sidebar } from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styling/Header.css";

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
          <h1 className="header-heading">sneakers</h1>
          <ul className="desktopMenuList">
            <li>
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
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
