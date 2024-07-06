// 1st solution
// O(n) time | O(1) space
/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function(nums) {
    var start = 0;
    var ans = 0;
    var prev = -1;
    for (i=0;i<nums.length;i++) {
        if (nums[i] != prev) {
            ans += i - start + 1;
        } else {
            ans += 1;
            start = i;
        }
        prev = nums[i];
    } 
    return ans;
};