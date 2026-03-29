/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // if opening bracket
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // if closing bracket
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};