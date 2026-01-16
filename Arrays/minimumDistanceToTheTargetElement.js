/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let minDistance = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            minDistance = Math.min(minDistance, Math.abs(i - start));
        }
    }

    return minDistance;
};

console.log(getMinDistance([1,2,3,4,5,6,7,8,9,10], 5, 0)); // 4

// Time:- O(n) & Space:- O(1)
