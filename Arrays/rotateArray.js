/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;

    if (n <= 1) {
        return nums;
    } 

    const reverseArr = (l, r) => {
        while(l<r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
        
    reverseArr(0, n-k-1);
    reverseArr(n-k, n-1);
    reverseArr(0, n-1);
};

const nums = [1,2,3,4,5,6,7];

rotate(nums, 3);
console.log(nums);

const nums2 = [-1,-100,3,99];
rotate(nums2, 2);
console.log(nums2);


