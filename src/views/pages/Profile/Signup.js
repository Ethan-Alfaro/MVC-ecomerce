import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
      category: "Employee",
      submitted: false,
      errorMessage: "",
      newProductImage: "",
      isSelected: false,
      isLoaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFotoChange = this.handleFotoChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleFotoChange() {
    this.setState({
      newProductImage: event.target.files[0],
      isSelected: true,
    });
  }

  handleSubmit(e) {
    const {
      email,
      password,
      confirmPassword,
      category,
      name,
      newProductImage,
      isLoaded,
    } = this.state;

    // create User on DB
    axios
      .post("/register/register-user", {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        category: category,
        image: newProductImage.name,
        name: name,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message == "User saved!") {
          this.setState({
            submitted: true,
          });
        } else if (res.data.message == "Email already used!") {
          this.setState({
            errorMessage: "Email already used!",
            email: "",
            password: "",
            confirmPassword: "",
          });
          // window.location = "/register";
        } else if (res.data.message == "Hay errores!") {
          this.setState({
            errorMessage: res.data.errors[0],
            password: "",
            confirmPassword: "",
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });

    // // Upload foto to server
    const formData = new FormData();
    formData.append("userImage", newProductImage);

    fetch("/register/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // location.reload();
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  }

  render() {
    const { submitted, errorMessage, isSelected, newProductImage, isLoaded } =
      this.state;
    return (
      <>
        {submitted ? (
          <Redirect to="/login" />
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
            <div className="form-group mt-2 mb-5">
              {console.log(submitted)}
              <div className="imageLogin">
                <img
                  className="imageLogin"
                  src="/assets/signup/robot-signup.png"
                />
              </div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="exampleInputName1" className="form-label mt-4">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  placeholder="First name"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
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
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                />
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4">
                  Confirm password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  id="exampleInputConfirmPassword1"
                  placeholder="Confirm password"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                />
                <div className="form-group w-100">
                  <label htmlFor="productFoto" className="form-label mt-4">
                    Product foto
                  </label>
                  <input
                    name="productFoto"
                    onChange={this.handleFotoChange}
                    className="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
                {isSelected ? (
                  <div className="mt-3 mb-3">
                    <p>Filename: {newProductImage.name}</p>
                    <p>Filetype: {newProductImage.type}</p>
                    <p>Size in bytes: {newProductImage.size}</p>
                    <p>
                      lastModifiedDate:{" "}
                      {newProductImage.lastModifiedDate.toLocaleDateString()}
                    </p>
                  </div>
                ) : (
                  <p>Select a file to show details</p>
                )}
                <button type="submit" className="btn btn-dark mt-4">
                  Signup
                </button>
              </form>
            </div>
          </section>
        )}
      </>
    );
  }
}
