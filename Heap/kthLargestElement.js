class MyMaxHeap {
    constructor(arr = []) {
        this.heap = [];

        if (arr.length) {
            this.buildHeap(arr);
        }
    }

    parent(i) {
        return Math.floor(i-1 / 2);
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

    heapifyDown(i) {
        let n = this.heap.length;

        while (true) {
            let largest = i;
            let l = this.left(i);
            let r = this.right(i);

            if (l < n && this.heap[l] > this.heap[largest]) {
                largest = l;
            }

            if (r < n && this.heap[r] > this.heap[largest]) {
                largest = r;
            }

            if (largest === i) break;

            this.swap(largest, i);
            i = largest;
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

    buildHeap(arr) {
        this.heap = [...arr];

        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return nums[k-1];

    const maxHeap = new MyMaxHeap(nums);

    for (let i = 1; i < k; i++) {
        maxHeap.removeFromRoot();
    }

    return maxHeap.heap[0];
};

console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4

// Time Complexity: O(n + k log n) - Building the heap takes O(n) and removing the root k times takes O(k log n).
// Space Complexity: O(n) - The heap requires O(n) space to store the elements.