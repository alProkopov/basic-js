import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity ) {

  if ( sampleActivity<=0|| sampleActivity>MODERN_ACTIVITY|| typeof (sampleActivity) !== 'string'|| isNaN(sampleActivity) ) return false

  let res = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/ Math.LN2*HALF_LIFE_PERIOD);
  return res
}
