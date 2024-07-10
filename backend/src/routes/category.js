const express = require("express");
const userGuard = require("../middlewares/userGuard");
const adminGuard = require("../middlewares/adminGuard");
const addCategory = require("../controllers/category/addCategory");
const getCategories = require("../controllers/category/getCategories");

const router = express.Router();

router.get("/", getCategories);

router.post("/", userGuard, adminGuard, addCategory);

module.exports = router;
