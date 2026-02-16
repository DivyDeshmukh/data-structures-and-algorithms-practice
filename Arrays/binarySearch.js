// Recursive Approach:-
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

console.log(binarySearch([1, 4, 6, 89, 222, 2222, 9999], 222));

// Time Complexity: O(log n)
// Space Complexity: O(log n) due to recursive call stack
