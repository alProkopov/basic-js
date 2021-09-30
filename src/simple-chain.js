import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {

  newChain: [],

  getLength() {
    return this.newChain.length
  },
  addLink(value) {
    let newValue = `( ${value} )`
    this.newChain.push(newValue)
    return this;
  },
  removeLink(position ) {
    if (position<1||position>this.newChain.length||typeof(position) != "number"){
    this.newChain = [] ;
    throw new Error("You can't remove incorrect link!")}
    this.newChain.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.newChain.reverse()
    return this;
  },
  finishChain() {
    let finish = this.newChain.join('~~')
    this.newChain =[]
    return finish
  }
};
