// 1st solution
//  O(n) time | O(1) space
/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    var curTime = 0;
    var totalTime = 0;
    for (let i=0; i < customers.length; i++) {
        var start = customers[i][0];
        var duration = customers[i][1];
        totalTime += Math.max(curTime - start, 0) + duration;
        curTime = Math.max(curTime, start) + duration;
    }
    var ans = totalTime / customers.length;
    return ans;
    
};