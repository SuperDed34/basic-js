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

  const length = n.toString().split('').length;
  let variables = [];
  let res = 0;
  variables[0] = parseInt(n.toString().substring(1));
  variables[length - 1] = parseInt(n.toString().substring(0, length - 1));

  for (let i = 1; i < length - 1; i++) {
    variables[i] = parseInt(n.toString().substring(0, i) + n.toString().substring(i + 1, length));
  }

  for (let i = 0; i < variables.length; i++) {

    variables[i] > res ? res = variables[i] : res;
  }

  return res;
}

module.exports = {
  deleteDigit
};
