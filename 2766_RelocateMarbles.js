// 1st solution
// O(n * log(n) + m) time | O(n) space 
/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function(nums, moveFrom, moveTo) {
    const locationsSet = new Set(nums);
    for (let i=0; i < moveFrom.length; i++) {
        locationsSet.delete(moveFrom[i]);
        locationsSet.add(moveTo[i]);
    }
    const ans = Array.from(locationsSet);
    ans.sort((a, b) => a - b);
    return ans;
};