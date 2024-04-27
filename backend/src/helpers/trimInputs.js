function trimInputs(obj) {
  const trimmedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      trimmedObj[key] =
        typeof obj[key] === "string" ? obj[key].trim() : obj[key];
    }
  }
  return trimmedObj;
}

module.exports = trimInputs;
