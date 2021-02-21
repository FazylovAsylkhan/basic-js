const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let countOfProp = Object.keys(options).length;
  let repeatTimes =  options.repeatTimes,
      separator = options.separator,
      addition = options.addition,
      additionRepeatTimes = options.additionRepeatTimes,
      additionSeparator = options.additionSeparator;

  if (countOfProp == 1) {
    return createStr(str, repeatTimes);
  } else if (countOfProp == 2) {
    return createStr(str, repeatTimes, separator);
  } else if (countOfProp == 3) {
    addition = createStr(addition, additionRepeatTimes);
    return createStr(str + addition, repeatTimes, separator);
  } else {
    addition = createStr(addition, additionRepeatTimes, additionSeparator);
    return createStr(str + addition, repeatTimes, separator);
  } 

  function createStr(string, repeatTimes = 1, separator = '+') {
    return recursiveRepeater(string, repeatTimes).split('_').join(`${separator}`);
  }
  function recursiveRepeater(string, number) {
    if (number == 1) {
      return string;
    }    
    return string + '_' + recursiveRepeater(string, number - 1);
  }
};
  