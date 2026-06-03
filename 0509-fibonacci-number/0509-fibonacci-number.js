/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) return n;

    let prev1 = 0;
    let prev2 = 1;

    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }

    return prev2;
};