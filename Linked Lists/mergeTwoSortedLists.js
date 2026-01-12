/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // let mergedList = null;
    // let current1 = list1;
    // let current2 = list2;
    // let current3 = mergedList;
    // let newNode1 = null;
    // let newNode2 = null;

    // while(current1 !== null && current2 !== null) {
    //     if (current1.val === current2.val) {
    //         if (!mergedList) {
    //             newNode2 = new ListNode(current2.val, null);
    //             mergedList = new ListNode(current1.val, newNode2);
    //         } else {
    //             newNode2 = new ListNode(current2.val, null);
    //             newNode1 = new ListNode(current1.val, newNode2);
    //             current3.next = newNode1;
    //         }
    //         current3 = newNode2;
    //         current1 = current1.next;
    //         current2 = current2.next;
    //     } else if (current1.val < current2.val) {
    //         if (!mergedList) {
    //             mergedList = new ListNode(current1.val, null);
    //             current3 = mergedList;
    //         } else {
    //             newNode1 = new ListNode(current1.val, null);
    //             current3.next = newNode1;
    //             current3 = newNode1;
    //         }

    //         current1 = current1.next;
    //     } else {
    //         if (!mergedList) {
    //             mergedList = new ListNode(current2.val, null);
    //             current3 = mergedList;
    //         } else {
    //             newNode2 = new ListNode(current2.val, null);
    //             current3.next = newNode2;
    //             current3 = newNode2;
    //         }

    //         current2 = current2.next;
    //     }
    // }

    // while(current1 !== null) {
    //     if (!mergedList) {
    //         mergedList = new ListNode(current1.val, null);
    //         current3 = mergedList;
    //     } else {
    //         newNode1 = new ListNode(current1.val, null);
    //         current3.next = newNode1;
    //         current3 = newNode1;
    //     }

    //     current1 = current1.next;
    // }

    // while(current2 !== null) {
    //     if (!mergedList) {
    //         mergedList = new ListNode(current2.val, null);
    //         current3 = mergedList;
    //     } else {
    //         newNode2 = new ListNode(current2.val, null);
    //         current3.next = newNode2;
    //         current3 = newNode2;
    //     }

    //     current2 = current2.next;
    // }

    // return mergedList;
    // Time:- O(n + m)
    // Space:- O(n+m)

    // Approach 2: Iterative with dummy node
    // Time:- O(n + m)
    // Space:- O(1)
    let dummy = new ListNode(-1);
    let tail = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    // Attach remaining nodes
    tail.next = list1 !== null ? list1 : list2;

    return dummy.next;

    // At every step, tail points to the last node of the merged list, and list1 / list2 point to the smallest unprocessed nodes of their respective lists.
};

// console.log(mergeTwoLists());    create and pass 2 linked lists to test
