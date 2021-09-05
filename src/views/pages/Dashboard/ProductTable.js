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
                  <Delete className="deleteProduct" />
                </td>
                <td>
                  <Edit className="editProduct" />
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
