function validTree(n, edges) {
    // Step 1: Edge count check
    if (edges.length !== n - 1) return false;

    // Step 2: Build Adjacency List
    // const adj = new Map();
    // for (let i = 0; i < n; i++) adj.set(i, []);

    // for (const [u, v] of edges) {
    //     adj.get(u).push(v);
    //     adj.get(v).push(u);
    // }

    // Step 3: DFS traversal
    // const visited = new Set();

    // function dfs(node) {
    //     visited.add(node);

    //     for (const nei of adj.get(node)) {
    //         if (!visited.has(nei)) {
    //             dfs(nei);
    //         }
    //     }
    // }

    // dfs(0);

    // Step 4: Check connectivity
    // return visited.size === n;

    // Approach 2:- BFS Approach
    const adj = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const visited = new Set();
    const queue = [[0, -1]];        // [node, parent]

    while (queue.length) {
        const [node, parent] = queue.shift();

        if (visited.has(node)) return false;
        visited.add(node);

        for (const nei of adj[node]) {
            if (nei !== parent) {
                queue.push([nei, node]);
            }
        }
    }

    return visited.size === n;
}

console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])); // true
console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])); // false

// Time Complexity of both approaches is O(n + e) where n is the number of nodes and e is the number of edges. In this case, since e = n - 1 for a valid tree, the time complexity simplifies to O(n).
// Space Complexity of both approaches is O(n) due to the adjacency list and the visited set.
