/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // Approach 1:- Time:- O(n) & Space:- O(n)
    
    // let current = head;
    // let size = 0;

    // while (current) {
    //     current = current.next;
    //     size++;
    // }

    // let replaceCount = Math.floor(size/k);

    // let lists = [];
    // current = head;
    
    // for (let i = 0; i < replaceCount; i++) {
    //     prev = null;
        
    //     for (let j = 1; j <= k; j++) {
    //         let nextNode = current.next;
    //         current.next = prev;
    //         prev = current;
    //         current = nextNode;
    //     }

    //     lists.push(prev);
    // }
    
    // if (current && lists.length) {
    //     let lastReversed = lists[lists.length-1];
    //     while(lastReversed && lastReversed.next) {
    //         lastReversed = lastReversed.next;
    //     }
    //     lastReversed.next = current;
    // }

    // let dummy = new ListNode(0);
    // let tail = dummy;

    // for (let i = 0; i < lists.length; i++) {
    //     tail.next = lists[i];

    //     for (let j = 1; j <= k; j++) {
    //         tail = tail.next;
    //     }
    // }

    // return dummy.next;

    // Approach 2:- Time:- O(n) & Space:- O(1)
    if (!head || k === 1) return head;

    // Step 1: compute size
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }

    let dummy = new ListNode(0);
    dummy.next = head;

    let groupPrev = dummy;
    curr = head;

    let groups = Math.floor(size / k);

    // Step 2: reverse groups
    for (let g = 0; g < groups; g++) {
        let prev = null;
        let tail = curr; // will become tail after reversal

        for (let i = 0; i < k; i++) {
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        // Step 3: connect immediately
        groupPrev.next = prev;
        tail.next = curr;
        groupPrev = tail;
    }

    return dummy.next;
};