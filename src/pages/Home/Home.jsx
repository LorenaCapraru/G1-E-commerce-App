import React, { useState } from "react";
import { Header } from "../../components/Header";
import AddToCard from "../../components/AddToCard";
import "./Home.css";

export const Home = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Header totalCount={totalCount} />
      <AddToCard
        cartCount={cartCount}
        setCartCount={setCartCount}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
      />
    </div>
  );
};
