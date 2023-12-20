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
function minesweeper( matrix ) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const field = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === true) {
        //field[i][j] = 1;
        if (i === 0 && j === 0) {
          field[i][j + 1] += 1;
          field[i + 1][j] += 1;
          field[i + 1][j + 1] += 1;
        } else if (i === 0) {
          field[i][j - 1] += 1;
          field[i][j + 1] += 1;
          field[i + 1][j - 1] += 1;
          field[i + 1][j] += 1;
          field[i + 1][j + 1] += 1;
        } else if (i === 0 && j === cols) {
          field[i][j - 1] += 1;
          field[i + 1][j] += 1;
          field[i + 1][j - 1] += 1;
        } else if (i === rows && j === 0) {
          field[i][j + 1] += 1;
          field[i - 1][j] += 1;
          field[i - 1][j + 1] += 1;
        } else if (i === rows) {
          field[i][j - 1] += 1;
          field[i][j + 1] += 1;
          field[i - 1][j - 1] += 1;
          field[i - 1][j] += 1;
          field[i - 1][j + 1] += 1;
        } else if (i === rows && j === cols) {
          field[i][j - 1] += 1;
          field[i - 1][j] += 1;
          field[i - 1][j - 1] += 1;
        } else {
          field[i + 1][j - 1] += 1;
          field[i + 1][j] += 1;
          field[i + 1][j + 1] += 1;
          field[i][j - 1] += 1;
          field[i][j + 1] += 1;
          field[i - 1][j - 1] += 1;
          field[i - 1][j] += 1;
          field[i - 1][j + 1] += 1;
        }
      }
    }
  }
  return field;
}

module.exports = {
  minesweeper
};
