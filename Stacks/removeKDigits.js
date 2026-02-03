/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];

    for (let char of num) {
        while(stack.length && k > 0 && (char - '0') < (stack[stack.length - 1] - '0')) {
            stack.pop();
            k--;
        }

        stack.push(char);
    }

    for (let i = k; i > 0; i--) {
        stack.pop();
    }

    for (let i = 0; i < stack.length-1; i++) {
        if ((stack[i] - '0') !== 0) {
            break;
        }
        stack[i] = '';
    }

    let resultStr = stack.join('');

    return (resultStr.length === 0) ? "0" : resultStr;
};

// NOTE:- After removing k digits, the remaining digits must stay in the SAME relative order as the original number

console.log(removeKdigits([1, 4, 3, 2, 2, 1, 9]));

// Time Complexity: O(n) where n is the length of num
// Space Complexity: O(n) for the stack
