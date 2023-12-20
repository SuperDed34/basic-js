const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

  let res=''
const chainMaker = {
    getLength() {
      let a = res
      res = ''
      a = a.split('~~')
      return a.length

    },
    addLink(value) {
      if (value === undefined) { value = '' }
      if (value === null) { value = 'null' }
      if (res.length == 0) { res = '( ' + value + ' )' }
      else { res = res + '~~' + '( ' + value + ' )' }
      return this

    },
    removeLink(position) {
      let arr = res.split('~~')
      if (position !== Math.floor(position) || position > arr.length || position < 1) {
        res = ''
        throw new Error('You can\'t remove incorrect link!')
      }
      else {
        arr.splice(position - 1, 1)
        res = arr.join('~~')
        return this
      }

    },
    reverseChain() {
      let arr = res.split('~~')
      arr.reverse()
      res = arr.join('~~')
      return this

    },
    finishChain() {
      let a = res
      res = ''
      return a

    }
};

module.exports = {
  chainMaker
};
