import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// pages to render depending URL
import Home from "./pages/Home";
import Profile from "./pages/Profile/Profile";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
            <Link to='/profile'><p className="nav-items">Profile</p></Link>
            <Link to='/dashboard'><p className="nav-items">Dashboard</p></Link>
            <Link to='/'><p className="nav-items">Shopping Center</p></Link> 
            <Link to='/cart'><p className="nav-items">ShoppingCart</p></Link>
            <Link to='/products'><p className="nav-items">Products</p></Link>
        </div>




        <Switch>
      
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>
      </Router>

    </div>
  );
}
export default App;