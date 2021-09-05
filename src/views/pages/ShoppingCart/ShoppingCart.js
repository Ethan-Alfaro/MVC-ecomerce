import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./shoppingCart.css";
import FetchDB from "../../hoc/FetchDB";

function ShoppingCart({ isLoading, userSession }) {
  const [getUser, setGetUser] = useState([]);
  const [loadCart, setLoadCart] = useState(false);
  const [userCart, setUserCart] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      fetchUser();
    }
    // Retornamos y seteamos el usuario a un Array vacío cuando se desmonta este componente. Esto es por seguridad
    return () => {
      setGetUser([]);
    };
  }, [isLoading]);

  function fetchUser() {
    // en teoria con el abortController, hacemos que una vez ejecutado el fetch, deje de funcionar y se descarte la funcion
    const ac = new AbortController();
    fetch(`/cart/get-user/${userSession.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGetUser(data);
        setUserCart(data.cart);
        setLoadCart(true);
      })
      .catch((err) => {
        console.error(err);
      });
    return ac.abort();
  }

  return (
    <div>
      <section className="user__container mt-3">
        <section key={getUser._id}>
          <div className="user__title container">
            <h4>Customer: {getUser.name}</h4>
          </div>
          <br />
          <div className="user__cart--container container d-flex flex-column gap-3">
            <h3 className="text-warning">Your cart:</h3>
            <hr />
            {loadCart &&
              userCart.map((product) => (
                <div
                  className="container d-flex flex-row justify-content-between align-items-center w-100"
                  key={product._id}>
                  <h4>{product.name}</h4>
                  <p className="text-warning">{product.price}€</p>
                </div>
              ))}
          </div>
        </section>
      </section>
      <NavLink to="/checkout">
        
        <button className="btn btn-dark" id="checkoutButton">Checkout</button>
      </NavLink>
    </div>
  );
}

export default FetchDB(ShoppingCart);
