import React, { useState } from "react";
import { Header } from "../../components/Header";
import "./Home.css";
import Product from "../../components/Product";
import { PopUpBox } from "../../components/PopUpBox";

export const Home = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <Header
        totalCount={totalCount}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      {!openCart ? null : (
        <PopUpBox totalCount={totalCount} setTotalCount={setTotalCount} />
      )}
      <Product
        cartCount={cartCount}
        setCartCount={setCartCount}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
      />
    </div>
  );
};
