export default function (obj) {
  // Check if the object has no own enumerable properties
  return Object.keys(obj).length === 0;
}
