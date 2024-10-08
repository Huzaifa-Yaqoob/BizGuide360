import isEmptyObject from "./isEmptyObject";

export function getCachedData(key) {
  const cachedData = localStorage.getItem(key);

  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    if (Date.now() - parsedData.timestamp < 5 * 60 * 1000) {
      return parsedData.data || false;
    } else {
      localStorage.removeItem(key);
    }
  }
  return false;
}

export function setCachedData(key, data) {
  if (data?.length === 0 || isEmptyObject(data)) {
    return;
  }
  localStorage.setItem(
    key,
    JSON.stringify({
      data,
      timestamp: Date.now(),
    })
  );
}

export function removeCachedData(key) {
  localStorage.removeItem(key);
}
