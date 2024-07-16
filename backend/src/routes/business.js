const addBusiness = require("../controllers/business/addBusiness");
const express = require("express");
const router = express.Router();
const userGuard = require("../middlewares/userGuard");

router.get("/", (req, res) => {
  res.send("Birds home page");
});

router.post("/", userGuard, addBusiness);

module.exports = router;
