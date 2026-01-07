/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let lastMin = -1;   // last index where nums[i] == minK
    let lastMax = -1;   // last index where nums[i] == maxK
    let lastBad = -1;   // last index where nums[i] < minK or nums[i] > maxK
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        // If out of range, mark bad index
        if (nums[i] < minK || nums[i] > maxK) {
            lastBad = i;
        }

        // Update last positions of minK and maxK
        if (nums[i] === minK) lastMin = i;
        if (nums[i] === maxK) lastMax = i;

        // Count valid subarrays ending at i
        count += Math.max(0, Math.min(lastMin, lastMax) - lastBad);
    }

    return count;
};
console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5));
console.log(countSubarrays([1, 1, 1, 1, 1], 1, 1));

// note:- Most subarray counting problems reduce to index math, not iteration.