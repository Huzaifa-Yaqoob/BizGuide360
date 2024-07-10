const Category = require("../../database/models/Category");
const errorHandler = require("../../helpers/errorHandler");

async function getCategories(req, res) {
  try {
    const categories = await Category.aggregate([
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
    res.send(categories);
  } catch (error) {
    console.log(error, "getCategories");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = getCategories;
