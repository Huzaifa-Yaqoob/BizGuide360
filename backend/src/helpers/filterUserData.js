const { generateToken } = require("./jwt");

function filterUserData(user, token = null) {
  let { _id, email, username, avatar, role } = user;
  userData = { email, username, avatar, role };
  token = token === null ? generateToken({ _id, role }) : token;
  return { userData, token };
}

module.exports = filterUserData;
