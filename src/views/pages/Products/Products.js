import React, { useEffect, useState } from "react";
import Card from '../../components/ProductCard/card.js';
import './products.css'
function Products() {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("/products/")
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
    <div className="wrap">
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default Products;
