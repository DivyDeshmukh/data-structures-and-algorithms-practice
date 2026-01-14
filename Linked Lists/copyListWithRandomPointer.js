/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    // let current = head;
    // let dummy = new _Node(0, null, null);
    // let tail = dummy;

    // // -------- Pass 1: create nodes and store random as index --------
    // while (current) {
    //     let randomIndex = -1;

    //     if (current.random !== null) {
    //         let temp = head;
    //         let idx = 0;
    //         while (temp !== current.random) {
    //             temp = temp.next;
    //             idx++;
    //         }
    //         randomIndex = idx;
    //     }

    //     tail.next = new _Node(current.val, null, randomIndex);
    //     tail = tail.next;
    //     current = current.next;
    // }

    // // -------- Pass 2: resolve random indices to pointers --------
    // let copyCurr = dummy.next;

    // while (copyCurr) {
    //     if (copyCurr.random !== -1) {
    //         let temp = dummy.next;
    //         let idx = copyCurr.random;

    //         while (idx > 0) {
    //             temp = temp.next;
    //             idx--;
    //         }

    //         copyCurr.random = temp;
    //     } else {
    //         copyCurr.random = null;
    //     }

    //     copyCurr = copyCurr.next;
    // }

    // return dummy.next;

    // Time: O(n²)
    // Space: O(1)

    // Approach2:- 
    // const map = new Map();
    // let curr = head;

    // First pass: copy nodes
    // while (curr) {
    //     map.set(curr, new Node(curr.val));
    //     curr = curr.next;
    // }

    // curr = head;

    // Second pass: assign next & random
    // while (curr) {
    //     map.get(curr).next = curr.next ? map.get(curr.next) : null;
    //     map.get(curr).random = curr.random ? map.get(curr.random) : null;
    //     curr = curr.next;
    // }

    // return map.get(head);

    // Time:- O(n)
    // Space:- O(n)

    // Approach3:-

    let curr = head;

    // Step 1: clone nodes
    while (curr) {
        let copy = new Node(curr.val);
        copy.next = curr.next;
        curr.next = copy;
        curr = copy.next;
    }

    // Step 2: assign random pointers
    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    // Step 3: separate lists
    curr = head;
    let newHead = head.next;

    while (curr) {
        let copy = curr.next;
        curr.next = copy.next;
        copy.next = copy.next ? copy.next.next : null;
        curr = curr.next;
    }

    return newHead;

    // Time:- O(n)
    // Space:- O(1)
};