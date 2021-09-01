import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="form-group mt-5">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      <button type="submit" className="btn btn-dark mt-4">Login</button>
    </div>
   
  );
}

export default Login;
