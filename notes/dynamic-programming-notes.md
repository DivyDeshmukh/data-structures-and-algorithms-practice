# Dynamic Programming (DP) – Complete Notes

## 1. What is Dynamic Programming?

Dynamic Programming is a technique used to solve problems by breaking them into **smaller overlapping subproblems**, solving each subproblem **only once**, and storing their results.

Instead of recalculating the same work repeatedly, DP **stores results and reuses them**.

### Key Idea
Solve a problem by combining solutions of **smaller subproblems**.

---

# 2. When to Use Dynamic Programming

A problem can be solved using DP if it has the following two properties:

## 2.1 Overlapping Subproblems

The same subproblems appear multiple times.

Example: Fibonacci

fib(5)

fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   └── fib(1)
│   └── fib(2)
└── fib(3)
    ├── fib(2)
    └── fib(1)

Here:
- fib(3) calculated twice
- fib(2) calculated three times

DP avoids recomputing them.

---

## 2.2 Optimal Substructure

The optimal solution of a problem can be constructed from optimal solutions of its subproblems.

Example:

Shortest path problems  
Knapsack  
Longest subsequence problems

---

# 3. Ways to Implement Dynamic Programming

There are two main ways.

## 3.1 Memoization (Top-Down)

Uses recursion + caching.

Steps:
1. Write recursive solution
2. Store results of subproblems
3. Reuse stored results

### Example: Fibonacci

Recursive solution

```

fib(n) = fib(n-1) + fib(n-2)

````

Memoized solution:

```javascript
function fib(n, dp = {}) {

    if (n <= 1) return n

    if (dp[n] !== undefined)
        return dp[n]

    dp[n] = fib(n-1, dp) + fib(n-2, dp)

    return dp[n]
}
````

### Complexity

Time: O(n)
Space: O(n)

---

## 3.2 Tabulation (Bottom-Up)

Uses iteration and builds the solution from smallest problems.

### Steps

1. Define DP table
2. Initialize base cases
3. Fill the table using recurrence relation

### Fibonacci Example

```javascript
function fib(n){

    const dp = new Array(n+1).fill(0)

    dp[1] = 1

    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}
```

### Table

| i | dp[i] |
| - | ----- |
| 0 | 0     |
| 1 | 1     |
| 2 | 1     |
| 3 | 2     |
| 4 | 3     |
| 5 | 5     |

---

# 4. Steps to Solve Any DP Problem

Always follow this order.

## Step 1: Define State

State represents the meaning of dp value.

Example:

```
dp[i] = number of ways to reach step i
```

---

## Step 2: Define Transition

Relation between states.

Example:

```
dp[i] = dp[i-1] + dp[i-2]
```

---

## Step 3: Base Case

Initial values.

Example:

```
dp[0] = 1
dp[1] = 1
```

---

## Step 4: Compute Order

Decide how DP table will be filled.

Usually:

* left to right
* top to bottom

---

# 5. 1D Dynamic Programming

Used when state depends on **one variable**.

Examples:

* Fibonacci
* Climbing Stairs
* House Robber
* Coin Change
* Longest Increasing Subsequence

---

## Example: Climbing Stairs

You can climb:

1 step
2 steps

Find number of ways to reach step `n`.

### Recurrence

```
ways(n) = ways(n-1) + ways(n-2)
```

### DP Code

```javascript
function climbStairs(n){

    const dp = new Array(n+1).fill(0)

    dp[0] = 1
    dp[1] = 1

    for(let i=2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
}
```

Time Complexity: O(n)

---

# 6. 2D Dynamic Programming

Used when problem has **two variables**.

Examples:

* Grid problems
* String problems
* Subsequence problems

State looks like:

```
dp[i][j]
```

---

# 7. Grid Based DP

Used in matrix traversal problems.

Example:

Unique Paths problem.

Robot moves from top-left to bottom-right.

Moves allowed:

* Right
* Down

### Grid

```
S . .
. . .
. . E
```

### State

```
dp[i][j] = number of ways to reach cell (i,j)
```

### Transition

```
dp[i][j] = dp[i-1][j] + dp[i][j-1]
```

### Code

```javascript
function uniquePaths(m, n){

    const dp = Array.from({length:m}, () => Array(n).fill(0))

    for(let i=0;i<m;i++) dp[i][0] = 1
    for(let j=0;j<n;j++) dp[0][j] = 1

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    return dp[m-1][n-1]
}
```

Time Complexity: O(m × n)

---

# 8. String Dynamic Programming

Used when dealing with string comparison.

Common problems:

* Longest Common Subsequence
* Edit Distance
* Longest Palindromic Subsequence

---

## Example: Longest Common Subsequence

Strings:

```
s1 = "abcde"
s2 = "ace"
```

LCS = "ace"

Length = 3

### State

```
dp[i][j] = LCS length of s1[0..i] and s2[0..j]
```

### Transition

If characters match:

```
dp[i][j] = 1 + dp[i-1][j-1]
```

Else:

```
dp[i][j] = max(dp[i-1][j], dp[i][j-1])
```

---

# 9. Partition Dynamic Programming

Used when the problem requires **splitting into parts**.

Examples:

* Matrix Chain Multiplication
* Palindrome Partitioning
* Burst Balloons

General structure:

```
dp[i][j] = best solution for range i to j
```

Try every possible split:

```
dp[i][j] = min/max(dp[i][k] + dp[k+1][j])
```

---

# 10. Knapsack Pattern

Used when we must **choose items with constraints**.

Example:

0/1 Knapsack.

State:

```
dp[i][w]
```

Meaning:

Maximum value using first `i` items and weight `w`.

Transition:

```
dp[i][w] = max(
    dp[i-1][w],
    value[i] + dp[i-1][w-weight[i]]
)
```

---

# 11. Space Optimization

Sometimes DP tables can be reduced.

Example:

Fibonacci uses only last two values.

Instead of array:

```
prev2 = 0
prev1 = 1
```

Loop:

```
current = prev1 + prev2
```

Space becomes:

```
O(1)
```

---

# 12. Common Dynamic Programming Patterns

Important DP patterns for interviews:

1. Fibonacci Pattern
2. Knapsack Pattern
3. Grid Path Pattern
4. String Matching Pattern
5. Partition DP
6. Longest Increasing Subsequence

Learning these covers most DP problems.

---

# 13. How to Identify DP Problems

DP problems usually contain keywords like:

* minimum
* maximum
* number of ways
* longest
* shortest
* optimal

Examples:

* minimum coins
* maximum profit
* longest subsequence
* number of paths

---

# 14. General DP Template

```
1. Understand problem
2. Define state
3. Find recurrence relation
4. Identify base cases
5. Implement memoization or tabulation
6. Optimize space if possible
```

---

# 15. Complexity

Typical DP complexity:

```
Time  = number of states × transitions
Space = DP table size
```

Example:

```
dp[n] → O(n)
dp[n][m] → O(n × m)
```

---

# 16. Most Important DP Problems to Practice

Beginner

1. Fibonacci
2. Climbing Stairs
3. House Robber

Intermediate

4. Coin Change
5. Longest Increasing Subsequence
6. Longest Common Subsequence

Advanced

7. Knapsack
8. Matrix Chain Multiplication
9. Burst Balloons

---

# 17. Key Takeaways

Dynamic Programming works when:

* Problems repeat subproblems
* Optimal solutions combine smaller solutions

Always remember:

```
State
Transition
Base Case
Order of Computation
```

Mastering these concepts makes DP much easier.

```
