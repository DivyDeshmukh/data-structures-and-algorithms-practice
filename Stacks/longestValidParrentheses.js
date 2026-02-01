/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // let n = s.length;
    // let maxLen = 0;

    // function isValid(sub) {
    //     let count = 0;

    //     for (let char of sub) {
    //         if (char === '(') count++;
    //         else count--;

    //         // because of more ) order became invalid
    //         if (count < 0) return false;
    //     }

    //     return count === 0;
    // }

    // for (let i = 0; i < n; i++) {
    //     for (let j = i+1; j <= n; j++) {
    //         let sub = s.slice(i, j);

    //         if (isValid(sub)) {
    //             maxLen = Math.max(maxLen, sub.length);
    //         }
    //     }
    // }

    // return maxLen;

    // Time:- O(n^3)
    // Space:- O(1)

    // Approach 2:- Using stack
    let stack = [-1];
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length === 0) {
                // new invalid base
                stack.push(i);
            } else {
                maxLen = Math.max(
                    maxLen,
                    i - stack[stack.length - 1]
                );
            }
        }
    }

    return maxLen;
};

// Time:- O(n)  
// Space:- O(n)

console.log(longestValidParentheses(")()())"));
