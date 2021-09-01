import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
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
    const { email, password, name } = this.state;

    axios
      .post("/register", {
        email: email,
        password: password,
        name: name,
      })
      .then((response) => {
        console.log("response from signup", response);
      })
      .cath((error) => {
        console.log("signup error", error);
      });

    e.prevenDefault();
  }

  render() {
    return (
      <div className="form-group mt-5">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="First name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
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
          <label htmlFor="exampleSelect1" className="form-label mt-4">
            Select your role
          </label>
          <select className="form-select" id="exampleSelect1">
            <option>Choose one</option>
            <option>Admin</option>
            <option>Employee</option>
          </select>
          <button type="submit" className="btn btn-dark mt-4">
            Signup
          </button>
        </form>
      </div>
    );
  }
}
