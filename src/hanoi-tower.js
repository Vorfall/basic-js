const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
 
  if(!disksNumber || !turnsSpeed || disksNumber === NaN || turnsSpeed === NaN) 
  {
    return [];
  }
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor((Math.pow(2, disksNumber) - 1) * (1 / (turnsSpeed / 3600)));

  return {turns, seconds};
};
