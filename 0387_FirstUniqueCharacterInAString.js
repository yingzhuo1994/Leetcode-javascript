/**
 * @param {string} s
 * @return {number}
 */

// 1st solution
// O(n) time | O(1) space
var firstUniqChar = function(s) {
    const count = {};
    for (const ch of s) {
        if (count[ch] === undefined) {
            count[ch] = 1;
        } else {
            count[ch] += 1;
        }
    }

    for (let idx = 0; idx < s.length; idx++) {
        if (count[s[idx]] === 1) {
            return idx;
        }
    }
    
    return -1;
};