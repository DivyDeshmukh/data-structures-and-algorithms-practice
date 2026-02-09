class MyMaxHeap {

    constructor(arr = []) {
        this.heap = [];

        if (arr.length) {
            this.buildHeap(arr);
        }
    }

    parent (i) {
        return Math.floor((i - 1) / 2);
    }

    left (i) {
        return 2 * i + 1;
    }

    right (i) {
        return 2 * i + 2;
    }

    swap (i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push (val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        let n = this.heap.length;

        while (i > 0) {
            let p = this.parent(i);

            if (this.heap[p] < this.heap[i]) {
                this.swap(i, p);
                i = p;
            } else {
                break;
            }
        }
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

            this.swap(i, largest);
            i = largest;
        }
    }
    
    extractMax () {
        if (!this.heap.length) return null;

        const val = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length) {  
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return val;
    }

    buildHeap (arr) {
        this.heap = [...arr];

        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MyMaxHeap(stones);

    while (maxHeap.heap.length > 1) {
        const max1 = maxHeap.extractMax();
        const max2 = maxHeap.extractMax();

        if (max1 === max2) {
            continue;
        }

        const diff = Math.abs(max1 - max2);
        
        maxHeap.push(diff);
    }

    return maxHeap.heap.length ? maxHeap.heap[0] : 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1]));

// Time Complexity: O(n log n) - Building the heap takes O(n) and we perform O(n) extractions and insertions, each taking O(log n).
// Space Complexity: O(n) - The heap can contain all the stones in the worst case.
