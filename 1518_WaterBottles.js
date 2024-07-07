// 1st solution
// O(log(n)) time | O(1) space
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var ans = numBottles;
    while (numBottles >= numExchange) {
        r = numBottles % numExchange;
        q = (numBottles - r) / numExchange;
        ans += q;
        numBottles = q + r;
    }
    return ans;
};