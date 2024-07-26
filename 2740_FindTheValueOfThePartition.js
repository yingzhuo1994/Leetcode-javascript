// 1st solution
// O(n * log(n)) time | O(n) space
/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    nums.sort();
    var ans = Number.MAX_SAFE_INTEGER;
    for (let i=0; i < nums.length - 1; i++) {
        ans = Math.min(ans, nums[i+1] - nums[i]);
    }
    return ans;
};