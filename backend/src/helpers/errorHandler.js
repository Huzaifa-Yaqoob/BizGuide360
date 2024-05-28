function errorHandler(error) {
  if (error.message.includes("validation failed")) {
    const errors = {};
    const err = Object.values(error.errors);
    err.forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
    return { status: 400, errors: { msg: "Invalid Inputs", ...errors } };
  }
  if (error.message === "invalid token") {
    return {
      status: 401,
      errors: {
        msg: "Token is invalid",
      },
    };
  }
  if (error.message === "jwt expired") {
    return {
      status: 401,
      errors: {
        msg: "Your token has expired log in again",
      },
    };
  }
  return { status: 500, errors: { msg: "Internal Server Error" } };
}

module.exports = errorHandler;
