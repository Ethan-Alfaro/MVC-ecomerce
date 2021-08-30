const { Router } = require("express");
const router = Router();

// read DB
router.get("/", async (req, res) => {
  res.json("You requested Profile!");
});

module.exports = router;