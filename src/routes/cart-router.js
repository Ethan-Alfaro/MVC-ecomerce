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
router.get("/", verifyAuthentication, async (req, res) => {
  res.sendFile(app.get("HTML_FILE"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
  
});

router.get("/get-user/:id", verifyAuthentication, async (req, res) => {
  const foundUser = await userModel.findById(req.params.id);
  res.json(foundUser);
});

// read Data from DB
router.post("/add-product/:id", verifyAuthentication, async (req, res) => {
  const foundProduct = await productModel.findById(req.params.id);
  console.log(foundProduct);
  await userModel.findByIdAndUpdate(req.user._id, {
    $push: { cart: foundProduct },
  });
  res.redirect("/products");
});

module.exports = router;
