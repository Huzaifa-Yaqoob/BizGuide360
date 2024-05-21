const { generateToken } = require("./jwt");

function filterUserData(user, token = null) {
  let { _id, email, username, avatarUrl, role } = user;
  userData = { email, username, avatarUrl, role };
  token = token === null ? generateToken({ _id, role }) : token;
  return { userData, token };
}

module.exports = filterUserData;
