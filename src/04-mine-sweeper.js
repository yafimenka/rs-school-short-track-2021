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
  const countMines = function(x, y) {
    let result = 0;
    if (matrix[x][y]) {
      result = 1;
    } else {
      for (let i = Math.max(x - 1, 0); i < Math.min(matrix.length, i + 1); i++) {
        for (let j = Math.max(y - 1, 0); j < Math.min(matrix[i].length, j + 1); j++) {
          result += (matrix[i][j]) ? 1 : 0;
        }
      }
    }
    return result;
  };
  const result = matrix.map((row, x) => row.map((elem, y) => countMines(x, y)));
  return result;
}

module.exports = minesweeper;
