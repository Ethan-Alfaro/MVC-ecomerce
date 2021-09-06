const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");

const userModel = require("../models/user-model");

// read DB
app.set("PUBLIC_DIR", path.join(__dirname, "/../../public"));
app.set("HTML_FILE", path.join(app.get("PUBLIC_DIR"), "index.html"));

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: (req, file, cb) => {
    cb(null, app.get("PUBLIC_DIR") + "/assets/user_pictures/");
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

// Sending the main page
router.get("/", async (req, res) => {
  res.sendFile(app.get("HTML_FILE"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// create data to DB
router.post("/register-user", async (req, res) => {
  const { name, email, image, password, confirmPassword, category } = req.body;

  const errors = [];

  if (name.length <= 0 || name.length == "") {
    errors.push("Please insert your Name!");
  }
  if (email <= 0 || email.length == "") {
    errors.push("Please Insert an Email!");
  }
  if (password <= 0 || password.length == "") {
    errors.push("you must write a password!");
  }
  if (password != confirmPassword) {
    errors.push("Pasword do not match!");
  }
  if (password.length < 4) {
    errors.push("Password must be at least 4 characters");
  }
  if (errors.length > 0) {
    res.json({ message: "Hay errores!", errors: errors });
  } else {
    // primero, buscamos si existe el email recogido desde req.body y lo comparamos con algun email que ya exista en la base de datos.
    // si no existe ese email, procedemos a guardar el nuevo usuario
    const emailFound = await userModel.findOne({ email: email });
    if (emailFound) {
      res.json({ message: "Email already used!" });
    } else {
      const newUser = new userModel({
        name: name,
        email: email,
        password: password,
        image: image,
        category: category,
      });
      newUser.password = await newUser.encryptPassword(password);
      console.log(newUser);
      await newUser.save();
      res.json({ message: "User saved!" });
    }
  }
});

router.post("/upload-image", upload.single("userImage"), async (req, res) => {
  res.json({
    message: "Image Saved!",
  });
});

module.exports = router;
