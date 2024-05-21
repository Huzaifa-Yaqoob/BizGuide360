const User = require("../../database/models/User");
const OTP = require("../../database/models/OTP");
const errorHandler = require("../../helpers/errorHandler");
const verifyPassword = require("../../helpers/verifyPassword");
const trimInputs = require("../../helpers/trimInputs");
const { sendOTP, generateOTP } = require("../../helpers/otp");

async function register(req, res) {
  try {
    const { username, email, password } = trimInputs(req.body);

    // checking if password is valid
    if (!verifyPassword(password)) {
      throw new Error("Invalid Password");
    }

    // checking if user already exists
    if (!(await User.find({ email })).length === 0) {
      throw new Error("Email_Exists");
    } else {
      const otp = generateOTP();
      // saving userData in otp schema
      await new OTP({ username, email, password, otp }).save();
      sendOTP(email, otp);
      res.json({ email, status: "pending" });
    }
  } catch (error) {
    console.log(error, "register.js");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  if (error.message === "Invalid Password") {
    return {
      status: 400,
      errors: {
        msg: "Invalid Input",
        password: "Password must be string between 8 to 64 characters",
      },
    };
  }
  if (error.message === "Email_Exists") {
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

module.exports = register;
