/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(nums[i]);

            backtrack(path, used);

            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return result;
};

console.log(permute([1, 2, 3]));

// Time Complexity: O(n * n!) - There are n! permutations and each permutation takes O(n) time to construct
// Space Complexity: O(n) - The maximum depth of the recursion is n, and we are storing the path in the recursion stack.
