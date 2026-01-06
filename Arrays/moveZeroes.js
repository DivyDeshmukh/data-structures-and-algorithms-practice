/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;
    let lastIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastIndex] = nums[i];
            lastIndex++;
        }
    }

    for (let i = lastIndex; i < len; i++) {
        nums[i] = 0;
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));

/*
Two learning:-
1. Instead of thinking about a new array try to see element we are overriding is same then override it and maintain its frequency so that we can later add it.
2. Preserve the last index of valid elements so that after invalids when valid comes then we can add that valid element at correct index preserved.
*/

// With less number of operations
var moveZeroes = function(nums) {
    let lastNonZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== lastNonZero) {
                [nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]];
            }
            lastNonZero++;
        }
    }

    return nums;
};
