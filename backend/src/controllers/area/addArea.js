const Area = require("../../database/models/Area");
const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");

async function addArea(req, res) {
  try {
    const { area } = trimInputs(req.body);
    await new Area({ label: area }).save();
    res.send({ success: true });
  } catch (error) {
    console.log(error, "addArea");
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
        area: "This area has already been included",
      },
    };
  }
  return errorHandler(error);
}

module.exports = addArea;
