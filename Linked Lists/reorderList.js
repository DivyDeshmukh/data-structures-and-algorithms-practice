/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    if (!head || !head.next) return head;

    let fast = head;
    let slow = head;
    let prev = null;

    while(fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    if (prev) prev.next = null;

    let prev2 = null;
    let current = slow;

    while (current) {
        let nextNode = current.next;
        current.next = prev2;
        prev2 = current;
        current = nextNode;
    }

    let current1 = head;
    let current2 = prev2;
    let prev3 = current2;

    while(current1 && current2) {
        let nextNode1 = current1.next;
        let nextNode2 = current2.next;
        prev3 = current2;
        current2.next = current1.next;
        current1.next = current2;
        current1 = nextNode1;
        current2 = nextNode2;
    }

    if (current2) {
        prev3.next = current2;
    }
};

console.log(reorderList());         // add test cases if needed
// Time Complexity: O(n)
// Space Complexity: O(1)

// Better and optimized approach
var reorderList = function(head) {
    if (!head || !head.next) return;

    // 1. Find middle
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse second half
    let prev = null, curr = slow.next;
    slow.next = null;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // 3. Merge halves
    let first = head, second = prev;
    while (second) {
        let t1 = first.next;
        let t2 = second.next;

        first.next = second;
        second.next = t1;

        first = t1;
        second = t2;
    }
};
