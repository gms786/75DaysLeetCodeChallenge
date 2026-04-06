/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Minimum is in right part
            left = mid + 1;
        } else {
            // Minimum is in left part (including mid)
            right = mid;
        }
    }

    return nums[left];
};