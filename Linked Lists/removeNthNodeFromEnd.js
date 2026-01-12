/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // we always have to ensure the difference is n no matter if we are using dummy or not
    let dummy = new ListNode(0, head);
    let size = 0;
    let current = head;

    while (current !== null) {
        size++;
        current = current.next;
    }

    current = dummy;
    for (let i = 0; i < (size-n); i++) {
        current = current.next;
    }

    current.next = current.next.next;

    return dummy.next;
};

console.log(removeNthFromEnd());        // TODO: add test cases
// Time Complexity: O(L) where L is the length of the linked list
// Space Complexity: O(1)
