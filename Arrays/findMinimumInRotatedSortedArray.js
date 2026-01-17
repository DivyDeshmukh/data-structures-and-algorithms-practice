/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // minimum is in right half
            left = mid + 1;
        } else {
            // minimum is at mid or left half
            right = mid;
        }
    }

    return nums[left];
};



console.log(findMin([4, 5, 6, 7, 8, 9, 0, 1, 2, 3]));
console.log(findMin([11,13,15,17]));
