const express = require("express");
const { Router } = require("express");
const path = require("path");
const router = Router();
const app = express();

app.set("PUBLIC_DIR", path.join(__dirname, "/../../public"));
app.set("HTML_FILE", path.join(app.get("PUBLIC_DIR"), "index.html"));

// read DB
router.get("/", async (req, res) => {
  res.sendFile(app.get("HTML_FILE"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

router.get("/get-user", (req, res) => {
  // console.log(req.user);
  if (req.user) {
    const { name, email, category } = req.user;
    const user = { name: name, email: email, category: category };
    res.json(user);
  } else {
    res.json({ message: "You are not logged in" });
  }
  // if (req.user) {
  //   db.Favorite.find({ uid: req.user._id }).then(user => {
  //     return res.status(200).json(user)
  //   })
  // } else {
  //   return res.status(403).json({ message: 'you are not logged in' })
  // }
});

module.exports = router;
