const { NotImplementedError } = require('../extensions/index.js');

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
  let maxn = 0;
  let newn;
  const ns = String(n)
  for (const digit in ns) {
    newn = Number(ns.replace(digit, ''))
    if (newn > maxn) {
      maxn = newn
    }

  }
  return maxn
}

module.exports = {
  deleteDigit
};
