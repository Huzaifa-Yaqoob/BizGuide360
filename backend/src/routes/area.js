const express = require("express");
const userGuard = require("../middlewares/userGuard");
const adminGuard = require("../middlewares/adminGuard");
const addArea = require("../controllers/area/addArea");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Birds home page");
});

router.post("/", userGuard, adminGuard, addArea);

module.exports = router;
