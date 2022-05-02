const { NotImplementedError } = require('../extensions/index.js');

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
  return domains.reduce((dict, domain) => {
    let splitted = domain.split(".").map(e => '.' + e).reverse();
    for(let i = 1; i <= splitted.length; i ++) {
      let tempDomain = splitted.slice(0, i).join("");
      dict[tempDomain] = (dict[tempDomain] || 0) + 1;
    }
    return dict;
  }, {}) 
}

module.exports = {
  getDNSStats
};
