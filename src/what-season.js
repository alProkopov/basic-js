import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date){

  if (!date) {return 'Unable to determine the time of year!'}

  try {
    date.toTimeString()
  } catch {
    throw new Error('Invalid date!')
  }

  let month = date.getMonth()+1;
  let season;
  if (month >= 3 && month <= 5) {return season = 'spring'}
 else if (month >= 6 && month <= 8) {return season = 'summer'}
 else if (month >= 9 && month <= 11) {return season = 'autumn'}
 else {return season = 'winter'}

}
