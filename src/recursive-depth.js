const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let newArr = arr.filter(item => Array.isArray(item));

    if (newArr.length == 0) {
      return 1
    } else {
      newArr = newArr.map(item => this.calculateDepth(item)).sort((a,b) => a - b)
      return 1 + newArr[newArr.length - 1];
    }
  }
};
