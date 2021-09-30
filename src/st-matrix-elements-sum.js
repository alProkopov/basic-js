import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {

  console.log(matrix.length);

  let sum = 0;
  for(let i =0;i<matrix[0].length;i++){
    console.log(matrix[i]);
    for (let j = 0; j < matrix.length; j++) {
      console.log(matrix[j][i]);
      if (matrix[j][i]==0) {
break
      }
      sum+=matrix[j][i]
    }
  }

return sum
}

console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]));


// assert.strictEqual(getMatrixElementsSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]), 9);

// assert.strictEqual(getMatrixElementsSum([
//   [1, 2, 3, 4],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]), 15);

// assert.strictEqual(getMatrixElementsSum([
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ]), 18);

// assert.strictEqual(getMatrixElementsSum([
//   [0],
// ]), 0);

// assert.strictEqual(getMatrixElementsSum([
//   [1],
//   [5],
//   [0],
//   [2],
// ]), 6);
// });
// });
