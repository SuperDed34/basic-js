const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (isEmpty(members) && Array.isArray(members)) {
    let res = members.reduce((acc, item) => {
      if (typeof item === "string") {
        item = item.trim();
        item = item[0].toUpperCase();
        acc += item;
      }
      return acc;
    }, 0)
      .slice(1)
      .split('')
      .sort()
      .join('');
    return res;
  }
  return false;
}

function isEmpty(arr) {
  if (arr !== null && arr !==undefined) {
    return arr.length > 0;
  }
  return false;
}

function isNull(arr) {
  return arr === null;
}

module.exports = {
  createDreamTeam
};
