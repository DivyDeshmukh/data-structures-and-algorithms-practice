/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const res = new Array(n).fill(0);
    const stack = [];   // stores indices

    for (let i = 0; i < n; i++) {
        while (
            stack.length > 0 
            && 
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const prevIndex = stack.pop();
            res[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return res;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]
// Time Complexity: O(n) because each element is pushed and popped at most once
// Space Complexity: O(n) for the stack in the worst case when temperatures are in decreasing order
