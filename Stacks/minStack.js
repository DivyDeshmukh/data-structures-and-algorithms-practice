
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let poppedElem = this.stack.pop();
    if(poppedElem === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop(); 
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Time Complexity: O(1) for all operations
// Space Complexity: As we have two stacks, in worst case when all elements are minimum elements, space complexity will be O(2n) which is O(n)

// Approach 2:- Using Linked List

var MinStack = function() {
    // this.stack = [];
    // this.minStack = [];

    // Approach 2:- Using Linked lists
    this.head = null;
};

function Node(val, min, next) {
    this.val = val;
    this.min = min;
    this.next = next;
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // this.stack.push(val);

    // if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    //     this.minStack.push(val);
    // }

    if (this.head === null) {
        this.head = new Node(val, val, null);
    } else {
        this.head = new Node(val, Math.min(val, this.head.min), this.head);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // let poppedElem = this.stack.pop();
    // if(poppedElem === this.minStack[this.minStack.length - 1]) {
    //     this.minStack.pop(); 
    // }

    this.head = this.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // return this.stack[this.stack.length - 1];
    return this.head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // return this.minStack[this.minStack.length - 1];
    return this.head.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Time Complexity: O(1) for all operations
// Space Complexity: As we are using linked list, in worst case when all elements are minimum elements, space complexity will be O(n)