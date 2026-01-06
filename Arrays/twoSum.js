
// function twoSum (arr) {
//     let ans = [];
//     const target = 10;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i === j) 
//                 continue;
//             if (arr[i] + arr[j] === target) {
//                 ans.push(i, j);
//                 break;
//             } 
//         }
//         if (ans.length > 0) break;
//     }

//     return ans;
// }

// let nums = [2, 1, 8, 5, 7, 3];
// console.log(twoSum(nums));

function twoSum(arr) {
    const target = 10;
    let diff;
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        diff = target - arr[i];
        const index = map.get(diff);

        if (index !== undefined && index >= 0) {
            return [index, i]
        } else {
            map.set(arr[i], i);
        }
    }
}

console.log(twoSum([2, 1, 8, 5, 7, 3]));