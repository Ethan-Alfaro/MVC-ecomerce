const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();

const userModel = require("../models/user-model");

// read DB
app.set("PUBLIC_DIR", path.join(__dirname, "/../../public"));
app.set("HTML_FILE", path.join(app.get("PUBLIC_DIR"), "index.html"));

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
  const { name, email, password, confirmPassword, category } = req.body;

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
        category: category,
      });
      newUser.password = await newUser.encryptPassword(password);
      console.log(newUser);
      // await newUser.save();
      res.json({ message: "User saved!" });
    }
  }
});

module.exports = router;
