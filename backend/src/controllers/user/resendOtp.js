const bcrypt = require("bcrypt");
const trimInputs = require("../../helpers/trimInputs");
const OTP = require("../../database/models/OTP");
const errorHandler = require("../../helpers/errorHandler");
const { sendOTP, generateOTP } = require("../../helpers/otp");

async function resendOtp(req, res) {
  try {
    const { email } = trimInputs(req.body);
    let user = await OTP.find({ email, expiredAt: { $gt: new Date() } }).sort({
      createdAt: -1,
    });
    if (user.length === 0) {
      throw new Error("NOT_FOUND");
    }
    user = user[0];
    const salt = await bcrypt.genSalt(10);
    let otpp = generateOTP();
    const otp = await bcrypt.hash(otpp, salt);
    await OTP.updateOne(
      { _id: user._id },
      { otp, expiredAt: new Date(Date.now() + 2 * 60 * 60 * 1000) }
    );
    await sendOTP(email, otpp);
    res.json({ email, status: "pending" });
  } catch (error) {
    console.log(error, "resendOtp");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  if (error.message === "NOT_FOUND") {
    return {
      status: 404,
      errors: { msg: "Invalid Inputs: Email is not found" },
    };
  }
  return errorHandler(error);
}

module.exports = resendOtp;
