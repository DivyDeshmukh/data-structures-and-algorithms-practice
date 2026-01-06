// 15-07-25
// Brute Force approach to find the maximum subarray sum
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function maxSubArray(arr) {
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6

// Kadane's Algorithm to find the maximum subarray sum
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxSubArray(arr) {    
  let maxSum = arr[0];
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum; // Update max sum if current sum is greater
    }

    if (currentSum < 0) {
      currentSum = 0; // Reset current sum if it becomes negative
    }

  }

  return maxSum;
}

console.log(maxSubArray([-8, -1, 1, 0])); // Output: 6
