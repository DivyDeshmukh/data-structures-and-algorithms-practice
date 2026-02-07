/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // Approach1:- Brute Force
    // let list = [];
    // for (let i = 0; i <= nums.length-k; i++) {
    //     let maxi = nums[i];
    //     for (let j = i+1; j <= i+k-1; j++) {
    //         maxi = Math.max(maxi, nums[j]);
    //     }

    //     list.push(maxi);
    // }

    // return list;

    // Time:- O(n*k)
    // space:- O(n-k)
    
    // Approach2:- Using dequeue & monotonic stack
    let deque = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length && deque[0] <= (i-k)) {
            deque.shift();
        }

        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k-1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));

// Time of Approach2:- O(n)
// Space of Approach2:- O(k) Because deque stores only window indices.
