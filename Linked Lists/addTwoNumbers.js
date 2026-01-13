/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let current = l1;
    let num1 = "";
    let num2 = "";

    while(current) {
        num1 += String(current.val);
        current = current.next;
    }

    current = l2;

    while(current) {
        num2 += String(current.val);
        current = current.next;
    }

    num1 = num1.split('').reverse().join('');
    num2 = num2.split('').reverse().join('');

    const sum = BigInt(num1) + BigInt(num2);
    let reversedResult = String(sum).split('').reverse();

    let dummy = new ListNode(-1);
    current = dummy;

    for (let char of reversedResult) {
        current.next = new ListNode(Number(char), null);
        current = current.next;
    }

    return dummy.next;
};

// Digits are stored reversed so addition can be done digit-by-digit using carry

// Digit-by-digit simulates real addition

// Time: O(m + n)

// Space: O(m + n)

// Approach2:- Simulating the addition digit by digit
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    // Note:- the value of carry can either be 0 or 1 as the sum of two digits can never exceed 19 so 9+9 and we can have a previous carry that is 1

    while(l1 !== null || l2 !== null || carry !== 0) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;

        let sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};

// Time:- O(max(m, n))
// Space:- O(max(m, n))
// Total Space (including output): O(max(m, n)) & Aux Space: O(1)
