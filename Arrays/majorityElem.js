// 16-07-25
// Brute Force approach to find the majority element
// Time Complexity: O(n)
// Space Complexity: O(n)
// function majorityElem(arr) {
//     let freqCount = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         if (freqCount.has(arr[i])) {
//             freqCount.set(arr[i], freqCount.get(arr[i]) + 1);
//         } else {
//             freqCount.set(arr[i], 1);
//         }

//         if (freqCount.get(arr[i]) > (arr.length/2)) {
//             return arr[i]; // Return the majority element if found
//         }
//     }
// }

// console.log(majorityElem([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Output: 4

// more optimized approach using Moore's Voting Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
function majorityElem(arr) {
    let candidate = null;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i]; // Set the candidate
        }

        count += (arr[i] === candidate) ? 1 : -1; // Increment or decrement the count
    }

    if (count <= 0) {
        return -1; // If no candidate is found
    }

    return candidate; // Return the candidate as the majority element
}

console.log(majorityElem([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Output: 4
