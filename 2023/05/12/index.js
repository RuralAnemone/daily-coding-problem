"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MAPPING = { a: '1', b: '2', c: '3', d: '4', e: '5', f: '6', g: '7', h: '8', i: '9', j: '10', k: '11', l: '12', m: '13', n: '14', o: '15', p: '16', q: '17', r: '18', s: '19', t: '20', u: '21', v: '22', w: '23', x: '24', y: '25', z: '26' };
let count;
/**
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
 * count the number of ways it can be decoded.
 *
 * For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
 *
 * You can assume that the messages are decodable. For example, '001' is not allowed.
 */
function countDecodings(input) {
    if (input.length === 0)
        return 1;
    if (input[0] === '0')
        return 0;
    let count = countDecodings(input.slice(1));
    if (input.length >= 2 && +(input[0] + input[1]) <= 26) {
        count += countDecodings(input.slice(2));
    }
    return count;
}
exports.default = countDecodings;
