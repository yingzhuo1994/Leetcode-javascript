/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 1st solution
// O(n) time | O(n) space
var groupAnagrams = function (strs) {
    var dic = {};
    for (i=0;i<strs.length;i++) {
        const word = strs[i];
        var key = [...word].sort().toString();
        if (dic[key] === undefined) {
        dic[key] = [];
        }
        dic[key].push(word);
    }
    var ans = [];
    for (const key in dic) {
        ans.push(dic[key]);
    }
    return ans;
};
