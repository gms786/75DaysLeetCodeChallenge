/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxLength = 0;

    for (let num of set) {
        // Check if it's the start of a sequence
        if (!set.has(num - 1)) {
            let currentNum = num;
            let count = 1;

            // Count consecutive numbers
            while (set.has(currentNum + 1)) {
                currentNum++;
                count++;
            }

            maxLength = Math.max(maxLength, count);
        }
    }

    return maxLength;
};