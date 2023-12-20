const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const length = arr.length;
  let discardNext = false;
  let pos = 0;

  for (let i = 0; i < length; i++) {
    if (discardNext) {
      discardNext = false;
      pos++;
      continue;
    }

    switch (arr[i]) {
      case "--double-next":
        if (i < length - 1) {
          result.push(arr[i + 1]);
          pos++;
        }
        break;
      case "--double-prev":
        if (i > 0) {
          if (result[pos - 1] === undefined) {
            continue;
          }
          result.push(result[pos - 1]);
          pos++;
        }
        break;
      case "--discard-next":
        discardNext = true;
        break;
      case "--discard-prev":
        if (i > 0 && result[pos - 1] != undefined) {
          result.pop();
          pos++;
        }
        break;
      default:
        result.push(arr[i]);
        pos++;
    }
  }

  return result;
}

module.exports = {
  transform
};
