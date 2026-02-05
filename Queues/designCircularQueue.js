/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.q = [];
    this.frontIndex = 0;
    this.rearIndex = -1;
    this.size = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {

    if (this.isFull()) return false;

    let newIndex = this.rearIndex + 1;
    this.q[newIndex % this.size] = value;
    this.rearIndex = newIndex;
    return true;
};  

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;

    this.frontIndex++;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.q[this.frontIndex % this.size];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.q[this.rearIndex % this.size];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return (this.rearIndex - this.frontIndex +  1) === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.rearIndex - this.frontIndex +  1) === this.size;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

const circularQueue = new MyCircularQueue(3);
console.log(circularQueue.enQueue(1));
console.log(circularQueue.enQueue(2));
console.log(circularQueue.enQueue(3));
console.log(circularQueue.enQueue(4));
console.log(circularQueue.Rear());
console.log(circularQueue.isFull());
console.log(circularQueue.deQueue());
console.log(circularQueue.enQueue(4));
console.log(circularQueue.Rear());

// Time Complexity: O(1) for enQueue, O(1) for deQueue, O(1) for Front, O(1) for Rear, O(1) for isEmpty, O(1) for isFull
// Space Complexity: O(n) where n is the size of the circular queue
