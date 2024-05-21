export function errorHandler(error) {
  if (error.response.data) {
    return error.response.data;
  } else if (error.message) {
    return { msg: error.message };
  } else {
    return { msg: "Sorry an unexpected error occurred." };
  }
}
