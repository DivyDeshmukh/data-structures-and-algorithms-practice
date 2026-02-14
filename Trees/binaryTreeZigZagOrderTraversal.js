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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let q = [root];
    let result = [];
    let i = 0;
    let level = 1;

    while (i < q.length) {
        let size = q.length - i;
        let levelElements = [];

        while (size--) {
            let node = q[i++];
            levelElements.push(node.val);
    
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        levelElements = (level % 2 === 0) ? levelElements.reverse() : levelElements;
        result.push(levelElements);
        level++;
    }

    return result;
};
