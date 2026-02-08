class MaxHeap {
    constructor(arr = []) {
        this.heap = [];

        if (arr.length) {
            this.buildHeap(arr);
        }
    }

    // Helpers
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

    // Heapify up
    heapifyUp(i) {
        while(i > 0) {
            let p = this.parent(i);

            if (this.heap[p] >= this.heap[i]) break;

            this.swap(p, i);
            i = p;
        }
    }

    // Heapify down
    heapifyDown(i) {
        const n = this.heap.length;

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

    // Insert
    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    // Peek
    peek() {
        return this.heap.length ? this.heap[0] : null;
    }

    // Remove Root
    extractMax() {
        if (!this.heap.length) return null;

        const max = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return max;
    }

    // remove arbitrary value
    remove (val) {
        const i = this.heap.indexOf(val);
        const value = this.heap[i];

        if (i === -1) return false;

        const last = this.heap.pop();

        if (i < this.heap.length) {
            this.heap[i] = last;

            let p = this.parent(i);

            if (i > 0 && this.heap[i] > this.heap[p])
                this.heapifyUp(i);
            else
                this.heapifyDown(i);
        }

        return value;
    }

    // Build Heap O(n)
    buildHeap(arr) {
        this.heap = [...arr];

        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    // size
    size () {
        return this.heap.length;
    }

    print() {
        console.log(this.heap);
    }
};

const h = new MaxHeap([10, 30, 20, 5]);

h.push(40);
h.print();        // [40,30,20,5,10]

console.log(h.extractMax()); // 40
h.print();

h.remove(20);
h.print();

/*
Time Complexity (MaxHeap)

parent(i)        → O(1)
left(i)          → O(1)
right(i)         → O(1)
swap(i, j)       → O(1)

heapifyUp(i)     → O(log n)
heapifyDown(i)   → O(log n)

push(val)        → O(log n)
peek()           → O(1)
extractMax()     → O(log n)

remove(val)      → O(n)
  - indexOf      → O(n)
  - heapify      → O(log n)
  → overall      → O(n)

buildHeap(arr)   → O(n)

size()           → O(1)
print()          → O(n)


Space Complexity

Heap storage     → O(n)
Auxiliary space  → O(1)
(buildHeap is in-place)
*/