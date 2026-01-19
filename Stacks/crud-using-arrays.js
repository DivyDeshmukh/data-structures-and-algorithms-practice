// Stacks Implementation with CRUD operations using Array

class ArrayStack {
    constructor () {
        this.items = [];
    }

    // Add element to top
    push(value) {
        this.items.push(value);
    }

    // Remove and return element from top
    pop () {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    // Return top without removing
    peek () {
        if (this.isEmpty()) return null;
        // .length property in js is O(1) as JS engine stores it as a value
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Number of elements
    size() {
        return this.items.length;
    }
}

const arrStack = new ArrayStack();
arrStack.push(10);
arrStack.push(20);
arrStack.push(30);
arrStack.push(40);
console.log(arrStack.pop());
console.log(arrStack.peek());
console.log(arrStack.isEmpty());
console.log(arrStack.size());

// Time Complexity Analysis:
// 1. push: O(1) - Adding an element to the end of the array
// 2. pop: O(1) - Removing the last element from the array
// 3. peek: O(1) - Accessing the last element of the array
// 4. isEmpty: O(1) - Checking the length of the array
// 5. size: O(1) - Accessing the length property of the array

// Space Complexity of total Stack: O(n) - where n is the number of elements in the stack
// All stack operations use constant extra memory per operation (auxiliary space).