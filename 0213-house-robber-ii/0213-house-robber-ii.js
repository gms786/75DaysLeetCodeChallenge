/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;

    if (n === 1) return nums[0];

    function houseRobber(arr) {
        let prev1 = 0;
        let prev2 = 0;

        for (let num of arr) {
            let temp = Math.max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = temp;
        }

        return prev1;
    }

    return Math.max(
        houseRobber(nums.slice(0, n - 1)),
        houseRobber(nums.slice(1))
    );
};