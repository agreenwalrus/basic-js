const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addit = Array(options.additionRepeatTimes || 1)
  .fill('addition' in options ? ('' + options.addition) : '')
  .join(options.additionSeparator || '|');
  
  let main = Array(options.repeatTimes || 1).fill(('' + str) + (addit || ''));
  return main.join(options.separator || '+');

}

module.exports = {
  repeater
};
