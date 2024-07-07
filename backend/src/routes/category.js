const express = require("express");
const userGuard = require("../middlewares/userGuard");
const adminGuard = require("../middlewares/adminGuard");
const addCategory = require("../controllers/category/addCategory");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Birds home page");
});

router.post("/", userGuard, adminGuard, addCategory);

module.exports = router;
