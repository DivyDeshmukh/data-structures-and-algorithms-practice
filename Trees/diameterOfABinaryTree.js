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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function height(node) {
        if (!node) return 0;

        let left = height(node.left);
        let right = height(node.right);

        // this is diameter calculation for each parent node
        diameter = Math.max(diameter, left + right);

        // this is height we are returning 
        return Math.max(left, right) + 1;
    }

    height(root);
    return diameter;
};
