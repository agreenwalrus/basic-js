const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if (! date) {
    return 'Unable to determine the time of year!';
  }  
  try {
    if (! (
      date instanceof Date 
      && !isNaN(date) 
      && Object.prototype.toString.call(date) === '[object Date]'
      && date.valueOf() == date[Symbol.toPrimitive]('number')
      )) {
        throw new Error('Invalid date!');
    }
  } catch (error) {
    throw new Error('Invalid date!');
  }
  
  let seasons = ['winter', 'winter'
  , 'spring', 'spring', 'spring'
  , 'summer', 'summer', 'summer'
  , 'autumn', 'autumn', 'autumn'
  , 'winter'];
  let mth = date.getMonth() == undefined ? -1 : date.getMonth() ;
  console.log(mth);
  console.log(seasons[mth]);
  return seasons[mth] || 'Unable to determine the time of year!';
}

module.exports = {
  getSeason
};
