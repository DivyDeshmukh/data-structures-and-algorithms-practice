class MaxStack {
    constructor () {
        this.stack = [];
        this.maxStack = [];
    }

    push (x) {
        this.stack.push(val);

        if (this.maxStack.length === 0 || x >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(x);
        }
    }

    pop () {
        const val = this.stack.pop();

        if (val === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
        }
         
        return val;
    }

    top () {
        return this.stack[this.stack.length - 1];
    }
    
    peekMax () {
        return this.maxStack[this.maxStack.length - 1];
    }

    popMax () {
        const max = this.peekMax();
        const buffer = [];

        // remove elements until max is found
        while (max !== this.top()) {
            buffer.push(this.pop());
        }

        // remove the max (top-most max)
        this.pop();

        // restore elements
        while (buffer.length > 0) {
            this.push(buffer.pop());
        }

        return max;
    }
}

const maxStack = new MaxStack();
maxStack.push(5);
maxStack.push(1);
maxStack.push(5);
console.log(maxStack.top());
console.log(maxStack.popMax());
console.log(maxStack.top());
console.log(maxStack.peekMax());
console.log(maxStack.pop());
console.log(maxStack.top());

// Time Complexity:
// push: O(1)
// pop: O(1)
// top: O(1)
// peekMax: O(1)
// popMax: O(n) in the worst case when max is at the bottom of the stack

// Space Complexity: O(n) for both stacks

