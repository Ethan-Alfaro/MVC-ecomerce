import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

// pages to render depending URL
import Home from "./pages/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Profile/Login";
import Signup from "./pages/Profile/Signup";
import UpdatePassword from "./pages/Profile/UpdatePassword";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateData from "./pages/Dashboard/CreateData";
import DeleteData from "./pages/Dashboard/DeleteData";
import UpdateData from "./pages/Dashboard/UpdateData";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/shopping-cart" exact>
            <ShoppingCart />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/profile/login" exact>
            <Login />
          </Route>
          <Route path="/profile/signup" exact>
            <Signup />
          </Route>
          <Route path="/profile/update-password" exact>
            <UpdatePassword />
          </Route>
          <Route path="/dashboard/create-data" exact>
            <CreateData />
          </Route>
          <Route path="/dashboard/delete-data" exact>
            <DeleteData />
          </Route>
          <Route path="/dashboard/update-data" exact>
            <UpdateData />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;