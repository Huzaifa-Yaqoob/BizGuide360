const multer = require("multer");
const User = require("../../database/models/User");
const errorHandler = require("../../helpers/errorHandler");
const upload = require("../../helpers/uploadMulter");
const deleteFile = require("../../helpers/deleteFile");

let uploadSingle = upload.single("avatar");

const url = process.env.BIZGUIDE360_API;

async function changeAvatar(req, res) {
  try {
    const _id = req.userData._id;

    uploadSingle(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ msg: err.message });
      } else if (err) {
        return res.status(400).json({ msg: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ msg: "File not saved" });
      }

      const result = await User.findByIdAndUpdate(_id, {
        avatar: url + req.file.destination + req.file.filename,
      });

      // Delete previous avatar
      if (result && result.avatar) {
        await deleteFile(result.avatar);
      }

      res.send({ avatar: url + req.file.destination + req.file.filename });
    });
  } catch (error) {
    console.log(error, "changeAvatar");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = changeAvatar;
