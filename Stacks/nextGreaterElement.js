/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // let result = [];

    // for (let i = 0; i < nums1.length; i++) {

    //     let j = 0;
    //     while (nums2.indexOf(nums1[i]) !== j) {
    //         j++;
    //     }

    //     let nge = -1;
    //     for (j = j+1; j < nums2.length; j++) {
    //         if (nums2[j] > nums1[i]) {
    //             nge = nums2[j];
    //             break;
    //         }
    //     }

    //     result.push(nge);
    // }

    // return result;

    // Final Time Complexity: O(m · n²) as indexOf is O(n) and we have a nested loop
    // Final Space Complexity: O(1) as we are using only constant space excluding the output array

    // Approach 2:- Monotonic Stack (decreasing)
    let stack = [];
    let map = new Map();

    for (let i = nums2.length-1; i >= 0; i--) {
        while(stack.length && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        } 

        if (stack.length === 0) {
            map.set(nums2[i], -1);
        } else {
            map.set(nums2[i], stack[stack.length - 1]);
        }

        stack.push(nums2[i]);
    }

    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        result[i] = map.get(nums1[i]);
    }

    return result;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));

// Time Complexity: O(m + n) where m is the length of nums1 and n is the length of nums2
// Space Complexity: O(n) for the stack and map used to store next greater elements of nums2