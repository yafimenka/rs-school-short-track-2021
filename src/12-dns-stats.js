/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const list = {};
  domains.forEach((domain) => {
    let current = '';
    const arr = domain.split('.').reverse();
    arr.forEach((element) => {
      current = current.concat('.', element);
      if (list[current]) {
        list[current]++;
      } else {
        list[current] = 1;
      }
    });
  });
  return list;
}

module.exports = getDNSStats;
