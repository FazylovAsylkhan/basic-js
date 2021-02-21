'use strict'

function repeater(str, options) {
  let countOfProp = Object.keys(options).length;
  console.log(countOfProp);
  if (countOfProp == 1) {
    typeof options.repeatTimes == 'undefined' ? options.repeatTimes = 1 : options.repeatTimes;
    return recursiveRepeater(str, options.repeatTimes).split(',').join('+')
  } else if (countOfProp == 2) {
    return recursiveRepeater(str, options.repeatTimes).split(',').join(`${options.separator}`);
  } else if (countOfProp == 3) {
    typeof options.repeatTimes == 'undefined' ? options.repeatTimes = 1 : options.repeatTimes;
    typeof options.additionRepeatTimes == 'undefined' ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
    let addition = recursiveRepeater(options.addition, options.additionRepeatTimes).split(',').join('+')
    return recursiveRepeater(str, options.repeatTimes).split(',').join(`${addition}`);
  } else {
    typeof options.repeatTimes == 'undefined' ? options.repeatTimes = 1 : options.repeatTimes;
    typeof options.additionRepeatTimes == 'undefined' ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
    let addition = recursiveRepeater(options.addition, options.additionRepeatTimes).split(',').join(`${options.additionSeparator}`);
    return recursiveRepeater(str + addition, options.repeatTimes).split(',').join(`${options.separator}`);
  } 
  
  function recursiveRepeater (str, number) {
    if (number == 1) {
      return str;
    }
    
    return str + ',' + recursiveRepeater(str, number - 1);
  }
};


// let arr = Object.keys({ repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });
let test = repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS'});
// console.log(arr.length);
console.log(test);

console.log(Array.isArray([1,2,3,'4']));

Array.isArray([1,2,3,'4'])