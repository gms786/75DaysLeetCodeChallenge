/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = {};

    // Step 1: Count frequency
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        count[num] = (count[num] || 0) + 1;
    }

    // Step 2: Sort keys based on frequency
    let result = Object.keys(count).sort(function(a, b) {
        return count[b] - count[a];
    });

    // Step 3: Return first k elements
    return result.slice(0, k).map(Number);
};