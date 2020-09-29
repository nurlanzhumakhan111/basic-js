const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cat) {
  let arr = []
  cat.map(elem => {
    arr.push(...elem)
  })
  let result = 0;
  arr.forEach(elem => {
    if (elem === '^^') {
      result++
    }
  })
  return result;
};