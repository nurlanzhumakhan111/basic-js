const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  let mass = [];
  if (!Array.isArray(arr)) throw new Error("ERR!")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i < arr.length) return i++
      i++
    } else if (arr[i] === '--discard-prev') {
      if (i === 0) return i++
      mass.splice(i - 1, 1)
    } else if (arr[i] === '--double-next') {
      if (i === arr.length) return i++
      mass.push(arr[i + 1])
    } else if (arr[i] === '--double-prev') {
      if (i === 0) return i++
      mass.push(arr[i - 1])
    } else {
      mass.push(arr[i])
    }
  }
  return mass
};