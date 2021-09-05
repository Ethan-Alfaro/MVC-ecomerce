import React, { useState } from "react";

import CreditCard from "../../components/CreditCard/CreditCard";

function Checkout() {
  const [cardNameAnimation, setCardNameAnimation] = useState("");
  const [cardCVVCodeAnimation, setCardCVVCodeAnimation] = useState("");
  const [cardNumberAnimation, setCardNumberAnimation] = useState("");
  const [cardExpirationDateAnimation, setCardExpirationDateAnimation] =
    useState("");

  return (
    <div className="container-fluid d-flex flex-row justify-content-center align-items-center w-100 mt-3 gap-3">
      <form className="w-100">
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly=""
              className="form-control-plaintext"
              id="staticEmail"
              value="email@example.com"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label for="exampleSelect1" className="form-label mt-4">
            Example select
          </label>
          <select className="form-select" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
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
