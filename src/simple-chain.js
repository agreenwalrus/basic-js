const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _chain: [],  
  getLength() {
    return this._chain.length;
  },
  addLink(value) {
    this._chain.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if(typeof(position) != 'number' || !this._chain[position] || position < 1) {
      this.finishChain();
      throw new Error("You can't remove incorrect link!");
    }
    this._chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._chain = this._chain.reverse();
    return this;
  },
  finishChain() {
    let complete = this._chain.join("~~");
    this._chain = [];
    return complete;
  }
};

module.exports = {
  chainMaker
};
