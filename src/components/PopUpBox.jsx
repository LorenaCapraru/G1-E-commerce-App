import React from "react";
import "../styling/PopUpBox.css";

export const PopUpBox = ({ cartCount }) => {
  const emptyBasket = () => {
    return <div className="empty">empty</div>;
  };

  const fullBasket = () => {
    return <div className="full">full</div>;
  };

  return (
    <div className="container">
      {cartCount === 0 ? emptyBasket() : fullBasket()}
    </div>
  );
};
