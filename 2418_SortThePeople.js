// 1st solution
// O(n * log(n)) time | O(n) space
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    var arr = [];
    for (let i=0; i < names.length; i++) {
        arr.push([names[i], heights[i]]);
    }
    arr.sort((a, b) => b[1] - a[1]);
    var ans = [];
    for (let i=0; i < arr.length; i++) {
        ans.push(arr[i][0]);
    }
    return ans;
};