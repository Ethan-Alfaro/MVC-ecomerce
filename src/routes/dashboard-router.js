const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();

const userModel = require("../models/user-model");
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

router.get("/get-users", verifyAuthentication, async (req, res) => {
  const foundUsers = await userModel.find();
  res.json(foundUsers);
});

// Create data to DB
// router.post("/create-product", async (req, res) => {
//   const { name, description, price, stock, img } = req.body;
//   console.log(req.body);
//   newproduct = new productModel({
//     name: name,
//     description: description,
//     price: price,
//     stock: stock,
//     img: img,
//   });
//   await newproduct.save();
//   res.json({
//     message: "Received!",
//   });
// });

module.exports = router;
