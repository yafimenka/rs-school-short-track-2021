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
  const arrPlus = arr.filter((a) => a !== -1).sort((a, b) => b - a);
  const newarr = arr.map((a) => {
    if (a !== -1) {
      return arrPlus.pop();
    }
    return a;
  });
  return newarr;
}

module.exports = sortByHeight;
