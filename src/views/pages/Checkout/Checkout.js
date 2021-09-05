import React, { useState } from "react";

import CreditCard from "../../components/CreditCard/CreditCard";

function Checkout() {
  const [cardNameAnimation, setCardNameAnimation] = useState("");
  const [cardCVVCodeAnimation, setCardCVVCodeAnimation] = useState("");
  const [cardNumberAnimation, setCardNumberAnimation] = useState("");
  const [cardExpirationDateAnimation, setCardExpirationDateAnimation] =
    useState("");

  return (
    <div className="container-fluid d-flex flex-row justify-content-center align-items-center w-100 mt-5 gap-3">
      <form className="w-100">
        <div className="form-group">
          <label htmlFor="exampleInputName" className="form-label mt-4">
            Card Name
          </label>
          <input
            type="text"
            name="text"
            className="form-control"
            id="exampleInputName"
            onChange={(event) => {
              return setCardNameAnimation(event.target.value);
            }}
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            value={cardNameAnimation}
            maxLength="50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputCardNumber" className="form-label mt-4">
            Card Number
          </label>
          <input
            type="text"
            name="text"
            className="form-control"
            id="exampleInputCardNumber"
            onChange={(event) => {
              return setCardNumberAnimation(event.target.value);
            }}
            placeholder="Enter your card number"
            value={cardNumberAnimation}
            maxLength="16"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleExpiryNumber" className="form-label mt-4">
            Expiry Date
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleExpiryNumber"
            onChange={(event) => {
              return setCardExpirationDateAnimation(event.target.value);
            }}
            placeholder="mm/yy"
            value={cardExpirationDateAnimation}
            maxLength="5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleCvvCardNumber" className="form-label mt-4">
            CVV
          </label>
          <input
            type="number"
            name="number"
            className="form-control"
            id="exampleCvvCardNumber"
            onChange={(event) => {
              return setCardCVVCodeAnimation(event.target.value);
            }}
            placeholder="Enter your cvv"
            value={cardCVVCodeAnimation}
            maxLength="3"
          />
          <button className="btn btn-dark mt-5">Finish purchase</button>
        </div>
      </form>

      <div className="h-75 w-100 pe-3">
        <div>
          <CreditCard
            cardNameAnimation={cardNameAnimation}
            cardCVVCodeAnimation={cardCVVCodeAnimation}
            cardNumberAnimation={cardNumberAnimation}
            cardExpirationDateAnimation={cardExpirationDateAnimation}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
