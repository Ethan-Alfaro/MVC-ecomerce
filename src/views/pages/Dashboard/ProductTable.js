import React, { useEffect, useState } from "react";
import { Delete, Edit, FiberNew } from "@material-ui/icons";
import "./producttable.css";

function ProductTable() {
  const [productsArray, setProductsArray] = useState([]);
  const [productIdClicked, setProductIdClicked] = useState("");
  const [productNameClicked, setProductNameClicked] = useState("");
  const [productDescriptionClicked, setProductDescriptionClicked] =
    useState("");
  const [productPriceClicked, setProductPriceClicked] = useState("");
  const [productStockClicked, setProductStockClicked] = useState("");
  const [productCategoryClicked, setProductCategoryClicked] = useState("");
  const [productImageClicked, setProductImageClicked] = useState("");

  const [newProductName, setNewProductName] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductStock, setNewProductStock] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("Guitar");
  const [newProductImage, setNewProductImage] = useState();

  // Dispatchers
  const [isSelected, setISelected] = useState(false);
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

  function editProduct(
    id,
    newProductName,
    newProductDescription,
    newProductPrice,
    newProductStock,
    newProductImage,
    newProductCategory = "Guitar"
  ) {
    fetch(`/dashboard/edit-product/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: newProductName,
        description: newProductDescription,
        price: newProductPrice,
        stock: newProductStock,
        image: newProductImage,
        category: newProductCategory,
      }),
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

  const changeHandler = (event) => {
    setNewProductImage(event.target.files[0]);
    setISelected(true);
  };

  function handleNewProduct() {
    // Create data from new product
    fetch("/dashboard/create-product", {
      method: "POST",
      body: JSON.stringify({
        name: newProductName,
        description: newProductDescription,
        price: newProductPrice,
        stock: newProductStock,
        image: newProductImage.name,
        category: newProductCategory,
      }),
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

    // Upload foto to server
    const formData = new FormData();
    formData.append("productImage", newProductImage);

    fetch("/dashboard/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <table className="table table-secondary">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Image</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
            <th scope="col">
              <button
                className="btn btn-light"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#newProductCanvas"
                aria-controls="newProductCanvas">
                <FiberNew />
              </button>
            </th>
          </tr>
        </thead>

        {isLoaded && (
          <tbody>
            {productsArray.map((product) => (
              <tr key={product._id}>
                {/* <td>{product._id}</td> */}
                <td>{product.name}</td>
                <td>{product.category}</td>
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
                    className="btn btn-light"
                    onClick={() => deleteProduct(product._id)}>
                    <Delete className="deleteProduct" />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-light"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#openProductCanvas"
                    aria-controls="openProductCanvas"
                    onClick={() => {
                      setProductIdClicked(product._id);
                      setProductNameClicked(product.name);
                      setProductDescriptionClicked(product.description);
                      setProductPriceClicked(product.price);
                      setProductStockClicked(product.stock);
                      setProductImageClicked(product.img);
                      setProductCategoryClicked(product.category);
                    }}>
                    <Edit className="editProduct" />
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
        id="openProductCanvas"
        aria-labelledby="openProductCanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Edit product
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
              <label htmlFor="productName" className="form-label mt-4">
                Product name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Enter new name"
                value={productNameClicked}
                onChange={(event) => {
                  return setProductNameClicked(event.target.value);
                }}
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="productDescription" className="form-label mt-4">
                Description:
              </label>
              <textarea
                className="form-control"
                id="productDescription"
                onChange={(event) => {
                  return setProductDescriptionClicked(event.target.value);
                }}
                rows="5"
                value={productDescriptionClicked}></textarea>
            </div>
            <div className="form-group w-100">
              <label htmlFor="productPrice" className="form-label mt-4">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                placeholder="Product price"
                value={productPriceClicked}
                onChange={(event) => {
                  return setProductPriceClicked(event.target.value);
                }}
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="productStock" className="form-label mt-4">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                id="productStock"
                placeholder="Initial stock"
                value={productStockClicked}
                onChange={(event) => {
                  return setProductStockClicked(event.target.value);
                }}
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="productCategory" className="form-label mt-4">
                Product category
              </label>
              <select
                className="form-select"
                id="productCategory"
                onChange={(event) => {
                  return setProductCategoryClicked(event.target.value);
                }}
                value={productCategoryClicked}>
                <option value="Guitar">Guitar</option>
                <option value="Ukelele">Ukelele</option>
                <option value="Bass guitar">Bass guitar</option>
              </select>
            </div>
            {/* <div className="form-group w-100">
              <label htmlFor="productFoto" className="form-label mt-4">
                Product foto
              </label>
              <input
                onChange={(event) => {
                  return setProductImageClicked(event.target.files[0]);
                }}
                className="form-control"
                type="file"
                id="formFile"
                value={productImageClicked}
              />
            </div> */}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-lg btn-primary"
              onClick={() =>
                editProduct(
                  productIdClicked,
                  productNameClicked,
                  productDescriptionClicked,
                  productPriceClicked,
                  productStockClicked,
                  productImageClicked,
                  productCategoryClicked
                )
              }>
              Update Product!
            </button>
          </div>
        </div>
      </section>
      <section
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="newProductCanvas"
        aria-labelledby="newProductCanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            New Product
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
              <label htmlFor="productName" className="form-label mt-4">
                Product name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                aria-describedby="emailHelp"
                placeholder="Enter product name"
                value={newProductName}
                onChange={(event) => {
                  return setNewProductName(event.target.value);
                }}
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="productDescription" className="form-label mt-4">
                Description:
              </label>
              <textarea
                className="form-control"
                id="productDescription"
                onChange={(event) => {
                  return setNewProductDescription(event.target.value);
                }}
                rows="5"
                value={newProductDescription}></textarea>
            </div>
            <div className="form-group w-100">
              <label htmlFor="productPrice" className="form-label mt-4">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                placeholder="Product price"
                value={newProductPrice}
                onChange={(event) => {
                  return setNewProductPrice(event.target.value);
                }}
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="productStock" className="form-label mt-4">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                id="productStock"
                placeholder="Initial stock"
                value={newProductStock}
                onChange={(event) => {
                  return setNewProductStock(event.target.value);
                }}
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="productCategory" className="form-label mt-4">
                Product category
              </label>
              <select
                className="form-select"
                id="productCategory"
                onChange={(event) => {
                  return setNewProductCategory(event.target.value);
                }}
                value={newProductCategory}>
                <option value="Guitar">Guitar</option>
                <option value="Ukelele">Ukelele</option>
                <option value="Bass guitar">Bass guitar</option>
              </select>
            </div>
            <div className="form-group w-100">
              <label htmlFor="productFoto" className="form-label mt-4">
                Product foto
              </label>
              <input
                name="productFoto"
                onChange={changeHandler}
                className="form-control"
                type="file"
                id="formFile"
              />
            </div>
            {isSelected ? (
              <div className="mt-3 mb-3">
                <p>Filename: {newProductImage.name}</p>
                <p>Filetype: {newProductImage.type}</p>
                <p>Size in bytes: {newProductImage.size}</p>
                <p>
                  lastModifiedDate:{" "}
                  {newProductImage.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
            <div className="d-grid gap-2 mt-3">
              <button
                type="button"
                className="btn btn-lg btn-primary"
                onClick={() => handleNewProduct()}>
                Create new product!
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductTable;
