import React, { useState, useEffect } from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Store,
  Euro,
  Mail,
  Feedback,
  Message,
  SupervisorAccount,
  SupervisedUserCircle,
  BeachAccess,
} from "@material-ui/icons";

export default function Sidebar() {
  const [userClicked, setUserClicked] = useState(false);

  function handleUserClicked() {
    setUserClicked(true);
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList mt-3">
            <li className="sidebarlistItem active">
              <LineStyle className="iconsLeft" />
              Home
            </li>
            <li className="sidebarlistItem mt-2">
              <Timeline className="iconsLeft" />
              Analytics
            </li>
            <li className="sidebarlistItem mt-2">
              <TrendingUp className="iconsLeft" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList mt-3">
            <li className="sidebarlistItem ">
              <button
                type="button"
                className="buttonUser"
                onClick={() => handleUserClicked()}>
                <Person className="iconsLeft" />
                Users
              </button>
            </li>
            <li className="sidebarlistItem mt-2">
              <Store className="iconsLeft" />
              Products
            </li>
            <li className="sidebarlistItem mt-2">
              <Euro className="iconsLeft" />
              Transactions
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList mt-3">
            <li className="sidebarlistItem ">
              <Mail className="iconsLeft" />
              Mail
            </li>
            <li className="sidebarlistItem mt-2">
              <Feedback className="iconsLeft" />
              Feedback
            </li>
            <li className="sidebarlistItem mt-2">
              <Message className="iconsLeft" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList mt-3">
            <li className="sidebarlistItem ">
              <SupervisorAccount className="iconsLeft" />
              Role
            </li>
            <li className="sidebarlistItem mt-2">
              <BeachAccess className="iconsLeft" />
              Vacations
            </li>
            <li className="sidebarlistItem mt-2">
              <SupervisedUserCircle className="iconsLeft" />
              Manage
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
