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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;

    // [root.left, root.right] = [root.right, root.left];

    // invertTree(root.left);
    // invertTree(root.right);

    // return root;

    // Approach 2:- Iterative
    let q = [root];

    while (q.length) {
        let node = q.shift();
        [node.left, node.right] = [node.right, node.left];

        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
    }

    return root;
};
