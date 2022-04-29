const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];
  for(let i = 0; i < str.length; i++) {
    if (res.length >=2 && res[res.length - 1] == str[i]) {
      res[res.length - 2]++;
    } else {
      res.push(1);
      res.push(str[i]);
    }
  }
  return res.filter(e => e != 1).join('');
}

module.exports = {
  encodeLine
};
