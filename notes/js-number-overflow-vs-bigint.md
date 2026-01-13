````md
# Why `BigInt` Fixes the Runtime Error in Your Solution

## 1. What Actually Broke in the Original Code

The problematic line is:

```js
const sum = Number(num1) + Number(num2);
````

### JavaScript `Number` Is Not an Integer Type

JavaScript uses a single numeric type:

* IEEE-754 double-precision floating point
* Only **53 bits** are available for integer precision

### Maximum Safe Integer

```js
Number.MAX_SAFE_INTEGER === 9007199254740991
```

This is approximately **16 decimal digits**. Any integer larger than this cannot be represented exactly.

---

## 2. What LeetCode Allows

In **LeetCode – Add Two Numbers**:

* Each linked list can have **up to 100 nodes**
* Each node stores **one digit**
* The represented numbers can therefore be **up to 100 digits long**

Example:

```
9999999999999999999999999999999999999999999
```

This is approximately `10^84`, far beyond what JavaScript `Number` can safely represent.

---

## 3. What Happens When JavaScript `Number` Overflows

When converting large numeric strings to `Number`, JavaScript silently loses precision.

Example:

```js
Number("9999999999999999")   // 10000000000000000
Number("99999999999999999")  // 100000000000000000
```

The value is **rounded**, not stored exactly.

So if:

```js
num1 = "99999999999999999";
num2 = "1";

Number(num1) + Number(num2);
```

The result is **numerically incorrect** due to rounding.

---

## 4. Why This Causes a Runtime Error (Not Just a Wrong Answer)

After overflow:

* `sum` contains an incorrect value
* Converting it to a string can produce unexpected formats

Example:

```js
String(1e+21); // "1e+21"
```

Your code then does:

```js
let reversedResult = String(sum).split('').reverse();
```

This may produce characters like:

```
["1", "e", "+", "2", "1"]
```

When constructing the linked list:

```js
new ListNode(Number(char));
```

`Number("e")` becomes `NaN`.

This leads to a malformed linked list, and LeetCode’s serializer throws:

```
is not valid value for the expected return type ListNode
```

This is a **serialization failure**, not merely a logic error.

---

## 5. How `BigInt` Fixes This Mechanically

### What Is `BigInt`?

* Arbitrary-precision integer type
* No fixed size limit (bounded only by memory)
* Performs exact integer arithmetic

Example:

```js
BigInt("99999999999999999") + BigInt("1");
// 100000000000000000n
```

### Key Differences

| Feature             | Number             | BigInt    |
| ------------------- | ------------------ | --------- |
| Integer precision   | Limited to 53 bits | Unlimited |
| Rounding            | Yes                | No        |
| Scientific notation | Possible           | Never     |
| Exact integer math  | No                 | Yes       |

---

## 6. Why the Code Becomes Correct with `BigInt`

Replacing:

```js
const sum = Number(num1) + Number(num2);
```

with:

```js
const sum = BigInt(num1) + BigInt(num2);
```

Guarantees:

* No overflow
* No rounding
* No scientific notation
* No `NaN`
* Stable and predictable string conversion

```js
sum.toString(); // always a pure digit string
```

This makes the following safe:

```js
Number(digit); // always 0–9
```

---

## 7. Mental Model

**`Number` stores approximations.
`BigInt` stores exact integers.**

Your algorithm required exact integer arithmetic.

---

## 8. Final Summary

* The algorithm itself was logically correct
* The failure was caused by JavaScript `Number` precision limits
* JavaScript `Number` cannot represent 100-digit integers safely
* `BigInt` supports arbitrary-precision integers
* Using `BigInt` prevents malformed output and serializer crashes

```

This is clean Markdown and ready to be saved directly as a `.md` note file.
```
