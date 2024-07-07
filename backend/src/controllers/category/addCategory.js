const Category = require("../../database/models/Category");
const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");

async function addCategory(req, res) {
  try {
    const { category } = trimInputs(req.body);
    await new Category({ label: category }).save();
    res.send({ success: true });
  } catch (error) {
    console.log(error, "changeUsername");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  if (error.code === 11000) {
    return {
      status: 400,
      errors: {
        msg: "Invalid Input",
        category: "This category has already been included",
      },
    };
  }
  return errorHandler(error);
}

module.exports = addCategory;
