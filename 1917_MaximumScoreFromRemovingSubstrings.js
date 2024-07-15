// 1st solution
// O(n) time | O(n) space
/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    var a = "a";
    var b = "b";
    if (x < y) {
        [a, b] = [b, a];
        [x, y] = [y, x];
    }
    
    var aCount = 0;
    var bCount = 0;
    var ans = 0;
    for (let i=0; i < s.length; i++) {
        var ch = s[i];
        if (ch == a) {
            aCount +=1;
        } else if (ch == b) {
            if (aCount > 0) {
                aCount -= 1;
                ans += x;
            } else {
                bCount += 1;
            }
        } else {
            ans += Math.min(aCount, bCount) * y;
            aCount = 0;
            bCount = 0;
        }
    }
    ans += Math.min(aCount, bCount) * y;
    return ans;
};