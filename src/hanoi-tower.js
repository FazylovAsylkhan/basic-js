const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let result = {},
      turns = (2 ** disksNumber) - 1,
      turnsSpeedSec = turnsSpeed / 3600,
      seconds = Math.floor(turns / turnsSpeedSec);
  
  result.turns = turns;
  result.seconds = seconds;

  return result
};
