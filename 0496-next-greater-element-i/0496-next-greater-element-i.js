/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();

    // Find next greater for nums2
    for (let num of nums2) {

        while (stack.length && num > stack[stack.length - 1]) {
            let smaller = stack.pop();
            map.set(smaller, num);
        }

        stack.push(num);
    }

    // Remaining elements have no greater element
    while (stack.length) {
        map.set(stack.pop(), -1);
    }

    // Build answer for nums1
    let ans = [];

    for (let num of nums1) {
        ans.push(map.get(num));
    }

    return ans;
};