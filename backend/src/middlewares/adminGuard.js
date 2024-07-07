const errorHandler = require("../helpers/errorHandler");

async function adminGuard(req, res, next) {
  try {
    const userData = req.userData;
    if (userData.role !== "admin") {
      throw new Error("INVALID_ACCESS");
    } else {
      next();
    }
  } catch (error) {
    console.log(error, "adminGuard");
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
  return errorHandler(error);
}

module.exports = adminGuard;
