export function storeInLocal(data) {
  if (!data) {
    return;
  }
  const { token } = data;
  if (!token) {
    throw new Error("token is required");
  }
  localStorage.setItem("token", token);
}
