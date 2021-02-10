const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = arr.slice()
  
  if (arr == []) return [];
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }

  newArr.forEach((item, i, arr) => {
    switch (item) {
      case '--discard-next':
        discardNext(i, arr);
        break;
        
      case '--discard-prev':
        discardPrev(i, arr);
        break;
      
      case '--double-next':
        doubleNext(i, arr);
        break;
        
      case '--double-prev':
        doublePrev(i, arr);
        break;
    }
  });
  newArr = newArr.filter(item => item != 'discarded');
  
  return newArr;

  
  function discardNext(value, arr) {
    if (+value == arr.length - 1) {
      arr.splice(value , 1);
    } else {
      arr.splice(value, 2, 'discarded', 'discarded');
    }
  };
  
  function discardPrev(value, arr) {
    if (+value == 0) {
      arr.splice(value , 1);
    } else {
      arr.splice(value - 1, 2, 'discarded', 'discarded');
    }
  };
  
  function doubleNext(value, arr) {
    if (+value == arr.length - 1) {
      arr.splice(value, 1);
    } else {
      arr.splice(value, 1, arr[+value + 1]);
    }
  };
  
  function doublePrev(value, arr) {
    if (+value == 0) {
      arr.splice(value, 1);
    } else {
      arr.splice(value, 1, arr[+value - 1]);
    }
  };
}