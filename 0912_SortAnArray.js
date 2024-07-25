// 1st solution, merge sort
// O(n * log(n)) time | O(n) space
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  function mergeSort(array) {
    let n = array.length;
    if (n == 1) {
      return array;
    }
    let half = Math.floor(n / 2);
    let array1 = mergeSort(array.slice(0, half));
    let array2 = mergeSort(array.slice(half));
    let ans = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
      if (array1[i] <= array2[j]) {
        ans.push(array1[i]);
        i++;
      } else {
        ans.push(array2[j]);
        j++;
      }
    }
    while (i < array1.length) {
      ans.push(array1[i]);
      i++;
    }
    while (j < array2.length) {
      ans.push(array2[j]);
      j++;
    }
    return ans;
  }
  return mergeSort(nums);
};
