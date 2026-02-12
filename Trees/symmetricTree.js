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
var isSymmetric = function(root) {
    // const isMirror = (p, q) => {
    //     if (!p && !q) return true;
    //     if (!p || !q) return false;

    //     if (p.val !== q.val) return false;

    //     return (p.val === q.val) && isMirror(p.left, q.right) && isMirror(p.right, q.left);
    // }

    // let p = root.left;
    // let q = root.right;

    // return isMirror(p, q);

    // Approach 2:- Iterative
    if (!root) return true;

    let queue = [[root.left, root.right]];

    while(queue.length) {
        let [p, q] = queue.shift();

        // both null -> symmetric at this level
        if(!p && !q) continue;

        if (!p || !q || p.val !== q.val) return false;

        queue.push([p.left, q.right]);
        queue.push([p.right, q.left]);
    }

    return true;
};
