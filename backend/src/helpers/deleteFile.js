const fs = require("fs");
const getPathFromAddress = require("./getPathFromAddress");

function deleteFile(filePath) {
  fs.unlink(getPathFromAddress(filePath), (err) => {
    if (err) {
      console.log(err);
      return err;
    }
  });
}

module.exports = deleteFile;
