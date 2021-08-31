import React, { useEffect, useState } from "react";

function Products() {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("/products/get-products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductsArray(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <h1>Products page</h1>
    </>
  );
}

export default Products;
