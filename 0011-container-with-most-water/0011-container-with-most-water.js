/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        let area = h * w;

        maxWater = Math.max(maxWater, area);

        // Move the smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};