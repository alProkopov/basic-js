import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {

  function newSum(arr) {
    let array= arr.toString().split('')

    let sum = array.reduce((acc,item)=>acc+=+item,0)

    return sum
  }
    let sum = newSum(n)
  let res = sum.length==1?sum: newSum(sum)
  console.log(res);
  return res

}



