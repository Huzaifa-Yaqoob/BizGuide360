const User = require("../../database/models/User");
const deleteFile = require("../../helpers/deleteFile");
const errorHandler = require("../../helpers/errorHandler");

async function removeAvatar(req, res) {
  try {
    const _id = req.userData._id;
    const user = await User.findById(_id);

    if (!user.avatar) {
      res.send({ ok: true });
    } else {
      deleteFile(user.avatar);
      user.avatar = undefined;
      await user.save();
      console.log(user);
      res.send({ ok: true });
    }
  } catch (error) {
    console.log(error, "removeAvatar");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = removeAvatar;
