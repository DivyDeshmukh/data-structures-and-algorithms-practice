/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
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

    // Approach 2:- Monotonic Stack

    let n = nums.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    // traverse array twice
    for (let i = 0; i < 2 * n; i++) {
        let idx = i % n;

        // resolve next greater for elements in stack
        while (stack.length && nums[stack[stack.length - 1]] < nums[idx]) {
            let topIndex = stack.pop();
            result[topIndex] = nums[idx];
        }

        // only push indices during first pass
        if (i < n) {
            stack.push(idx);
        }
    }

    return result;

    // The stack stores unprocessed elements. The first pass resolves all elements  with a next greater element on the right, and the second pass only exists to resolve the remaining elements using circular traversal. We don’t push in the second pass because no new candidates exist.
};