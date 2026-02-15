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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // function validate(node, min, max) {
    //     if (!node) return true;

    //     if (node.val <= min || node.val >= max) return false;

    //     return (
    //         validate(node.left, min, node.val) &&
    //         validate(node.right, node.val, max)
    //     );
    // }

    // return validate(root, -Infinity, Infinity);

    let prev = -Infinity;

    function inOrder(node) {
        if (!node) return true;

        if (!inOrder(node.left)) return false;

        if (node.val <= prev) return false;
        prev = node.val;

        return inOrder(node.right);
    }

    return inOrder(root);
};

