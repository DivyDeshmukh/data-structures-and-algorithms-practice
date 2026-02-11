class TreeNode {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class TreeTraversals {
    constructor (root = null) {
        this.root = root;
    }

    inorder (root = this.root, result = []) {
        if (!root) return;

        this.inorder(root.left, result);
        result.push(root.val);
        this.inorder(root.right, result);

        return result;
    }

    preorder (root = this.root, result = []) {
        if (!root) return;

        result.push(root.val);
        this.preorder(root.left, result);
        this.preorder(root.right, result);

        return result;
    }

    postorder (root = this.root, result = []) {
        if (!root) return;

        this.postorder(root.left, result);
        this.postorder(root.right, result);
        result.push(root.val);

        return result;
    }

    levelOrder (root = this.root) {
        if (!root) return;

        let queue = [root];

        while (queue.length) {
            let node = queue.shift();

            console.log(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    } 
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const treeTraversal = new TreeTraversals(root);

console.log(treeTraversal.inorder());
console.log(treeTraversal.preorder());
console.log(treeTraversal.postorder());
treeTraversal.levelOrder();

// Time Complexity of creating the tree in general is O(N) where N is the number of nodes in the tree, since we need to create a node for each value. The space complexity is also O(N) due to the storage of the nodes in memory.
// Binary tree ≠ ordered.
// Time Complexity of traversals (inorder, preorder, postorder) is O(N) since we visit each node once. The space complexity is O(H) where H is the height of the tree, due to the recursive call stack. In the worst case (skewed tree), this can be O(N). For level order traversal, the time complexity is also O(N) and the space complexity is O(W) where W is the maximum width of the tree (the maximum number of nodes at any level).