import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let numbers = [...n+''].map(num=>+num)
  let maximum= 0;
  for (let i = 0 ; i<numbers.length; i++){
    const array = numbers
    .slice();
    array.splice(i,1)
    maximum = Math.max (maximum, array.join(''))
  }
return maximum
}
