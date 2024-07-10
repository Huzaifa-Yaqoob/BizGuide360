const Area = require("../../database/models/Area");
const errorHandler = require("../../helpers/errorHandler");

async function getAreas(req, res) {
  try {
    const area = await Area.aggregate([
      {
        $project: {
          value: "$_id",
          count: 1,
          label: 1,
          _id: 0,
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);
    res.send(area);
  } catch (error) {
    console.log(error, "getCategories");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = getAreas;
