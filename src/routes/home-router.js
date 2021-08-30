const { Router } = require("express");
const router = Router();

// read DB
router.get("/", async (req, res) => {
  res.json("Home page, Hi!");
});

module.exports = router;