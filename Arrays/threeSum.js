/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // sorting to ensure that we do not have any duplicates, and if similar values also we have then they will be aligned one after another so we can easily skip them once we create a pair once
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    let target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    // they will not be equal because indexes should not be same
    while (left < right) {
      if (nums[left] + nums[right] < target) {
        left++;
      } else if (nums[left] + nums[right] > target) {
        right--;
      } else {
        if (nums[left] + nums[right] === target) {
          result.push([nums[i], nums[left], nums[right]]);
        }

        while (left < right && (nums[left + 1] === nums[left])) {
          left++;
        }

        while (left < right && nums[right - 1] === nums[right]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return result;
};

// Time:- O(N^2) where N is the length of the input array nums. This is because we have a nested loop: the outer loop runs N times, and for each iteration of the outer loop, the inner while loop can run up to N times in total across all iterations of the outer loop.
// Space:- O(1) if we do not consider the space required for the output array. The sorting is done in-place, and we are using only a constant amount of extra space for variables.