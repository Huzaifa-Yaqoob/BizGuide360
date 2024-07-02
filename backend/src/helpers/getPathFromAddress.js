function getPathFromAddress(mainString) {
  const startIndex = mainString.indexOf("uploads");
  if (startIndex !== -1) {
    return mainString.slice(startIndex);
  }
  throw new Error("Invalid path");
}

module.exports = getPathFromAddress;
