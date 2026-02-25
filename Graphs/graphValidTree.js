function validTree(n, edges) {
    // Step 1: Edge count check
    if (edges.length !== n - 1) return false;

    // Step 2: Build Adjacency List
    const adj = new Map();
    for (let i = 0; i < n; i++) adj.set(i, []);

    for (const [u, v] of edges) {
        adj.get(u).push(v);
        adj.get(v).push(u);
    }

    // Step 3: DFS traversal
    const visited = new Set();

    function dfs(node) {
        visited.add(node);

        for (const nei of adj.get(node)) {
            if (!visited.has(nei)) {
                dfs(nei);
            }
        }
    }

    dfs(0);

    // Step 4: Check connectivity
    return visited.size === n;
}


console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])); // true
console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])); // false

// Time complexity: O(n) - We visit each node and edge once.
// Space complexity: O(n) - The adjacency list and visited set can grow up to O(n).
