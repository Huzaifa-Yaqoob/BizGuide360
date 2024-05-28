const User = require("../../database/models/User");
const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");

async function changeUsername(req, res) {
  try {
    const { username } = trimInputs(req.body);
    const { _id } = req.userData;
    const user = await User.findByIdAndUpdate(
      _id,
      { username },
      { new: true, runValidators: true }
    );
    if (!user) {
      throw new Error("NOT_FOUND");
    }

    res.send({ username });
  } catch (error) {
    console.log(error, "changeUsername");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  if (error.message === "NOT_FOUND") {
    return {
      status: 401,
      errors: {
        msg: "User not found.",
      },
    };
  }
  return errorHandler(error);
}

module.exports = changeUsername;
