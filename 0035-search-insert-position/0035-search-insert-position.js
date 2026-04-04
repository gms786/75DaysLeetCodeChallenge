/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // target found
        } else if (nums[mid] < target) {
            left = mid + 1; // move right
        } else {
            right = mid - 1; // move left
        }
    }

    // target not found, left is the correct insert position
    return left;
};