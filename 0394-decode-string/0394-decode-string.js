/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currentString = "";
    let currentNumber = 0;

    for (let char of s) {

        // If character is a digit
        if (!isNaN(char)) {
            currentNumber = currentNumber * 10 + Number(char);
        }

        // If opening bracket
        else if (char === '[') {
            stack.push(currentString);
            stack.push(currentNumber);

            currentString = "";
            currentNumber = 0;
        }

        // If closing bracket
        else if (char === ']') {
            let num = stack.pop();
            let prevString = stack.pop();

            currentString = prevString + currentString.repeat(num);
        }

        // Normal character
        else {
            currentString += char;
        }
    }

    return currentString;
};