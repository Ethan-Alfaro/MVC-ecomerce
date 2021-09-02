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
  const {
    userName,
    userEmail,
    userPassword,
    userConfirmPassword,
    userCategory,
  } = req.body;
  const errors = [];
  console.log(req.body);
  if (userName.length <= 0 || userName.length == "") {
    errors.push({ text: "Please insert your Name!" });
  }
  if (userEmail <= 0 || userEmail.length == "") {
    errors.push({ text: "Please Insert an Email!" });
  }
  if (userPassword <= 0 || userPassword.length == "") {
    errors.push({ text: "you must write a password!" });
  }
  if (userPassword != userConfirmPassword) {
    errors.push({ text: "Pasword do not match!" });
  }
  if (userPassword.length < 4) {
    errors.push({ text: "Password must be at least 4 characters" });
  }
  if (errors.length > 0) {
    res.redirect("/", {message: "There are errors!"});
    // res.render("/", {
    //   errors,
    //   userName,
    //   userEmail,
    //   userPassword,
    //   userConfirmPassword,
    //   userCategory
    // });
  } else {
    // primero, buscamos si existe el email recogido desde req.body y lo comparamos con algun email que ya exista en la base de datos.
    // si no existe ese email, procedemos a guardar el nuevo usuario
    const emailFound = await userModel.findOne({ email: userEmail });

    if (emailFound) {
      res.redirect("/", {message: "Email already used!"});
      // req.flash("error_msg", "Email already used!");
    }

    const newUser = new userModel({
      name: userName,
      email: userEmail,
      password: userPassword,
      category: userCategory,
    });
    newUser.password = await newUser.encryptPassword(userPassword);
    await newUser.save();
    // req.flash("succes_msg", "Account succesfully saved!");
    res.redirect("/", {message: "Account succesfully saved!"});
  }
});

module.exports = router;
