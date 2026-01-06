// Brute Force
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
};


// whenever we get conditions like abs(i - j) <= k then think about if sliding window is possible or not
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let window = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (window.has(nums[i])) return true;

        window.add(nums[i]);

        if (window.size > k) {
            window.delete(nums[i-k]);
        }
    }

    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 4, 2, 1, 4], 3));
