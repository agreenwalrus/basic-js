const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for(let i = 0; i < matrix.length; i++) {
    res.push([]);
    for(let j = 0; j < matrix[0].length; j++) {
      res[i].push(0);
    }
  }

  for(let i = 0; i < matrix.length; i ++) {
    for(let j = 0; j < matrix[i].length; j++) {
      for(iShift = -1; iShift <= 1; iShift++) {
        for(jShift = -1; jShift <= 1; jShift++) {
          if ((jShift == 0 && iShift == 0)
          || i + iShift < 0 
          || i + iShift >= matrix.length
          || j + jShift < 0 
          || j + jShift >= matrix[0].length)
            continue;
          res[i][j] += matrix[i + iShift][j + jShift] ? 1 : 0;
        }
      }
    }
  }


  return res;
}

module.exports = {
  minesweeper
};
