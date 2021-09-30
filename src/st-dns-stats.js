import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains ) {
  let res={}
  let arr = domains.map(function(item){
    let array = item.split('.').reverse()
    console.log(array);
    let key=''

    array.map(item=>{


        key+=`.${item}`

        if (res[key]) {res[key]++} else { res[key]=1}

    }

  )
  })
  return res
}
