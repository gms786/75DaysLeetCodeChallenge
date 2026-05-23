/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        // Sort in descending order
        stones.sort((a, b) => b - a);

        // Take two heaviest stones
        let y = stones.shift();
        let x = stones.shift();

        // If they are not equal, push the difference
        if (y !== x) {
            stones.push(y - x);
        }
    }

    // Return remaining stone or 0
    return stones.length ? stones[0] : 0;
};