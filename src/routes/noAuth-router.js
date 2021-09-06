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

// read Data from DB
router.post("/foto", async (req, res) => {
});


module.exports = router;