const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newArr = [];

  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        newArr.push(members[i])   
      } 
    }

    return newArr.map(item => item.trim()[0].toUpperCase()).sort().join('')      
  }        

  return false;
};
