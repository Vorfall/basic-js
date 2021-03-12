const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr:[],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(value);
    return this;
  },
  removeLink(position) {
    if (!position || typeof position !== 'number' || position < 0 ) {
      this.chainArr = []
      throw new Error()
    }

    this.chainArr.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.chainArr = this.chainArr.reverse();
    return this;
  },

  finishChain() {
     let chain = "";
        for (let link of this.chainArr) {
            chain += `( ${link} )~~`;
        }
        this.chainArr = [];
        return chain.slice(0, -2);
  }
};

module.exports = chainMaker;
