
// var MyStack = function() {
//     this.q1 = [];
//     this.q2 = [];
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//     this.q1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//     if (this.empty()) return null;

//     if (this.q2.length === 0 || this.q1.length > 0) {
//         while (this.q1.length > 0) {
//             this.q2.unshift(this.q1.shift());
//         }
//     }

//     return this.q2.shift();
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//     if (this.empty()) return null;

//     if (this.q2.length === 0 || this.q1.length > 0) {
//         while (this.q1.length > 0) {
//             this.q2.unshift(this.q1.shift());
//         }
//     }

//     return this.q2[0];
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//     return this.q1.length === 0 && this.q2.length === 0;
// };

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// const stack = new MyStack();
// stack.push(1);
// stack.push(2);
// console.log(stack.top());
// console.log(stack.pop());
// console.log(stack.empty());

// Time Complexity: O(n) for pop and top, O(1) for push and empty
// Space Complexity: O(n) for the queues used to store the elements in the stack

// The above approach is wrong because we are using unshift to add elements in queue but this is not queue behavior. We should use push to add elements in queue and shift to remove elements from queue. Below is the correct implementation.

var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
}

MyStack.prototype.push = function (x) {
    this.q2.push(x);

    while (this.q1.length) {
        this.q2.push(this.q1.shift());
    }

    [this.q1, this.q2] = [this.q2, this.q1];
};

MyStack.prototype.pop = function () {
    return this.q1.shift();
}

MyStack.prototype.pop = function () {
    return this.q1[0];
}

MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.empty());

// Time Complexity: O(n) for push, O(1) for pop and top, O(1) for empty
// Space Complexity: O(n) for the queues used to store the elements in the stack