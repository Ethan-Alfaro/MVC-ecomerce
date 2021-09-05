const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();

const userModel = require("../models/user-model");
const productModel = require("../models/product-model");
const { verifyAuthentication } = require("../helpers/auth");

// read DB
app.set("PUBLIC_DIR", path.join(__dirname, "/../../public"));
app.set("HTML_FILE", path.join(app.get("PUBLIC_DIR"), "index.html"));

// read Data from DB
router.get("/", async (req, res) => {
  res.sendFile(app.get("HTML_FILE"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

router.get("/get-users", async (req, res) => {
  const foundUsers = await userModel.find();
  res.json(foundUsers);
});

router.put("/edit-user/:id", async (req, res) => {
  const { id, username, email, category } = req.body;
  const editedUser = { name: username, email: email, category: category };
  await userModel.findByIdAndUpdate(id, editedUser);
  res.json({ message: "Edit user!" });
});

router.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.body;
  // await userModel.findByIdAndRemove(id);
  res.json({ message: "User Deleted!" });
});

router.put("/edit-product/:id", async (req, res) => {
  const { id, name, description, price, stock, image, category } = req.body;
  const editedProduct = {
    name: name,
    description: description,
    price: price,
    stock: stock,
    category: category,
    // img: image,
  };
  await productModel.findByIdAndUpdate(id, editedProduct);

  console.log(req.body);
  res.json({ message: "Edit product!" });
});

router.delete("/delete-product/:id", async (req, res) => {
  const { id } = req.body;
  // await productModel.findByIdAndRemove(id);
  res.json({ message: "Product deleted!" });
});

// Create data to DB
// router.post("/create-product", async (req, res) => {
//   const { name, description, price, category, stock, img } = req.body;
//   console.log(req.body);
//   newproduct = new productModel({
//     name: name,
//     description: description,
//     price: price,
//     category: category,
//     stock: stock,
//     img: img,
//   });
//   await newproduct.save();
//   res.json({
//     message: "Received!",
//   });
// });

module.exports = router;
