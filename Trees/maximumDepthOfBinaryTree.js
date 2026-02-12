/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;

    // let leftMax = maxDepth(root.left); 
    // let rightMax = maxDepth(root.right); 

    // return Math.max(leftMax, rightMax) + 1;

    // Approach 2:- Iterative Approach
    let q = [root];
    let depth = 0;

    while (q.length) {
        let size = q.length;

        while (size--) {
            let node = q.shift();
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        depth++;
    }

    return depth;
};
