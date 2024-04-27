function errorHandler(error) {
  if (error.message.includes("validation failed")) {
    const errors = {};
    const err = Object.values(error.errors);
    err.forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
    return { status: 400, errors: { msg: "Invalid Inputs", ...errors } };
  }
  return { status: 500, errors: { msg: "Internal Server Error" } };
}

module.exports = errorHandler;
