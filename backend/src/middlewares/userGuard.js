const { decodeToken } = require("../helpers/jwt");
const errorHandler = require("../helpers/errorHandler");

async function userGuard(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      throw new Error("INVALID_ACCESS");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new Error("INVALID_PATTERN");
    }

    const userData = decodeToken(token);

    req.userData = userData;
    next();
  } catch (error) {
    console.log(error, "userGuard");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  if (error.message === "INVALID_ACCESS") {
    return {
      status: 401,
      errors: {
        msg: "Sorry, you can`t access this protected route.",
      },
    };
  }
  if (error.message === "INVALID_PATTERN") {
    return {
      status: 401,
      errors: {
        msg: "Token pattern is invalid.",
      },
    };
  }
  return errorHandler(error);
}

module.exports = userGuard;
