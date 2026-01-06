// 16-07-25
// Brute Force approach to find the pair with a Target Sum
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function pairSum(arr, target) {
    let pairs = [];
    for ( let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push(arr[i], arr[j]);
                return pairs; // Return the first pair found
            }
        }
    }

    return pairs.length > 0 ? pairs : "No pairs found";
}

console.log(pairSum([1, 2, 3, 4, 5], 9)); // Output: [4, 5]

// Optimized approach using a two-pointer technique
// This assumes the array is sorted
// Time Complexity: O(n)
// Space Complexity: O(1)
function pairSum(arr, target) {
    let pairs = [];
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        const sum = arr[i] + arr[j];
        if (sum === target) {
            pairs.push(arr[i], arr[j]);
            return pairs; // Return the first pair found
        } else if (sum < target) {
            i++; // Move the left pointer to the right
        } else {
            j--; // Move the right pointer to the left
        }
    }

    return pairs.length > 0 ? pairs : "No pairs found"; // If no pair is found
}

console.log(pairSum([1, 2, 3, 4, 5], 9)); // Output: [4, 5]

// if array is not sorted, we can use a hash map to store the elements
// Time Complexity: O(n)
// Space Complexity: O(n)   

function pairSum(arr, target) {
    let seen = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i]; // Return the pair
        }
        seen.set(arr[i], i);
    }

    return "No pairs found"; // If no pair is found
}

console.log(pairSum([1, 2, 3, 4, 5], 9)); // Output: [4, 5]
