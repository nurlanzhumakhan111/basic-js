const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!"
  if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error("ERROR!")
  let month = date.getMonth()
  let result;
  if (month === 11 || month === 0 || month === 1) {
    result = 'winter'
  } else if (month === 2 || month === 3 || month === 4) {
    result = 'spring'
  } else if (month === 5 || month === 6 || month === 7) {
    result = 'summer'
  } else if (month === 8 || month === 9 || month === 10) {
    result = 'autumn'
  }
  return result
};