const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");

const userModel = require("../models/user-model");
const productModel = require("../models/product-model");
const { verifyAuthentication } = require("../helpers/auth");

// read DB
app.set("PUBLIC_DIR", path.join(__dirname, "/../../public"));
app.set("HTML_FILE", path.join(app.get("PUBLIC_DIR"), "index.html"));

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: (req, file, cb) => {
    cb(null, app.get("PUBLIC_DIR") + "/assets/products/guitars/");
  },
  filename: (req, file, cb) => {
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
    cb(
      null,
      // file.fieldname + "_" + Date.now() + path.extname(file.originalname)
      file.originalname
    );
    console.log(file);
  },
});

const upload = multer({
  storage: imageStorage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

// read Data from DB
router.get("/", verifyAuthentication, async (req, res) => {
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

router.put("/edit-user/:id", verifyAuthentication, async (req, res) => {
  const { id, username, email, category } = req.body;
  const editedUser = { name: username, email: email, category: category };
  await userModel.findByIdAndUpdate(id, editedUser);
  res.json({ message: "Edit user!" });
});

router.delete("/delete-user/:id", verifyAuthentication, async (req, res) => {
  const { id } = req.body;
  await userModel.findByIdAndRemove(id);
  res.json({ message: "User Deleted!" });
});

router.put("/edit-product/:id", verifyAuthentication, async (req, res) => {
  const { id, name, description, price, stock, image, category } = req.body;
  // console.log(req.body);

  const editedProduct = {
    name: name,
    description: description,
    price: price,
    stock: stock,
    category: category,
    // img: image,
  };
  await productModel.findByIdAndUpdate(id, editedProduct);

  res.json({ message: "Edit product!" });
});

router.delete("/delete-product/:id", verifyAuthentication, async (req, res) => {
  const { id } = req.body;
  await productModel.findByIdAndRemove(id);
  res.json({ message: "Product deleted!" });
});

// Create data to DB
router.post("/create-product", verifyAuthentication, async (req, res) => {
  const { name, description, price, category, stock, image } = req.body;
  // console.log(req.body);
  newproduct = new productModel({
    name: name,
    description: description,
    price: price,
    category: category,
    stock: stock,
    img: image,
  });
  await newproduct.save();
  res.json({
    message: "Product Created!!",
  });
});

router.post(
  "/upload-image",
  verifyAuthentication,
  upload.single("productImage"),
  async (req, res) => {
    res.json({
      message: "Image Saved!",
    });
  }
);

module.exports = router;
