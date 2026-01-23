/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    if(!head || (head && !head.next)) return false;

    // let fast = head.next;
    // let slow = head;

    // while ((slow !== fast) && (fast !== null && fast.next !== null) && (slow !== null && slow.next !== null)) {
    //     fast = fast.next.next;
    //     slow = slow.next;
    // }

    // if (slow === fast) return true;

    // return false;

    // Floyd's Logic
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    
        if (slow === fast) return true;
    }

    return false;
};