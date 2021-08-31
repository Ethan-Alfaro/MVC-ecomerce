import React from "react";

import { NavLink } from "react-router-dom";

function MainHeader() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <p className="nav-items">LOGO</p>
      </NavLink>
      <NavLink to="/profile">
        <p className="nav-items">Profile</p>
      </NavLink>
      <NavLink to="/dashboard">
        <p className="nav-items">Dashboard</p>
      </NavLink>
      <NavLink to="/cart">
        <p className="nav-items">ShoppingCart</p>
      </NavLink>
      <NavLink to="/products">
        <p className="nav-items">Products</p>
      </NavLink>
    </nav>
  );
}

export default MainHeader;
