/*
the critical invariant:

If height[left] < height[right], then
leftMax is the limiting boundary for the current left index —
the right side definitely has a wall tall enough.

And symmetrically for the right side.

This is the part people often explain loosely — but this is the exact reason it works.

Step-by-step logic (corrected & precise)
Outer condition
if (height[left] < height[right])


Why?

Because the shorter side determines water height

If left is shorter, the right side cannot be the bottleneck

So we safely compute water using leftMax

We are NOT choosing the smaller because it “stops water”
We choose it because it guarantees a valid opposite boundary.

if left is smaller than right than leftMax is limiting boundary that will stop the water or vice-versa if right is greater than left. For the block at left, I already have a right boundary tall enough, so its water depends only on the left boundary. At every step, we process the side whose opposite boundary is already guaranteed to exist.

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let total = 0;

    while (left < right) {
        // outer condition is just for assurance that yes there exists a boundary on taller side
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                total += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                total += rightMax - height[right];
            }
            right--;
        }
    }

    return total;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
