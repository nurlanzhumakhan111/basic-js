const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!(Array.isArray(arr)) || arr.length < 1) return false;
  let mass = []
  arr.forEach(elem => {
    if (typeof (elem) === 'string') {
      mass.push(elem.trim()[0].toUpperCase())
    }
  })
  return mass.sort().join('')
};