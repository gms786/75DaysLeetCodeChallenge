/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Step 1: convert to lowercase and remove non-alphanumeric
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Step 2: check palindrome
    let reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
};