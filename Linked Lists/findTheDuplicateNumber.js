/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (j === i) continue;

    //         if (nums[i] === nums[j]) return nums[j];
    //     }
    // }

    // nums.sort((a, b) => a-b);

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === nums[i+1]) return nums[i];
    // }

    // Floyd’s Tortoise and Hare (Cycle Detection)
    // considering indexes as node and values as next pointer
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    slow = nums[0];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;

    // Time:- O(n)
    // Space:- O(1)
};

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));

/*
Note:- Here is a **clean, short, preservable note** you can keep for revision:

---

### Find the Duplicate Number — Why Floyd’s Cycle Detection Works

Given an array `nums` of length `n + 1` where each value lies in `[1, n]`, we can treat the array as a **functional graph**:

* Each index is a node
* Each value `nums[i]` is a pointer to the next node

Because:

* There are `n + 1` nodes
* Each node points to one of only `n` possible nodes

a **cycle is guaranteed** (pigeonhole principle).

The duplicate number corresponds to the **entry point of the cycle**, since two different indices point to the same value.

Using Floyd’s algorithm:

* A slow pointer moves one step
* A fast pointer moves two steps
* They must meet inside the cycle

After the meeting:

* Reset one pointer to the start
* Move both pointers one step at a time
* The point where they meet again is the **cycle entry**, which is the duplicate number

**Time Complexity:** `O(n)`
**Space Complexity:** `O(1)`
**Array is not modified**

---
*/