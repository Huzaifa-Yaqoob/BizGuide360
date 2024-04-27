const express = require("express");
const register = require("../controllers/user/register");
const logIn = require("../controllers/user/login");

const router = express.Router();

// register a user
router.post("/", register);

// login a user
router.post("/login/", logIn);

module.exports = router;
