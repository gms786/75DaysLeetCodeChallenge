/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // Pick a random pivot to avoid worst-case scenarios on pre-sorted data
    const pivot = nums[Math.floor(Math.random() * nums.length)];
    
    const left = [];  // Elements strictly greater than the pivot
    const mid = [];   // Elements equal to the pivot
    const right = []; // Elements strictly smaller than the pivot
    
    for (const num of nums) {
        if (num > pivot) left.push(num);
        else if (num < pivot) right.push(num);
        else mid.push(num);
    }
    
    // If the kth largest is in the 'left' bucket
    if (k <= left.length) {
        return findKthLargest(left, k);
    }
    
    // If the kth largest is in the 'right' bucket
    if (k > left.length + mid.length) {
        return findKthLargest(right, k - left.length - mid.length);
    }
    
    // Otherwise, it falls perfectly inside the 'mid' bucket
    return pivot;
};