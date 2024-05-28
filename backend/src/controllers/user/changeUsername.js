const User = require("../../database/models/User");
const errorHandler = require("../../helpers/errorHandler");

async function changeUsername(req, res) {
  try {
    console.log(req.body);
    console.log("req.body");
    res.send({ ok: "ok" });
  } catch (error) {
    console.log(error, "changeUsername");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  //   if (error.message === "invalid token") {
  //     return {
  //       status: 401,
  //       errors: {
  //         msg: "Token is invalid",
  //       },
  //     };
  //   }
  return errorHandler(error);
}

module.exports = changeUsername;
