import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Mainheader from "./Mainheader";

import "./dashboard.css";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    fetch("/dashboard/get-users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
