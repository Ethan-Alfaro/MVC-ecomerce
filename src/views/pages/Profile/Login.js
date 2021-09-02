import React, { Component } from "react";
import axios from "axios";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
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
      .then((response) => {
        console.log("response from login", response);
      })
      .cath((error) => {
        console.log("login error", error);
      });

    e.prevenDefault();
  }

  render() {
    return (
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
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit" className="btn btn-dark mt-4">
            Login
          </button>
        </form>
      </div>
    );
  }
}
