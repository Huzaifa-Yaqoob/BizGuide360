const User = require("../../database/models/User");
const errorHandler = require("../../helpers/errorHandler");
const { decodeToken } = require("../../helpers/jwt");
const filterUserData = require("../../helpers/filterUserData");

async function verifyToken(req, res) {
  try {
    const { token } = req.body;
    if (!token) {
      res.json({});
    }
    const decodedData = decodeToken(token);
    const user = await User.findById(decodedData._id);
    res.json(filterUserData(user, token));
  } catch (error) {
    console.log(error, "verifyToken");
    console.log(error.message);
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  if (error.message === "invalid token") {
    return {
      status: 401,
      errors: {
        msg: "Token is invalid",
      },
    };
  }
  if (error.message === "jwt expired") {
    return {
      status: 401,
      errors: {
        msg: "Your token has expired log in again",
      },
    };
  }
  return errorHandler(error);
}

module.exports = verifyToken;
