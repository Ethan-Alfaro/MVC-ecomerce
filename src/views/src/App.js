import './App.css';
import Profile from './components/profile/profile.js';
import Dashboard from './components/dashboard/dashboard.js';
import Shop from './components/shop/shop.js';
import Cart from './components/cart/cart.js';
import Orders from './components/orders/orders.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
            <Link to='/profile'><p className="nav-items">Profile</p></Link>
            <Link to='/dashboard'><p className="nav-items">Dashboard</p></Link>
            <Link to='/'><p className="nav-items">Shopping Center</p></Link>
            <Link to='/cart'><p className="nav-items">ShoppingCart</p></Link>
            <Link to='/orders'><p className="nav-items">Orders</p></Link>
        </div>

        <Switch>
      
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Shop />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
