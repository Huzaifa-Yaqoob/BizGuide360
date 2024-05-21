const bcrypt = require("bcrypt");
const User = require("../../database/models/User");
const errorHandler = require("../../helpers/errorHandler");
const { generateToken } = require("../../helpers/jwt");
const filterUserData = require("../../helpers/filterUserData");

async function logIn(req, res) {
  try {
    const { email: mail, password } = req.body;
    const user = await User.findOne({ email: mail });
    if (!user) {
      // error for email not found
      throw new Error("Email00");
    }
    if (!(await bcrypt.compare(password, user.password))) {
      // error for incorrect password
      throw new Error("Password00");
    }
    res.json(filterUserData(user));
  } catch (error) {
    console.log(error, "login.js");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  if (error.message === "Email00") {
    return {
      status: 400,
      errors: {
        msg: "Invalid Input",
        email: "Email not found",
      },
    };
  }
  if (error.message === "Password00") {
    return {
      status: 400,
      errors: {
        msg: "Invalid Input",
        password: "Incorrect password",
      },
    };
  }
  return errorHandler(error);
}

module.exports = logIn;
