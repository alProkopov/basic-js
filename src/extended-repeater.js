import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default
function repeater(str, options) {
    str = String(str)


    let sep=options.separator
    let addStr = options.addition
    let addSep = options.additionSeparator


    addStr = (options.addition === undefined) ? '' : String(options.addition)
    sep = options.separator ? options.separator : '+'
    addSep = options.additionSeparator ? options.additionSeparator : '|'
    options.repeatTimes = options.repeatTimes ? +(options.repeatTimes) : 1
    options.additionRepeatTimes = options.additionRepeatTimes ? +(options.additionRepeatTimes) : 1


    let newAddStr= addSep? (addStr+addSep).repeat(options.additionRepeatTimes).slice(0,-addSep.length): (addStr+addSep).repeat(options.additionRepeatTimes)



    let result = sep? (str+newAddStr+sep).repeat(options.repeatTimes).slice(0,-sep.length): (str+newAddStr+sep).repeat(options.repeatTimes)
    console.log(str+newAddStr);

    return result

}




