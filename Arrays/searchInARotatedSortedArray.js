/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length-1;

    while (left <= right) {
        let mid = Math.floor((left+right)/2);

        if (nums[mid] === target) {
            return mid;
        }

        // If left half is sorted
        if (nums[mid] >= nums[left]) {
            if (target < nums[left] || target > nums[mid]) {
                left = mid+1;
            } else {
                right = mid-1;
            }
        } 
        // Otherwise right half must be sorted
        else {
            if (target < nums[mid+1] || target > nums[right]) {
                right = mid-1;
            } else {
                left = mid+1;
            }
        }
    }

    return -1;
};

console.log(search([6, 7, 1, 2, 3, 4, 5], 3));

// Time:- O(n) 
// Space:- O(1)
