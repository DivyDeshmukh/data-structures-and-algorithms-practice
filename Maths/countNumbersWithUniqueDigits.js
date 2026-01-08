/**
 * @param {number} n
 * @return {number}
 */
// var countNumbersWithUniqueDigits = function(n) {
//     const limit = Math.pow(10, n);
//     let count = 0;

//     for (let i = 0; i < limit; i++) {
//         const s = String(i);
//         const set = new Set();
//         let isUnique = true;

//         for (const ch of s) {
//             if (set.has(ch)) {
//                 isUnique = false;
//                 break;
//             }
//             set.add(ch);
//         }

//         if (isUnique) count++;
//     }

//     return count;
// };

// console.log(countNumbersWithUniqueDigits(8));

// Time:- O(10^n * n) & Space:- O(1)

// Optimal Approach using combinatorics
/*
### **Count Numbers With Unique Digits — Optimal Technique (Short Note)**

Instead of brute-forcing all numbers from `0` to `10^n`, use **combinatorics**.
A number can have **at most 10 unique digits (0–9)**, so for `n > 10` the result doesn’t change.

For `k`-digit numbers:

* First digit: `9` choices (`1–9`, no leading zero)
* Remaining digits: decreasing choices (`9, 8, 7, ...`)

Count:

```
1-digit → 10
2-digit → 9 × 9
3-digit → 9 × 9 × 8
...
```

Sum all counts up to `n`.

**Time:** `O(n)`
**Space:** `O(1)`
**Key Insight:** Count permutations directly instead of enumerating numbers.

✔ Optimal and interview-ready
*/

var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) return 1;

    let result = 10;        // starting with all 1 digit numbers
    let unique = 9;         // current count
    let available = 9;      // digits left to use

    // the i here represent number of digits and we are counting how many unqiue are possible
    for (let i = 2; i <= n && available > 0; i++) {
        unique *= available;
        result += unique;
        available--;
    }

    return result;
};