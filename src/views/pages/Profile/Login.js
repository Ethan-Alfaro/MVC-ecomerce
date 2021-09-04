import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
      submitted: false,
      errorMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { email, password } = this.state;

    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.message);
        if ((res.data.message = "Logged!")) {
          this.setState({
            submitted: true,
          });
        }
      })
      .catch((err) => {
        this.setState({
          email: "",
          password: "",
          errorMessage: "Usuario erróneo, vuelva a intentarlo",
        });
        console.error(err);
      });

    e.preventDefault();
  }

  render() {
    const { submitted, errorMessage } = this.state;
    return (
      <>
        {submitted ? (
          <Redirect to="/" />
        ) : (
          <section>
            {errorMessage == "" ? (
              <div></div>
            ) : (
              <div className="alert alert-dismissible alert-warning">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"></button>
                <h3 className="alert-heading">Warning!</h3>
                <h5 className="mb-0 mt-2">{errorMessage}</h5>
              </div>
            )}
            <div className="form-group mt-2">
              <div className="imageLogin">
                <img className="imageLogin" src="/assets/login/robot.png" />
              </div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                />
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                />
                <button type="submit" className="btn btn-dark mt-4">
                  Login
                </button>
              </form>
            </div>
          </section>
        )}
      </>
    );
  }
}
