const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_KEY;

function generateToken(payload, expiresIn = "3d") {
  return jwt.sign(payload, secretKey, { expiresIn });
}

function decodeToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { generateToken, decodeToken };
