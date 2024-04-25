const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ ab: "ass" });
});

// register
router.post("/", (req, res) => {
  try {
  } catch (error) {}
  res.json({ ab: "ass" });
});

module.exports = router;
