/**
 * Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const map = new Map();

    // function dfs(node) {
    //     If already cloned
    //     if (map.has(node)) {
    //         return map.get(node);
    //     }

    //     create clone
    //     const clone = new Node(node.val);
    //     map.set(node, clone);

    //     clone neighbors
    //     for (let neighbor of node.neighbors) {
    //         clone.neighbors.push(dfs(neighbor));
    //     }

    //     return clone;
    // }

    // return dfs(node);

    // Approach 2:- BFS
    const queue = [];

    // clone first node
    map.set(node, new Node(node.val));
    queue.push(node);
    let i = 0;

    while(i < queue.length) {
        // const current = queue.shift();
        const current = queue[i++];

        for (let neighbor of current.neighbors) {
            // If neighnor not cloned
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }

            // connect cloned nodes
            map.get(current).neighbors.push(map.get(neighbor));
        }
    }

    return map.get(node);
};

// Time Complexity of DFS:- O(V + E) - We need to visit each node and edge once. Here V is the number of vertices and E is the number of edges.
// Space Complexity of DFS:- O(V) - The map can take up to O(V) space in the worst case, where V is the number of vertices. The queue can also take up to O(V) space in the worst case.

// Time Complexity of BFS:- O(V + E) - We need to visit each node and edge once. Here V is the number of vertices and E is the number of edges.
// Space Complexity of BFS:- O(V) - The map can take up to O(V) space in the worst case, where V is the number of vertices. The queue can also take up to O(V) space in the worst case.