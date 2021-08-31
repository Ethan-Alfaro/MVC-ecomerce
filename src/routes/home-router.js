const express = require("express");
const { Router } = require("express");
const path = require("path");
const router = Router();
const app = express();

app.set("DIST_DIR", path.join(__dirname, "/../views/dist"));
app.set("HTML_FILE", path.join(app.get("DIST_DIR"), "index.html"));

// read DB
router.get("/", async (req, res) => {
  res.sendFile(app.get("HTML_FILE"), function(err){
    if(err){
       res.status(500).send(err);
    }
 });
});

module.exports = router;