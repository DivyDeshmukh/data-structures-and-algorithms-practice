// RPN:- Reverse Polish Notation (RPN) is a postfix expression format where operators come after their operands, allowing evaluation without parentheses using a stack.

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let operators = new Set(['+', '-', '*', '/']);

    for (let token of tokens) {
        if (operators.has(token)) {
            const popElem1 = stack.pop();
            const popElem2 = stack.pop();

            let result;

            switch(token) {
                case '+':
                    result = popElem2 + popElem1;
                    break;
                case '-':
                    result = popElem2 - popElem1;
                    break;
                case '*':
                    result = popElem2 * popElem1;
                    break;
                case '/':
                    result = Math.trunc(popElem2 / popElem1);
                    break;
            }

            stack.push(result);
            continue;
        }

        stack.push(Number(token));
    }

    return stack.pop();
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));

// Time Complexity: O(n) where n is the number of tokens
// Space Complexity: O(n) where n is the number of tokens
