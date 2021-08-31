const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();

const productModel = require("../models/product-model");

app.set("DIST_DIR", path.join(__dirname, "/../views/dist"));
app.set("HTML_FILE", path.join(app.get("DIST_DIR"), "index.html"));

// read Data from DB
router.get("/", async (req, res) => {
  res.sendFile(app.get("HTML_FILE"), function(err){
    if(err){
       res.status(500).send(err);
    }
 });
});

router.get("/get-products", async (req, res) => {
  const foundProducts = await productModel.find();
  res.json(foundProducts);
});

// Create data to DB
router.post("/create-product", async (req, res) => {
  const { name, description, price, stock, img } = req.body;
  console.log(req.body);
  newproduct = new productModel({
    name: name,
    description: description,
    price: price,
    stock: stock,
    img: img,
  });
  await newproduct.save();
  res.json({
    message: "Received!",
  });
});

module.exports = router;
