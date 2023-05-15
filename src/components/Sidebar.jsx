import React from "react";
import { slide as Menu } from "react-burger-menu";

export const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Collections
      </a>
      <a className="menu-item" href="/">
        Men
      </a>
      <a className="menu-item" href="/">
        Women
      </a>
      <a className="menu-item" href="/">
        About
      </a>
      <a className="menu-item" href="/">
        Contact
      </a>
    </Menu>
  );
};
