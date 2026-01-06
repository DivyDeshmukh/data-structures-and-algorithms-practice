/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (hashSet.has(nums[i])) {
            return true;
        }
        hashSet.add(nums[i]);
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 2, 1, 2, 5]));
