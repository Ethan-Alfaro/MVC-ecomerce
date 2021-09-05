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

router.get("/get-users", async (req, res) => {
  const foundUsers = await userModel.find();
  res.json(foundUsers);
});

router.put("/edit-user/:id", async (req, res) => {
  const { id } = req.body;
  // const newTask = { title: title, description: description };
  // await Task.findByIdAndUpdate(req.params.id, newTask);
  // res.json({
  //   message: "updated!",
  // });
  console.log(id);
  res.json({ message: "Edit user!" });
});

router.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.body;
  // const newTask = { title: title, description: description };
  // await Task.findByIdAndUpdate(req.params.id, newTask);
  // res.json({
  //   message: "updated!",
  // });
  console.log(id);
  res.json({ message: "User Deleted!" });
});

router.put("/edit-product/:id", async (req, res) => {
  const { id } = req.body;
  // const newTask = { title: title, description: description };
  // await Task.findByIdAndUpdate(req.params.id, newTask);
  // res.json({
  //   message: "updated!",
  // });
  console.log(id);
  res.json({ message: "Edit product!" });
});

router.delete("/delete-product/:id", async (req, res) => {
  const { id } = req.body;
  // const newTask = { title: title, description: description };
  // await Task.findByIdAndUpdate(req.params.id, newTask);
  // res.json({
  //   message: "updated!",
  // });
  console.log(id);
  res.json({ message: "Product deleted!" });
});

module.exports = router;
