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
function getCommonCharacterCount(s1, s2) {

  const fr1 = {};
  const fr2 = {};

  for (const char of s1) {
    fr1[char] = (fr1[char] || 0) + 1;
  }

  for (const char of s2) {
    fr2[char] = (fr2[char] || 0) + 1;
  }

  let commons = 0;

  for (const char in fr1) {
    if (fr2.hasOwnProperty(char)) {
      commons += Math.min(fr1[char], fr2[char]);
    }
  }

  return commons;
}

module.exports = {
  getCommonCharacterCount
};
