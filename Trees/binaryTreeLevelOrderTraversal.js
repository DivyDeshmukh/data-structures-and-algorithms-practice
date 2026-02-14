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
var levelOrder = function(root) {
    if (!root) return [];

    let q = [root];
    let result = [];
    let i = 0;

    while(i < q.length) {
        // because we are not removing elements from the queue
        let size = q.length - i;
        let levelElements = [];

        while (size--) {
            // this can lead to O(n2) in worst case as shift is reindexing so we can use pointer approach instead.
            // let node = q.shift();
            let node = q[i++];

            levelElements.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        result.push(levelElements);
    }

    return result;
};


// Time complexity: O(n) where n is the number of nodes in the tree as we are visiting each node once.
// Space complexity: O(n) in worst case when the tree is completely unbalanced and we have to store all nodes in the queue. In best case when the tree is completely balanced, the space complexity is O(w) where w is the maximum width of the tree.
