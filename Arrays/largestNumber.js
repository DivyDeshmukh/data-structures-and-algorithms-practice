/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(String);

    // ok and we repeat this pairwise sorting until each pair is sorted? just say yes or no
    nums.sort((a, b) => {
        const ab = a+b;
        const ba = b+a;

        if (ab > ba) return -1;
        if (ab < ba) return 1;
        return 0;
    });

    if (nums[0] === "0") return "0";

    return nums.join("");
};

console.log(largestNumber([]));

// Time:- O(n log n) & Space:- O(n · k) k is the average length of numbers when converted to strings

/*
Note:- ### **Largest Number – Lexicographic Trick (Quick Note)**

**Lexicographical order** = compare strings **left to right**, character by character (like dictionary order).
The **first different character decides** (`'9' > '3'`, `'3' > '0'`, etc.).

**Key trick for this problem:**

* Convert numbers to strings
* For any two strings `a`, `b`, compare:

  * `a + b` vs `b + a`
* If `a + b` is lexicographically larger → put `a` before `b`

**Why it works:**

* `a + b` and `b + a` have **equal length**
* Bigger digits earlier always make the final number larger
* Lexicographic comparison matches numeric intent here

**Mental shortcut to remember:**

> “Don’t compare numbers — compare **which concatenation gives a bigger prefix**.”

That’s the entire pattern.
*/