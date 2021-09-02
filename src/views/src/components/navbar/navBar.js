import React, { Component } from 'react';
import './navBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
class NavBar extends Component {
    render(){

        return(
            <Router>
                <div className="nav">
                <Link to='/profile'><p className="nav-items">Profile</p></Link>
                <Link to='/dashboard'><p className="nav-items">Dashboard</p></Link>
                <Link to='/shop'><p className="nav-items">Shopping Center</p></Link>
                <Link to='/cart'><p className="nav-items">ShoppingCart</p></Link>
                <Link to='/orders'><p className="nav-items">Orders</p></Link>
            </div>
            </Router>
            
        )
    }
}

export default NavBar;