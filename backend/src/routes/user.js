const express = require("express");
const router = express.Router();
const register = require("../controllers/user/register");

router.get("/", (req, res) => {
  res.json({ ab: "ass" });
});

// register
router.post("/", register);

module.exports = router;
