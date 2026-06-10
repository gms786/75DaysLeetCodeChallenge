/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Sort intervals by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];

    for (let interval of intervals) {
        // If result is empty or no overlap
        if (
            result.length === 0 ||
            result[result.length - 1][1] < interval[0]
        ) {
            result.push(interval);
        } else {
            // Merge overlapping intervals
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                interval[1]
            );
        }
    }

    return result;
};