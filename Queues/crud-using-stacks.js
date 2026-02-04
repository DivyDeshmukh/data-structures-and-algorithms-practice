class Queue {
    constructor () {
        this.inStack = [];
        this.outStack = [];
    }

    enqueue (item) {
        this.inStack.push(item);
    }

    dequeue () {
        if (this.isEmpty()) return null;

        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        
        return this.outStack.pop();
    }

    front() {
        if (this.isEmpty()) return null;

        if (this.outStack.length === 0) {
            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }
        }

        return this.outStack[this.outStack.length - 1];
    }

    isEmpty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

    size () {
        return this.inStack.length + this.outStack.length;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.front());
console.log(queue.size()); // 1
console.log(queue.isEmpty()); // false
queue.enqueue(3);
console.log(queue.dequeue()); // 2

// Time Complexity:-
// Enqueue: O(1)
// Dequeue: Amortized O(1)
// Front: Amortized O(1)
// IsEmpty: O(1)
// Size: O(1)