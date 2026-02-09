class MyMinHeap {
    constructor(arr = []) {
        this.heap = [];

        if (arr.length) {
            this.buildHeap(arr);
        }
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left (i) {
        return 2 * i + 1
    }

    right (i) {
        return 2 * i + 2;
    }

    swap (i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    peek() {
        return this.heap[0];
    }

    heapifyUp(i) {
        while (i > 0) {
            let p = this.parent(i);
            if (this.heap[p] > this.heap[i]) {
                this.swap(p, i);
            }
            i = p;
        }
    }

    heapifyDown(i) {
        let n = this.heap.length;

        while (true) {
            let smallest = i;
            let l = this.left(i);
            let r = this.right(i);

            if (l < n && this.heap[l] < this.heap[smallest]) {
                smallest = l;
            }

            if (r < n && this.heap[r] < this.heap[smallest]) {
                smallest = r;
            }

            if (smallest === i) break;

            this.swap(smallest, i);
            i = smallest;
        }
    }

    removeFromRoot() {
        const val = this.heap[0];
        const lastVal = this.heap.pop();

        if (this.heap.length) {
            this.heap[0] = lastVal;
            this.heapifyDown(0);
        }

        return val;
    }

    size () {
        return this.heap.length;
    }

    buildHeap(arr) {
        this.heap = [...arr];

        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.minHeap = new MyMinHeap();

    for (let num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.minHeap.size() < this.k) {
        this.minHeap.push(val);
    } else if (val > this.minHeap.peek()) {
        this.minHeap.removeFromRoot();
        this.minHeap.push(val);
    }

    return this.minHeap.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));
console.log(kthLargest.add(5));
console.log(kthLargest.add(10));
console.log(kthLargest.add(9));
console.log(kthLargest.add(4));

// Time Complexity: O(log k) for add, O(k) for constructor
// Space Complexity: O(k) for heap storage
