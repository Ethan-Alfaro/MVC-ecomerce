import React from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Header
import MainHeader from "./components/MainHeader/Mainheader";
// pages to render depending URL
import Home from "./pages/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Profile/Login";
import Signup from "./pages/Profile/Signup";
import UpdatePassword from "./pages/Profile/UpdatePassword";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <MainHeader />
        <Switch>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
