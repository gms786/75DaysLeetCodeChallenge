/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, left, right) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
        return binarySearch(nums, target, mid + 1, right);
    } else {
        return binarySearch(nums, target, left, mid - 1);
    }
}