import React, { useEffect, useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import "./usertable.css";
import { TableHead } from "@material-ui/core";

function UserTable() {
  const [users, setUsers] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchUsers();

    return () => {
      setUsers([]);
    };
  }, []);

  function fetchUsers() {
    fetch("/dashboard/get-users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <table className="table table-secondary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Category</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>

        {isLoaded && (
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.category}</td>
                <td>
                  <Delete className="deleteUser" />
                </td>
                <td>
                  <Edit className="editUser" />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default UserTable;
