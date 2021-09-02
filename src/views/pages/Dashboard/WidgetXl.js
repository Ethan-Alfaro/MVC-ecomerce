import React from "react";
import "./widgetxl.css";

export default function WidgetXl() {
  return (
    <div className="widgetXl">
      <span className="widgetXlTitle">Latest transactions</span>
      <table className="tableWidgetXl">
        <tr className="widgetXlTr">
          <th className="widgetXlTh">Customer</th>
          <th className="widgetXlTh">Date</th>
          <th className="widgetXlTh">Amount</th>
          <th className="widgetXlTh">Status</th>
        </tr>
        <tr className="widgetXlTr">
          <td className="widgetXlUser">
            <img
              className="widgetXlImg"
              src="assets/user_pictures/erick_noiztbander.PNG"
            />
            <span className="widgetXlUserName">Rich</span>
          </td>
          <td className="widgetXlDate">2 September 2021</td>
          <td className="widgetXlAmout">633,44€</td>
          <td className="widgetXlStatus">
            <button className="btn btn-warning btn-sm">Pending</button>
          </td>
        </tr>
        <tr className="widgetXlTr">
          <td className="widgetXlUser">
            <img
              className="widgetXlImg"
              src="assets/user_pictures/erick_noiztbander.PNG"
            />
            <span className="widgetXlUserName">Erick</span>
          </td>
          <td className="widgetXlDate">20 August 2021</td>
          <td className="widgetXlAmout">200,23€</td>
          <td className="widgetXlStatus">
            <button className="btn btn-info btn-sm">Approved</button>
          </td>
        </tr>
        <tr className="widgetXlTr">
          <td className="widgetXlUser">
            <img
              className="widgetXlImg"
              src="assets/user_pictures/erick_noiztbander.PNG"
            />
            <span className="widgetXlUserName">Julio</span>
          </td>
          <td className="widgetXlDate">17 August 2021</td>
          <td className="widgetXlAmout">185,55€</td>
          <td className="widgetXlStatus">
            <button className="btn btn-success btn-sm">Delivery</button>
          </td>
        </tr>
        <tr className="widgetXlTr">
          <td className="widgetXlUser">
            <img
              className="widgetXlImg"
              src="assets/user_pictures/erick_noiztbander.PNG"
            />
            <span className="widgetXlUserName">Ethan</span>
          </td>
          <td className="widgetXlDate">13 August 2021</td>
          <td className="widgetXlAmout">324,44€</td>
          <td className="widgetXlStatus">
            <button className="btn btn-success btn-sm">Delivery</button>
          </td>
        </tr>
        <tr className="widgetXlTr">
          <td className="widgetXlUser">
            <img
              className="widgetXlImg"
              src="assets/user_pictures/erick_noiztbander.PNG"
            />
            <span className="widgetXlUserName">Hugo</span>
          </td>
          <td className="widgetXlDate">9 August 2021</td>
          <td className="widgetXlAmout">133,44€</td>
          <td className="widgetXlStatus">
            <button className="btn btn-danger btn-sm">Declined</button>
          </td>
        </tr>
        <tr className="widgetXlTr">
          <td className="widgetXlUser">
            <img
              className="widgetXlImg"
              src="assets/user_pictures/erick_noiztbander.PNG"
            />
            <span className="widgetXlUserName">Einar</span>
          </td>
          <td className="widgetXlDate">2 August 2021</td>
          <td className="widgetXlAmout">73,44€</td>
          <td className="widgetXlStatus">
            <button className="btn btn-success btn-sm">Delivery</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
