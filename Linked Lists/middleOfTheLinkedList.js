/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // let count = 0;
    // let current = head;
    // while(current) {
    //     current = current.next;
    //     count++;
    // }

    // let mid = Math.ceil((count+1)/2);

    // current = head;
    // while(mid > 1) {
    //     current = current.next;
    //     mid--;
    // }

    // return current;

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};