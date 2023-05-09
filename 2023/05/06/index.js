"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.
 *
 * For example, given `[10, 15, 3, 7]` and `k` of `17`, return true since `10 + 7` is `17`.
 *
 * Bonus: Can you do this in one pass?
 */
function kIsSum(array, k) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const rest = k - element;
        if (array.includes(rest))
            return true;
    }
    return false;
}
exports.default = kIsSum;
