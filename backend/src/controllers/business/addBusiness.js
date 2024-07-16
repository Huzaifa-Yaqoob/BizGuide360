const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");
const Business = require("../../database/models/Business");

async function addBusiness(req, res) {
  try {
    const business = trimInputs(req.body);
    const newBusiness = await Business({
      owner: req.userData._id,
      title: business.title,
      category: business.category,
      area: business.area,
    }).save();
    console.log(newBusiness);
    res.send({ ok: true });
  } catch (error) {
    console.log(error, "addBusiness");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  try {
    return errorHandler(error);
  } catch (error) {
    return errorHandler(error);
  }
}

module.exports = addBusiness;
