/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    function backtrack (index, path) {
        if(index === nums.length) {
            result.push([...path]);
            return;
        }

        path.push(nums[index]);
        backtrack(index + 1, path);

        path.pop();

        backtrack(index + 1, path);
    }

    backtrack(0, []);
    return result;
};

console.log(subsets([1,2,3]));

// Time Complexity: O(2^n) - Each element can either be included or excluded
// Space Complexity: O(n) - The maximum depth of the recursion is n, and we are storing the path in the recursion stack.