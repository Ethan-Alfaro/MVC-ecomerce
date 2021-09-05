import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Mainheader from "./Mainheader";
import UserTable from "./userTable";

import "./dashboard.css";

function Dashboard() {

  return (
    <div>
      {/* <Topbar /> */}
      <div className="container">
        <Sidebar />
        <Mainheader />
        <hr />
        <UserTable />
      </div>
    </div>
  );
}

export default Dashboard;
