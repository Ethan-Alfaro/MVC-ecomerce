import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Mainheader from "./Mainheader";

import "./dashboard.css";

function Dashboard() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Mainheader />
      </div>
    </div>
  );
}

export default Dashboard;
