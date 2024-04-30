const express = require("express");
const register = require("../controllers/user/register");
const logIn = require("../controllers/user/login");
const verifyEmail = require("../controllers/user/verifyEmail");

const router = express.Router();

// register a user
router.post("/", register);

// login a user
router.post("/login/", logIn);

router.post("/verify-email/", verifyEmail);

module.exports = router;
