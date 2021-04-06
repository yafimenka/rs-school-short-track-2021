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
  const str = String(n);
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    let strNum = '';
    for (let j = 0; j < str.length; j++) {
      if (j !== i) {
        strNum = strNum.concat(str[j]);
      }
    }
    arr.push(Number(strNum));
  }
  return Math.max(...arr);
}

module.exports = deleteDigit;
