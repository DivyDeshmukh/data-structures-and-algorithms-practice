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

    heapifyDown(i) {
        let n = this.heap.length;

        while (true) {
            let smallest = i;
            let l = this.left(i);
            let r = this.right(i);

            if (l < n && this.heap[l][1] < this.heap[smallest][1]) {
                smallest = l;
            }

            if (r < n && this.heap[r][1] < this.heap[smallest][1]) {
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

    buildHeap(arr) {
        this.heap = [...arr];

        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {

    // let distance = [];

    // for (let i = 0; i < points.length; i++) {
    //     const dist = Math.sqrt((Math.pow(points[i][0] - 0, 2)) + (Math.pow(points[i][1] - 0, 2)));
    //     distance.push([i, dist]);
    // }

    // distance.sort((a, b) => a[1]-b[1]);

    // let result = [];

    // for (let i = 0; i < k; i++) {
    //     result.push(points[distance[i][0]]);
    // }

    // return result;

    // Time Complexity: O(n log n) - Sorting the distances takes O(n log n).
    // Space Complexity: O(n) - We store the distances for all points in an array.

    // Approach 2: Min Heap

    let distance = [];

    for (let i = 0; i < points.length; i++) {
        const dist = Math.sqrt((Math.pow(points[i][0] - 0, 2)) + (Math.pow(points[i][1] - 0, 2)));
        distance.push([i, dist]);
    }

    let minHeap = new MyMinHeap(distance);

    let result = [];

    for (let i = 0; i < k; i++) {
        const minDist = minHeap.removeFromRoot();
        result.push(points[minDist[0]]);
    }

    return result;
};

let points = [[3,3],[5,-1],[-2,4]];
console.log(kClosest(points, 2));

// Time Complexity: O(n + k log n) - Building the heap takes O(n) and removing the root k times takes O(k log n). So overall we can write it O(n).
// Space Complexity: O(n) - The heap requires O(n) space to store the elements.