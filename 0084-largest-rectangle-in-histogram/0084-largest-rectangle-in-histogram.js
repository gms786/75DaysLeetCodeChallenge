/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    // Add 0 at end to empty stack completely
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {

        // Current bar is smaller than stack top
        while (
            stack.length &&
            heights[i] < heights[stack[stack.length - 1]]
        ) {
            let height = heights[stack.pop()];

            // Width calculation
            let width;

            if (stack.length === 0) {
                width = i;
            } else {
                width = i - stack[stack.length - 1] - 1;
            }

            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
};