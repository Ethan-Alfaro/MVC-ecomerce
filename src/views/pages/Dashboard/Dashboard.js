import React from "react";
import Sidebar from "./Sidebar";
import Mainheader from "./Mainheader";
import UserTable from "./UserTable";
import ProductTable from "./ProductTable";

import "./dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />

      <div className="w-100">
        <Mainheader />
        <UserTable />
        <ProductTable />
      </div>
    </div>
  );
}

export default Dashboard;
