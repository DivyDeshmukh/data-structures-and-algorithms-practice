class TreeNode {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor () {
        this.root = null;
    }

    insert (val) {
        const insertNode = (node, val) => {
            if (!node) return new TreeNode(val);

            if (val < node.val) 
                node.left = insertNode(node.left, val);
            else
                node.right = insertNode(node.right, val);

            return node;
        };

        this.root = insertNode(this.root, val);
    }

    search (val) {
        let node = this.root;

        while (node) {
            if (node.val === val) return true;

            node = val < node.val ? node.left : node.right;
        }

        return false;
    }
}


const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
console.log(bst.search(3)); // true
console.log(bst.search(4)); // false

// Time complexity:- O(log n) for insert and search in a balanced BST, O(n) in the worst case (skewed tree).
// Space complexity:- O(n) for the tree structure, O(h) for the recursive call stack where h is the height of the tree.