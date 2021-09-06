import React, { useState, useEffect } from "react";
import FetchDB from "../../hoc/FetchDB";

import "./resume.css";

function Resume(
  isLoading,
  userSession,
  cardNameAnimation,
  cardCVVCodeAnimation,
  cardNumberAnimation,
  cardExpirationDateAnimation
) {
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
  }

  return (
    <>
      <section className="checkout__main--container">
        <div className="checkout__resume--container">
          <section>
            <h4>Your order Confirmed!</h4> <br />
          </section>
          <section className="checkout__header--section">
            {getUser.name === "" ? (
              <div>
                <h5>Hi, client,</h5>
                <p>Your order has beeen confirmed and will be shipping soon.</p>
              </div>
            ) : (
              <div>
                <h5>Hi, {getUser.name},</h5>
                <p>Your order has beeen confirmed and will be shipping soon.</p>
              </div>
            )}
            <hr />
          </section>
          <div className="checkout__resume">
            <section className="checkout__personalDetail--section">
              <h4>Personal Details</h4> <br />
              {getUser.name === "" ? (
                <div>
                  <h6>Name</h6>
                  <p>No name registered</p>
                </div>
              ) : (
                <div>
                  <h6>Name</h6>
                  <p>{getUser.name}</p>
                </div>
              )}
              {getUser.email === "" ? (
                <div>
                  <h6>Email</h6>
                  <p> No Email registered </p>
                </div>
              ) : (
                <div>
                  <h6>Email</h6>
                  <p>{getUser.email}</p>
                </div>
              )}
              <div>
                <h6>Adress</h6> <p> No Adress registered </p>
              </div>
              <div>
                <h6>Phone number</h6>
                <p>No phone number registered</p>
              </div>
              <hr />
            </section>
            <section className="checkout__productCard--section">
              {loadCart &&
                userCart.map((product) => (
                  <div
                    className="container d-flex flex-row justify-content-between align-items-center w-100"
                    key={product._id}>
                    <h4>{product.name}</h4>
                    <p className="text-warning">{product.price}€</p>
                  </div>
                ))}
            </section>
            <section className="checkout__price--section">
              <div>
                <h6>Subtotal</h6>
                <p>$199.99</p>
              </div>
              <div>
                <h6>Exprees Shipping</h6>
                <p>$6.99</p>
              </div>
              <div>
                <h6>Taxes</h6>
                <p>$13</p>
              </div>
              <div>
                <h6>Discount</h6>
                <p>-20%</p>
              </div>
              <hr />
            </section>
            <section className="checkout__orderDate--section">
              <div>
                <h6>Order Date</h6> <p> 18 March, 2021 </p>
              </div>
              <div>
                <h6>Shipping number</h6> <p> BK55546456745 </p>
              </div>
                <div>
                  <h6>Payment</h6> <p> Visa Visota </p>
                </div>

              {cardNameAnimation === "" ? (
                <div>
                  <h6>Nombre de tarjeta</h6>
                  <p> No credit card </p>
                </div>
              ) : (
                <div>
                  <h6>Nombre de tarjeta</h6>{" "}
                  <p> {cardNameAnimation} </p>
                </div>
              )}
              <hr />
            </section>
            <section className="checkout__footer--section">
              <p>
                we will send you shipping confirmation when your items are on
                the way! We apreciate your business, and hope you enjoy your
                purchase.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default FetchDB(Resume);
