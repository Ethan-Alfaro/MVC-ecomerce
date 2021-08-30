const { Router } = require("express");
const router = Router();

const productModel = require("../models/product-model");

// read Data from DB
router.get("/products", async (req, res) => {
  const foundProducts = await productModel.find();
  res.json(foundProducts);
});

// Create data to DB
router.post("/product/create-product", async (req, res) => {
  const { name, description, price, stock } = req.body;
  console.log(req.body);
  newproduct = new productModel({
    name: name,
    description: description,
    price: price,
    stock: stock,
  });
  await newproduct.save();
  res.json({
    message: "Received!",
  });
});

module.exports = router;
