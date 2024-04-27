function verifyPassword(password) {
  if (!typeof password === "string") return false;
  if (password.length < 8 || password.length > 64) return false;
  return true;
}

module.exports = verifyPassword;
