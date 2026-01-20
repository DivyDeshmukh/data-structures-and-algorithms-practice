/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map([
        ['}', '{'],
        [')', '('],
        [']', '[']
    ]);

    let stack = [];

    for (let char of s) {
        if (!map.has(char)) {
            stack.push(char);
        } else {
            if (!stack.length) {
                return false;
            }
            
            let topElement = stack.pop();

            if (topElement !== map.get(char)) return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid("()[]{}"));

// Time:- O(n) where n is the length of the string s
// Space:- O(n) in worst case we might push all opening brackets onto the stack
