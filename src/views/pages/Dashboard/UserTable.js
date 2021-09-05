import React, { useEffect, useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import "./usertable.css";
import { TableHead } from "@material-ui/core";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [userIdClicked, setUserIdClicked] = useState("");
  const [userNameClicked, setUserNameClicked] = useState("");
  const [userEmailClicked, setUserEmailClicked] = useState("");
  const [userCategoryClicked, setUserCategoryClicked] = useState("");
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

  function deleteUser(id) {
    fetch(`/dashboard/delete-user/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function editUser(id, newUsername, newEmail, newCategory) {
    fetch(`/dashboard/edit-user/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        username: newUsername,
        email: newEmail,
        category: newCategory,
      }),
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        location.reload();
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
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.category}</td>
                <td>
                  <button
                    className="btn btn-light"
                    onClick={() => deleteUser(user._id)}>
                    <Delete className="deleteUser" />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-light"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#openUserCanvas"
                    aria-controls="openUserCanvas"
                    onClick={() => {
                      setUserIdClicked(user._id);
                      setUserNameClicked(user.name);
                      setUserEmailClicked(user.email);
                      setUserCategoryClicked(user.category);
                    }}>
                    <Edit className="editUser" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <section
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="openUserCanvas"
        aria-labelledby="openUserCanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Edit user
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="w-100">
            <div className="form-group w-100">
              <label htmlFor="userName" className="form-label mt-4">
                User name:
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="Enter new user name"
                // defaultValue={userNameClicked}
                value={userNameClicked}
                onChange={(event) => {
                  return setUserNameClicked(event.target.value);
                }}
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="userEmail" className="form-label mt-4">
                User email:
              </label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                aria-describedby="emailHelp"
                placeholder="Enter new Email"
                onChange={(event) => {
                  return setUserEmailClicked(event.target.value);
                }}
                // defaultValue={userEmailClicked}
                value={userEmailClicked}
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="userCategory" className="form-label mt-4">
                User category
              </label>
              <select
                className="form-select"
                id="userCategory"
                onChange={(event) => {
                  return setUserCategoryClicked(event.target.value);
                }}
                // defaultValue={userCategoryClicked}
                value={userCategoryClicked}>
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
                <option value="Customer">Customer</option>
              </select>
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-lg btn-primary"
              onClick={() =>
                editUser(
                  userIdClicked,
                  userNameClicked,
                  userEmailClicked,
                  userCategoryClicked
                )
              }>
              Update user!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTable;
