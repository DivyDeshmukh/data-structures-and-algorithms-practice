/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    if (p.val !== q.val) return false;

    // const isLeftSame = isSameTree(p.left, q.left);
    // const isRightSame = isSameTree(p.right, q.right);
    
    // return (
    //     isLeftSame && isRightSame
    // );

    // Approach 2:- Iterative
    let queue = [[p, q]];

    while (queue.length) {
        let [n1, n2] = queue.shift();

        if (!n1 && !n2) continue;
        if (!n1 || !n2) return false;

        if (n1.val !== n2.val) return false;

        queue.push([n1.left, n2.left]);
        queue.push([n1.right, n2.right]);
    }

    return true;
};
