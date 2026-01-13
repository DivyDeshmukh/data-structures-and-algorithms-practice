/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;

    let hasOne = false;

    for (let num of nums) {
        if (num === 1) {
            hasOne = true;
            break;
        }
    }

    if (!hasOne) return 1;

    // Logic:- the answer will lie between [1, ... n+1] 
    
    // step1:- remove all negatives and elements greater than n as we only want to keep elements that are in range [1...n] and if any number that is not then we will simply return n+1
    for (let i = 0; i < n; i++) {
        // Yes, we deliberately replace 0 because it is not a valid positive number, and because using it would break the index-mapping step (0 - 1 = -1).
        if ((nums[i] <= 0) || (nums[i] > n)) {
            nums[i] = 1;
        }
    }

    // we got all elements that belongs to range [1,...n] so there indexes will fall under n 
    
    // Step2:- Now treat indices as number and make (val-1) negative if that number is present in nums
    
    for (let i = 0; i < n; i++) {
        let idx = Math.abs(nums[i]) - 1;
        // we are altering the exact value to negative and not assigning nums[i] because later we will use it also to identify whether that number is present or not in the array.
        if (nums[idx] > 0) {
            nums[idx] = -nums[idx];
        }
    }

    // Step3:- iterate and return index of first missing positive in the array
    
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) return i+1;
    }

    return n+1;
};

console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));

// Time:- O(n) because we are iterating the array multiple times but each iteration is O(n)
// Space:- O(1)  because we are not using any extra space except some variables.