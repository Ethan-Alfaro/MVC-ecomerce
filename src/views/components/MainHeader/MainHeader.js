import React from "react";

import { NavLink } from "react-router-dom";

function MainHeader() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/profile/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/profile/signup">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/checkout">
            Checkout
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/shopping-cart">
            ShoppingCart
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainHeader;
