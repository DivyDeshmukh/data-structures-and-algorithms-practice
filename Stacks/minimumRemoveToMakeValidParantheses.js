/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    // let stack = [];
    // let set = new Set();

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === '(') {
    //         stack.push(i);
    //     } else if (s[i] === ')') {
    //         const poppedElem = stack.length ? stack.pop() : null;
    //         if (poppedElem === null) {
    //             set.add(i);
    //         }
    //     }
    // }

    // for (let idx of stack) {
    //     set.add(idx);
    // }

    // let validStr = "";
    // for (let i = 0; i < s.length; i++) {
    //     if (!(set.has(i))) {
    //         validStr += s[i];
    //     }
    // }

    // return validStr;

    // Optimized Approach - Using array to mark invalid parentheses and then join the array to form valid string. It is better than using Set to store invalid indices because Set operations can be costly.
    let arr = s.split('');
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') stack.push(i);
        else if (arr[i] === ')') {
            if (stack.length === 0) {
                arr[i] = '';        // mark invalid
            } else {
                stack.pop();
            }
        }
    }

    // remaining '(' are invalid
    for (let idx of stack) {
        arr[idx] = '';
    }

    return arr.join('');

};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));

console.log(minRemoveToMakeValid("a)b(c)d"));

// Time:- O(n) as we are iterating through the string of length n twice.
// Space:- O(n) in the worst case when all the parentheses are invalid.

