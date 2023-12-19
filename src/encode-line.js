const { NotImplementedError } = require('../extensions/index.js');

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
  let strToArr = str.split('');
  let res = '';
  let marker = '';
  let counter = 0;
  let repeats = 1;

  for (let i = 0; i < strToArr.length; i++) {
    if (marker !== strToArr[i]) {
      repeats === 1 ? res += `${marker}` : res += `${repeats}${marker}`;
      repeats = 1;
      marker = strToArr[i];
      counter++;
    } else {
      repeats++;
    }
  }
  repeats === 1 ? res += `${marker}` : res += `${repeats}${marker}`;
  return res;
}

module.exports = {
  encodeLine
};
