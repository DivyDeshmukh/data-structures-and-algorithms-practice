// Stacks Implementation with CRUD operations using Linked List

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor () {
        this.head = null;    // points to the top node
        this.length = 0;     // to avoid O(n) time complexity later we are maintaining this
    }

    // Add element at the top (head)
    push (value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Remove and Return top element
    pop () {
        if (this.isEmpty()) return null; // Stack is empty
        let poppedValue = this.head.value;
        this.head = this.head.next;
        this.length--;
        return poppedValue;
    }

    // Return top element without removal
    peek () {
        return this.isEmpty() ? null : this.head.value;
    }

    // Check if the stack is empty
    isEmpty () {
        return this.head === null;
    }

    // size 
    size () {
        return this.length;
    }
}

const llStack = new LinkedListStack();

llStack.push(40);
llStack.push(30);
llStack.push(20);
llStack.push(10);

console.log(llStack.pop());
console.log(llStack.size());
console.log(llStack.isEmpty());
console.log(llStack.peek());

// Time Complexity Analysis:
// 1. push: O(1) - Adding an element at the head of the linked list
// 2. pop: O(1) - Removing the head element of the linked list
// 3. peek: O(1) - Accessing the head element of the linked list
// 4. isEmpty: O(1) - Checking if head is null
// 5. size: O(1) - Accessing the length property

// Space Complexity of total stack: O(n) - where n is the number of elements in the stack.
// All stack operations use constant extra memory per operation (auxiliary space).