const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  numTransfers = 2**disksNumber - 1;   
  timeTransfers = Math.floor(numTransfers * 3600 / turnsSpeed);
  console.log(numTransfers)
  console.log(timeTransfers)
  return { turns: numTransfers, seconds: timeTransfers}
};
