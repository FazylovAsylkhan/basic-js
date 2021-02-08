const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix ) {
  let amounOfCats = 0;
  
  if (typeof matrix == 'object') {
      for (let i = 0; i < matrix.length; i++) {
        amounOfCats += matrix[i].filter(item => item == '^^').length;
      }

      return amounOfCats;
  }

  return 0 
};