import React, { useEffect, useState } from "react";

import "./shoppingCart.css";

function ShoppingCart() {
  const [getUser, setGetUser] = useState([]);

  useEffect(() => {
    fetchUser();
    // Retornamos y seteamos el usuario a un Array vacío cuando se desmonta este componente. Esto es por seguridad
    return () => {
      setGetUser([]);
    };
  }, []);

  function fetchUser() {
    // en teoria con el abortController, hacemos que una vez ejecutado el fetch, deje de funcionar y se descarte la funcion
    const ac = new AbortController();
    fetch("/cart/get-users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setGetUser(data);
      })
      .catch((err) => {
        console.error(err);
      });
    return ac.abort();
  }

  return (
    <div>
      <h1 className="container mt-3">Shopping cart page</h1>
      <hr />
      <br />
      <section className="user__container">
        {getUser.map((user) => (
          <section key={user._id}>
            <div className="user__title container">
              <h4>Customer: {user.name}</h4>
            </div>
            <br />
            <div className="user__cart--container container d-flex flex-column gap-3">
              <h3 className="text-warning">Your cart:</h3>
              <hr />
              {user.cart.map((product) => (
                <div
                  key={product._id}
                  className="container d-flex flex-row justify-content-between align-items-center w-100">
                  <h4>{product.name}</h4>
                  <p className="text-warning">{product.price}€</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}

export default ShoppingCart;
