// 1st solution
//  O(1) time | O(1) space
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    q = parseInt(time / (n - 1));
    r = time % (n - 1);
    if (q % 2 == 1) {
        return n - r;
    } else {
        return 1 + r;
    }
};