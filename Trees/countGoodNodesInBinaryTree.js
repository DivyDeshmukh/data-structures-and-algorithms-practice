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
var goodNodes = function(root) {
    if (!root) return;
    // let count = 0;

    const isGoodNode = (root, max, goodNodes) => {
        if (!root) return;

        if (root.val >= max) {
            goodNodes.push(root.val);
            // count++;
            max = root.val;
        }

        isGoodNode(root.left, max, goodNodes);
        isGoodNode(root.right, max, goodNodes);

        return goodNodes;
    }

    return isGoodNode(root, -Infinity, []).length;
    // isGoodNode(root, -Infinity);
    // return count;
};
