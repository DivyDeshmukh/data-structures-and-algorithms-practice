/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    for (let i = 0; i < nums.length-2; i++) {
        for (let j = i+1; j < nums.length-1; j++) {
            for (let k = j+1; k < nums.length; k++) {
                if (((nums[i] < nums[j]) && (nums[j] < nums[k])) && ((i < j) && (j < k))) {
                    return true;
                }
            }
        }
    }

    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
// Time:- O(n^3) TLE ERROR
// Space:- O(1)


// Optimal Approach: Using two variables to track the smallest and second smallest elements
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (first >= nums[i]) {
            first = nums[i];
        } else if (second >= nums[i]) {
            second = nums[i];
        } else {
            return true;
        }
    }

    return false;
};

// Time:- O(n)
// Space:- O(1)