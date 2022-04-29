const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = ('' + n).split('');
  var i = 0;
  for (i; i < str.length - 1; i++) {
    console.log(str[i], str[i + 1]);
    if (str[i] < str[i + 1]) {
      str[i] = '';
      break;
    }
  }

  if(i == str.length - 1) {
    str[i] = '';
  }
  return parseInt(str.join(''));
}

module.exports = {
  deleteDigit
};
