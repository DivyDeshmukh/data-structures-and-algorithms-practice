class Stack {
    constructor () {
        this.q = [];
    }

    push (value) {
        // enqueue
        this.q.push(value);

        // rotate the queue
        let size = this.q.length;
        while (size > 1) {
            this.q.push(this.q.shift());
            size--;
        }
    }

    pop () {
        if (this.isEmpty()) return null;
        return this.q.shift();
    }

    top () {
        return this.isEmpty() ? null : this.q[0];
    }

    isEmpty () {
        return this.q.length === 0;
    }

    size () {
        return this.q.length;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.top());
console.log(stack.size());

// Time Complexity:
// push: O(n)
// pop: O(n) as well due to the shift operation
// top: O(1)
// isEmpty: O(1)
// size: O(1)
// Space Complexity: O(n)