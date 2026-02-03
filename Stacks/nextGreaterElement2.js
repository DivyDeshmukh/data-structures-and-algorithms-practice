/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    // Approach 1: Brute Force (Circular Array)
    // let n = nums.length;
    // let result = [];

    // for (let i = 0; i < n; i++) {
    //     let nge = -1;

    //     // check next n-1 elements circularly
    //     for (let k = 1; k < n; k++) {
    //         let j = (i + k) % n;

    //         if (nums[j] > nums[i]) {
    //             nge = nums[j];
    //             break;
    //         }
    //     }

    //     result.push(nge);
    // }

    // return result;

    // Final Time Complexity: O(n²) as we have a nested loop
    // Final Space Complexity: O(1) as we are using only constant space excluding the output array

    // Approach 2: Monotonic Stack (decreasing)

};