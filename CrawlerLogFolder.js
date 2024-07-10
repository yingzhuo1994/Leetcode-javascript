// 1st solution
// O(n) time | O(n) space
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    var path = [];
    for (let i=0; i < logs.length; i++) {
        if (logs[i] == "../") {
            if (path.length > 0) {
                path.pop();
            }
        } else if (logs[i] == "./") {
            continue;
        } else {
            path.push(logs[i]);
        }
    }
    return path.length;
    
};