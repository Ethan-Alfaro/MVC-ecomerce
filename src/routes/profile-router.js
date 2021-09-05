const { Router } = require("express");
const router = Router();
const express = require("express");
const path = require("path");
const app = express();

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

router.get("/logout", (req, res) => {
  // req.logOut();
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
