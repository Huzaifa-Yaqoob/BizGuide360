const User = require("../../database/models/User");
const errorHandler = require("../../helpers/errorHandler");
const { decodeToken } = require("../../helpers/jwt");
const filterUserData = require("../../helpers/filterUserData");

async function verifyToken(req, res) {
  try {
    const { token } = req.body;
    if (!token) {
      return res.json({});
    }
    const decodedData = decodeToken(token);
    const user = await User.findById(decodedData._id);
    return res.json(filterUserData(user, token));
  } catch (error) {
    console.log(error, "verifyToken");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = verifyToken;
