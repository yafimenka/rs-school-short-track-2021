/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let result = -1;
  let min = 0;
  let max = array.length - 1;
  let currentIdx = min + Math.ceil((max - min) / 2);
  while (!(result + 1)) {
    const currentValue = array[currentIdx];
    if (currentValue === value) {
      result = currentIdx;
      break;
    } else {
      if (min === max) {
        break;
      }
      if (currentValue > value) {
        if ((max - min) === 1) {
          currentIdx--;
          max = currentIdx;
        } else {
          max = currentIdx;
          currentIdx = min + Math.floor((max - min) / 2);
        }
      } else if (currentValue < value) {
        if ((max - min) === 1) {
          currentIdx++;
          min = currentIdx;
        } else {
          min = currentIdx;
          currentIdx = min + Math.floor((max - min) / 2);
        }
      }
    }
  }
  return result;
}

module.exports = findIndex;
