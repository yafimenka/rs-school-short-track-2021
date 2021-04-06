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
  const searchArr = s2.split('');
  return s1.split('').filter((a) => {
    let result = false;
    const idx = searchArr.indexOf(a);
    if (idx + 1) {
      searchArr.splice(idx, 1);
      result = true;
    }
    return result;
  }).length;
}

module.exports = getCommonCharacterCount;
