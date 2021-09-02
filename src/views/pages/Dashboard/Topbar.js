import React from "react";
import "./topbar.css";
import { Notifications, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft"></div>
        <div className="topbarRight">
          <div className="topbarIcons">
            <Notifications />
          </div>
          <div className="topbarIcons">
            <Language />
          </div>
          <div className="topbarIcons">
            <Settings />
          </div>
          <img
            src="assets/user_pictures/erick_noiztbander.PNG"
            className="topbarAvatar"
          />
        </div>
      </div>
    </div>
  );
}
