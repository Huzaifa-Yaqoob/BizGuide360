const User = require("../../database/models/User");
const errorHandler = require("../../helpers/errorHandler");
const verifyPassword = require("../../helpers/verifyPassword");
const trimInputs = require("../../helpers/trimInputs");
const { generateToken } = require("../../helpers/jwt");

async function register(req, res) {
  try {
    let token = {},
      userData = {};
    const { username, email, password } = trimInputs(req.body);
    if (!verifyPassword(password)) {
      throw new Error("Invalid Password");
    }
    const newUser = new User({ username, email, password });

    if ((await newUser.validate()) === undefined) {
      let data = await newUser.save();
      let { _id, email, username, avatarUrl, role } = data;
      userData = { email, username, avatarUrl, role };
      token = generateToken({ _id, role });
    }
    res.json({ success: true, token, userData });
  } catch (error) {
    console.log(error, "register.js");
    const errRes = customErrorChecker(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorChecker(error) {
  if (error.message === "Invalid Password") {
    return {
      status: 400,
      errors: {
        msg: "Invalid Input",
        password: "Password must be string between 8 to 64 characters",
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

module.exports = register;
