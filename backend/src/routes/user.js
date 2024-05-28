const express = require("express");
const register = require("../controllers/user/register");
const logIn = require("../controllers/user/login");
const verifyEmail = require("../controllers/user/verifyEmail");
const resendOtp = require("../controllers/user/resendOtp");
const verifyToken = require("../controllers/user/verifyToken");
const changeUsername = require("../controllers/user/changeUsername");
const userGuard = require("../middlewares/userGuard");

const router = express.Router();

// register a user
router.post("/", register);

// login a user
router.post("/login/", logIn);

router.post("/verify-email/", verifyEmail);

router.post("/resend-otp/", resendOtp);

/* this route is used to verify a token when first time user open our website frontend will send us token from localStorage to this route it will return data if router is valid else it will return token is expired or token not found*/
router.post("/verify-token/", verifyToken);

router.patch("/change-username/", userGuard, changeUsername);

module.exports = router;
