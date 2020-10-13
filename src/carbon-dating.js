const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(numActivity) {
  
  if(typeof(numActivity) === 'string' && parseFloat(numActivity) > 0 && parseFloat(numActivity) < 15) {
    let k;
    let t;
    k = 0.693/ HALF_LIFE_PERIOD;
    t = Math.log(MODERN_ACTIVITY / numActivity) / k;
    return Math.ceil(t)

  }
  else{
    return false
  }
};
