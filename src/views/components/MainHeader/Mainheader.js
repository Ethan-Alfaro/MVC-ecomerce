import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./mainHeader.css";

function MainHeader() {
  const [userSession, setUserSession] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    window.history.pushState({}, document.title, "/" + "");
    checkIfSessionExist();
  }, []);

  function checkIfSessionExist() {
    fetch("/get-user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserSession(data);
        if (data.message !== "You are not logged in") {
          setIsLogged(true);
          if (data.category == "Employee") {
            setIsAdmin(false);
          } else {
            setIsAdmin(true);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function goToLogout() {
    window.location = "/profile/logout";
  }

  return (
    <nav className="container-fluid d-flex flex-row justify-content-between align-items-center navbar-dark bg-primary gap-3 py-2 px-5">
      <div className="navigation__logo--container">
        <NavLink to="/">
          <img
            className="navigation__logo"
            src="/assets/branding/Mern_Logo.png"
            alt="logo"></img>
        </NavLink>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        <div className="navigation__links d-flex flex-row gap-4">
          <NavLink to="/products">
            <p className="text-light">Products</p>
          </NavLink>
          {isLogged && isAdmin && (
            <NavLink to="/dashboard">
              <p className="text-light">Dashboard</p>
            </NavLink>
          )}
        </div>

        <div className="navigation__login d-flex flex-row justify-content-between align-items-center pe-3 gap-4">
          {!isLogged && (
            <>
              <NavLink to="/login">
                <p className="text-white">Login</p>
              </NavLink>
              <NavLink to="/register">
                <p className="text-white">Register</p>
              </NavLink>{" "}
            </>
          )}
          <NavLink to="/cart">
            <i className="fas fa-shopping-cart text-light"></i>
          </NavLink>
          {isLogged && (
            <>
              <div className="d-flex flex-row justify-content-between align-items-center gap-2">
                {userSession.name ? (
                  <p className="text-light">{userSession.name}</p>
                ) : (
                  <p className="text-light">Username</p>
                )}
                <div>
                  <NavLink
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <i className="fas fa-chevron-down text-light d-flex justify-content-center align-items-center"></i>
                  </NavLink>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item bg-light" to="/profile">
                      <p className="text-primary">Profile</p>
                    </NavLink>
                    <button className="btn btn-primary w-100" onClick={goToLogout}>
                      <p className="text-light d-flex flex-row justify-content-center">Logout</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="user__picture--container">
                <img
                  className="user__picture"
                  src="assets/user_pictures/profile_picture.png"
                  alt="user-picture"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
