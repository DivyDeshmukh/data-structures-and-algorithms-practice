class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class Queue {
    constructor() {
        this.head = null; 
        this.tail = null;
        this.length = 0;
    }

    enqueue (value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    dequeue () {
        if (this.isEmpty()) return null;

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;

        // importtant: reset tail when queue becomes empty
        if (this.isEmpty()) {
            this.tail = null;
        }

        return value;
    }

    front() {
        return this.isEmpty() ? null: this.head.value;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
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

// Time Complexity:
// Enqueue: O(1)
// Dequeue: O(1)
// Front: O(1)
// IsEmpty: O(1)
// Size: O(1)
// Space Complexity: O(n) where n is the number of elements in the queue and we use linked list to store them. For operations, we use constant space O(1).

