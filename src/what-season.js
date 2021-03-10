const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined)
  return 'Unable to determine the time of year!'
if (date === null || !date instanceof Date || date.hasOwnProperty('getDay') != false) {
  throw Error('THROWN')
}
season=""
if(date.getMonth()===0 || date.getMonth()===1 || date.getMonth()===11)
{
  season="winter"
}


if(date.getMonth()===2 || date.getMonth()===3 || date.getMonth()===4)
{
  season="spring"
}


if(date.getMonth()===5 || date.getMonth()===6 || date.getMonth()===7)
{
  season="summer"
}
if(date.getMonth()===8 || date.getMonth()===9 || date.getMonth()===10)
{
  season="fall"
}
return season
};
