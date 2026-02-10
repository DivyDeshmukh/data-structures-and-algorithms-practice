/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = new Array(26).fill(0);

    for (let t of tasks) {
        freq[t.charCodeAt(0) - 65]++;
    }

    // sorting is constant
    freq.sort((a, b) => b-a);

    const maxFreq = freq[0];
    let maxCount = 0;

    for (let f of freq) {
        if (f === maxFreq) maxCount++;
    }

    return Math.max(
        tasks.length,
        (maxFreq - 1) * (n + 1) + maxCount
    )
};

console.log(leastInterval(["A","A","A","B","B","B"], 2)); // 8
console.log(leastInterval(["A","A","A","B","B","B"], 0));

// Time Complexity: O(N) where N is the number of tasks, since we need to count the frequency of each task. Sorting the frequency array takes O(1) time since it has a fixed size of 26.
// Space Complexity: O(1) since the frequency array has a fixed size of 26, regardless of the input size.
