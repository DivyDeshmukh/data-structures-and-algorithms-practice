/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function(nums1, nums2) {
    let i = 0, j = 0;
    let sum1 = 0, sum2 = 0, result = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            sum1 += nums1[i];
            i++;
        } else if (nums1[i] > nums2[j]) {
            sum2 += nums2[j];
            j++;
        } else {
            result += Math.max(sum1, sum2);
            result += nums1[i];
            sum1 = 0;
            sum2 = 0;
            i++;
            j++;
        }
    }

    while (i < nums1.length) {
        sum1 += nums1[i];
        i++;
    }

    while (j < nums2.length) {
        sum2 += nums2[j];
        j++;
    }

    result += Math.max(sum1, sum2);
    return result % (Math.pow(10, 9) + 7);
};

console.log(maxSum([2,4,5,8,10], [4,6,8,9]));
console.log(maxSum([2,4,5,8,10], [2,4,5,8,10]));

// Time:- O(m + n) where m and n are the lengths of nums1 and nums2 respectively.
// Space:- O(1)