import React, { useEffect, useState } from "react";
import { Delete, Edit, FiberNew } from "@material-ui/icons";
import "./producttable.css";

function ProductTable() {
  const [productsArray, setProductsArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchProducts();
    return () => {
      setProductsArray([]);
    };
  }, []);

  function fetchProducts() {
    fetch("/products/get-products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductsArray(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function deleteProduct(id) {
    fetch(`/dashboard/delete-product/${id}`, {
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
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function editProduct(id) {
    fetch(`/dashboard/edit-product/${id}`, {
      method: "PUT",
      body: JSON.stringify({ id: id }),
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Image</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
            <th scope="col">
              <FiberNew />
            </th>
          </tr>
        </thead>

        {isLoaded && (
          <tbody>
            {productsArray.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}&nbsp;€</td>
                <td>{product.stock}&nbsp;unds</td>
                <td>
                  <img
                    className="productTableImg"
                    src={`./assets/products/guitars/${product.img}`}
                  />
                </td>
                <td>
                  <button
                    className="btn"
                    onClick={() => deleteProduct(product._id)}>
                    <Delete className="deleteProduct" />
                  </button>
                </td>
                <td>
                  <button className="btn" onClick={() => editProduct(product._id)}>
                    <Edit className="editProduct" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default ProductTable;
