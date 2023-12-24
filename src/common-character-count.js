const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(s1, s2 ) {
  const charCountMap = new Map();

  // Count characters in s1
  for (const char of s1) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  let commonCount = 0;

  // Check and count common characters in s2
  for (const char of s2) {
    if (charCountMap.has(char) && charCountMap.get(char) > 0) {
      commonCount++;
      charCountMap.set(char, charCountMap.get(char) - 1);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
