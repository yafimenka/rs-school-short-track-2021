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
  let result = '';
  if (str.length > 0) {
    let current = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (current === str[i]) {
        count++;
      } else {
        result = result.concat(count > 1 ? count : '', current);
        current = str[i];
        count = 1;
      }
    }
    result = result.concat(count > 1 ? count : '', current);
  }
  return result;
}

module.exports = encodeLine;
