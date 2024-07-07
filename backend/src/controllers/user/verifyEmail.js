const bcrypt = require("bcrypt");
const User = require("../../database/models/User");
const OTP = require("../../database/models/OTP");
const errorHandler = require("../../helpers/errorHandler");
const filterUserData = require("../../helpers/filterUserData");

async function verifyEmail(req, res) {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      throw new Error("MissingField");
    }
    let userInfo = await OTP.find({
      email,
      expiredAt: { $gt: new Date() },
    }).sort({ createdAt: -1 });
    if (userInfo.length <= 0) {
      // error for otp expires
      throw new Error("OTPExpires");
    }
    // getting the first document from an array
    userInfo = userInfo[0];
    if (!(await bcrypt.compare(otp, userInfo.otp))) {
      throw new Error("IncorrectOTP");
    }
    const user = await new User({
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
    }).save();
    await OTP.deleteMany({ email: user.email });
    res.json(filterUserData(user));
  } catch (error) {
    console.log(error, "verifyEmail.js");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  if (error.message === "MissingField") {
    return {
      status: 400,
      errors: {
        msg: "Invalid Input",
      },
    };
  }
  if (error.message === "OTPExpires") {
    return {
      status: 400,
      errors: {
        msg: "Invalid Input",
        otp: "Your OTP has expires. Please request a new one.",
      },
    };
  }
  if (error.message === "IncorrectOTP") {
    return {
      status: 400,
      errors: {
        msg: "Invalid Input",
        otp: "The OTP is incorrect.",
      },
    };
  }
  if (error.code === 11000) {
    return {
      status: 400,
      errors: {
        msg: "Invalid Input",
        email: "This email is already registered",
      },
    };
  }
  return errorHandler(error);
}

module.exports = verifyEmail;
