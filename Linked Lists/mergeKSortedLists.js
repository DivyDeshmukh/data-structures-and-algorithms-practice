/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // let dummy = new ListNode(0);

    // for (let i = 0; i < lists.length; i++) {
    //     let current1 = lists[i];
    //     let current2 = dummy.next;
    //     let tail = dummy;

    //     while (current1 !== null && current2 !== null) {
    //         if (current1.val <= current2.val) {
    //             tail.next = current1;
    //             current1 = current1.next;
    //         } else {
    //             tail.next = current2;
    //             current2 = current2.next;
    //         }
    //         tail = tail.next;
    //     }

    //     tail.next = current1 !== null ? current1 : current2;
    // }

    // return dummy.next;
    
    // Time:- O(k · N)      // k is lists.length and N is number of total nodes 
    // Space:- O(1)

    // Approach 2:- combine all nodes and then implement sort function
    
    // -------- Step 0: Combine all lists (order doesn't matter) --------
    let head = null;
    let tail = null;

    for (let list of lists) {
        if (!list) continue;

        if (!head) {
            head = list;
            tail = list;
        } else {
            tail.next = list;
        }

        // move tail to the end of the attached list
        while (tail.next) {
            tail = tail.next;
        }
    }

    if (!head) return null;

    // -------- Step 1: Merge Sort on Linked List --------
    return sortList(head);

    // Time:- O(N log N)
    // Space:- O(log N)   // recursion stack

    // Approach 3:- Using Heap Will solve later
    // Time:- O(N log k)        Heap size ≤ k & Each of N nodes is pushed and popped once
    // Space:- O(k)             Heap stores at most k nodes

};

/* ---------- Helper Functions ---------- */

// Find middle of linked list and split it
function getMiddle(head) {
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // split into two halves
    if (prev) prev.next = null;

    return slow; // head of second half
}

// Merge two sorted linked lists
function merge(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    tail.next = l1 || l2;
    return dummy.next;
}

// Merge sort for linked list
function sortList(head) {
    if (!head || !head.next) return head;

    let mid = getMiddle(head);

    let left = sortList(head);
    let right = sortList(mid);

    return merge(left, right);
}