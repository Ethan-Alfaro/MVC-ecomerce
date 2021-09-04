const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();

const productModel = require("../models/product-model");

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

router.get("/get-products", async (req, res) => {
  const foundProducts = await productModel.find();
  res.json(foundProducts);
});

module.exports = router;
