'use strict'

class DepthCalculator {
  calculateDepth(arr) {
    let newArr = arr.filter(item => Array.isArray(item));

    if (newArr.length == 0) {
      return 1
    } else {
      newArr = newArr.map(item => this.calculateDepth(item)).sort((a,b) => a - b)
      console.log(newArr);
      return 1 + newArr[newArr.length - 1];
    }
  }
};


const instance = new DepthCalculator();
instance.calculateDepth([[5, 4], [2],2,[4]]);
