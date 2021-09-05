import React from "react";
import "./widgetsm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New join members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="assets/user_pictures/erick_noiztbander.PNG"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Erick</span>
            <span className="widgetSmUserJob">Software Engineer</span>
          </div>
          <button className="btn btn-dark btn-sm btn-sm">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="assets/user_pictures/erick_noiztbander.PNG"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Carl </span>
            <span className="widgetSmUserJob">Front end developer</span>
          </div>
          <button className="btn btn-dark btn-sm btn-sm">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="assets/user_pictures/erick_noiztbander.PNG"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Rick </span>
            <span className="widgetSmUserJob">Sales manager B2C</span>
          </div>
          <button className="btn btn-dark btn-sm">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="assets/user_pictures/erick_noiztbander.PNG"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Pat </span>
            <span className="widgetSmUserJob">Marketing analyst</span>
          </div>
          <button className="btn btn-dark btn-sm">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
