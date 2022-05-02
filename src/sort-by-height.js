const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = Array.from(arr);
  let sorted = arr.filter(el => el != -1).sort((a, b) => a - b);
  for(let i=0, j=0; i < res.length; i++) {
    if(res[i] == -1)
      continue;
    res[i] = sorted[j];
    j++;
  }
  return res;
}

module.exports = {
  sortByHeight
};
