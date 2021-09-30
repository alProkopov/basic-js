import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 export default function encodeLine( str ) {



  let count = 1;
  let res = '';
  for (let i=0; i<str.length;i++) {
    if (str[i]==str[i + 1]) {
      count++;
    }
    if (str[i]!==str[i + 1]) {
      res += `${count == 1 ? '' : count}${str[i]}`;
      count = 1;
    }
  }
  return res;
}








// export default function encodeLine( str ) {

//   let arr = str.match(/(.)\1*/g)
//   let newArr=arr.map((item) => `${item.length}${item[0]}`)
//   let string = newArr.join('').replace(/1/g,'')
//   return string
// }

// console.log(encodeLine('sdaaaabb'));





// function encodeLine( str ) {

//   let arr = str.match(/(.)\1*/g)
// console.log(arr[0].length);
//   let newArr = arr.map(function(item) {
//     console.log(item.length)
//     if (item.length==1) {return `${item[0]}`}
//     if (item.length>1){return `${item.length}${item[0]}`}}).join('')

//   return newArr
// }




// // tion encodeLine( str ) {

// //   let arr = str.match(/(.)\1*/g)

// //   let newArr = arr.map((item) => if (item.length==1)?`${item[0]}`:`${item.length}${item[0]}`).join('')
// //   return newArr
// // }

// // console.log(encodeLine('cadaaaabb'));
