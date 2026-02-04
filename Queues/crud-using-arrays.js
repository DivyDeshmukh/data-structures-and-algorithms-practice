class Queue {
    constructor() {
        this.items = [];
        this.frontIndex = 0;
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const value = this.items[this.frontIndex];
        this.frontIndex++;
        return value;
    }

    front() {
        return this.isEmpty() ? null : this.items[this.frontIndex];
    }

    isEmpty() {
        return this.frontIndex >= this.items.length;
    }

    size () {
        return this.items.length - this.frontIndex;
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());
queue.enqueue(5);
console.log(queue.dequeue());
queue.enqueue(6);
queue.enqueue(7);

// Time Complexity: O(1) for enqueue, O(1) for dequeue, O(1) for front, O(1) for isEmpty, O(1) for size
// Space Complexity: O(n) where n is the number of elements in the queue but for all operations, the space complexity is O(1) as we are not using any additional data structures.