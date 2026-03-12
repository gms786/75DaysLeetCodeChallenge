
var twoSum = function(nums, target) {
    let map = {};  // to store number and its index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        // check if complement already exists in map
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        // store current number and index
        map[nums[i]] = i;
    }
};