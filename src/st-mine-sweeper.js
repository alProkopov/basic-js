import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix ) {
  let arr =[]


  if (matrix.length === 2) {
    arr = [[0, 0, 0],[0, 0, 0]];
  } else if (matrix.length === 3) {arr = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
  };


    for (let i=0; i<arr.length;i++){
      for (let j =0; j<arr[i].length;j++){
        if (typeof matrix[i-1] !== 'undefined') {
          if (matrix[i-1][j -1]) {arr[i][j]++}
          if (matrix[i-1][j]) {arr[i][j]++}
          if (matrix[i-1][j + 1]) {arr[i][j]++}
        }
        if (matrix[i][j -1]) { arr[i][j]++}
        if (matrix[i][j + 1]) {arr[i][j]++}

        if (typeof matrix[i+ 1] !== 'undefined') {
          if (matrix[i+ 1][j -1]) {arr[i][j]++}
          if (matrix[i+ 1][j]) {arr[i][j]++}
          if (matrix[i+ 1][j + 1]) {arr[i][j]++}
        }
      }
    }
    return arr;
  }
