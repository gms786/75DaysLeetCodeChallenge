/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let b = stack.pop(); // second operand
            let a = stack.pop(); // first operand

            let result;

            if (token === "+") result = a + b;
            else if (token === "-") result = a - b;
            else if (token === "*") result = a * b;
            else if (token === "/") result = Math.trunc(a / b); // truncate toward 0

            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};