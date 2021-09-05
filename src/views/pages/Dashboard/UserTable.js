import React, { useEffect, useState } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [productsArray, setProductsArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchProducts();
    return () => {
      setUsers([]);
      setProductsArray([]);
    };
  }, []);

  function fetchUsers() {
    fetch("/dashboard/get-users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setUsers(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function fetchProducts() {
    fetch("/products/get-products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductsArray(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <h1>Pagina donde se renderiza la tabla</h1>
      {isLoaded && (
        <div>
          {users.map((user) => (
            <p>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserTable;
