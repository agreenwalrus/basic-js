const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let set2 = s2.split('');
  let set1 = s1.split('');
  return set1.reduce((cnt, el) => {
    let ind = set2.indexOf(el);
    if (ind != -1) {
      set2[ind] = '';
      return cnt + 1;
    }
    return cnt;
  }, 0);

  
}

module.exports = {
  getCommonCharacterCount
};
