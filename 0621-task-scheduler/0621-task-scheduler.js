/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // Count frequency of each task
    const freq = new Array(26).fill(0);

    for (let task of tasks) {
        freq[task.charCodeAt(0) - 65]++;
    }

    // Find maximum frequency
    let maxFreq = Math.max(...freq);

    // Count how many tasks have the maximum frequency
    let maxCount = freq.filter(f => f === maxFreq).length;

    // Calculate minimum intervals needed
    return Math.max(
        tasks.length,
        (maxFreq - 1) * (n + 1) + maxCount
    );
};