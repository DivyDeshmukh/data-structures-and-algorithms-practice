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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];

    let q = [root];
    let i = 0;
    let result = [];

    while(i < q.length) {
        let size = q.length - i;
        let level = [];

        while (size--) {
            let node = q[i++];
            level.push(node.val);

            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }

        result.push(level[level.length - 1]);
    }

    return result;
};
