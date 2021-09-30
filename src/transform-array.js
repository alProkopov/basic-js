import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
if (arr instanceof Array ==false) {throw new Error ("'arr' parameter must be an instance of the Array!")}
// if (arr=[]) return arr
// console.log('HELLO');
let newArr = arr.slice()
console.log(newArr);

let result = []
for (let i = 0; i < newArr.length; i++) {
  const item = newArr[i];

  switch (newArr[i]) {

    case '--discard-next':
      if (newArr[i+1]) {
          i++
      }
      break;

      case '--discard-prev':
      if (newArr[i-1]&&newArr[i-2]!='--discard-next') {
        result.pop()
      }
      break;

      case '--double-next':
      if (newArr[i+1]) {
        result.push(newArr[i+1])
      }
      break;

      case '--double-prev':
      if (newArr[i-1]&&newArr[i-2]!='--discard-next') {
        result.push(newArr[i-1])
      }
      break;

      default:
        result.push(newArr[i])
  }
}
console.log(result);
return result
}

transform([1, 2, 3, '--double-next', 4, 5])
//  => [1, 2, 3, 4, 4, 5]

// transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
