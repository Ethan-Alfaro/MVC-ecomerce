const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();

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