const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  let mass = [];
  for (let i = 0; i < arr.length; i++) {
    if(!Array.isArray(arr)) return arr
    if(arr[i] === '--discard-next'){
    if(i < arr.length) i++
      i++
    }else if(arr[i] === '--discard-prev'){
    if(i === 0) i++
      mass.splice(i - 1, 1)
    }else if(arr[i] === '--double-next'){
    if(i < arr.length) i++
      mass.push(i + 1)
    }else if(arr[i] === '--double-prev'){
    if(i === 0) i++
      mass.push(i)
    }else{
      mass.push(arr[i])
    }
  }
  return mass
};