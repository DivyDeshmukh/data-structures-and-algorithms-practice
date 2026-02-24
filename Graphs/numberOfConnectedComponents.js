var countComponents = function (n, edges) {
    // Step 1: Build adjacency list
    const adj = new Map();

    for (let i = 0; i < n; i++) {
        adj.set(i, []);
    }

    for (let [u, v] of edges) {
        adj.get(u).push(v);
        adj.get(v).push(u);         // undirected
    }

    const visited = new Set();
    let components = 0;

    function dfs(node) {
        visited.add(node);

        for (let neighbor of adj.get(node)) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i);
            components++;
        }
    }

    return components;
}

console.log(countComponents(5, [[0,1],[1,2],[3,4]]));

// Time Complexity: O(n + e) - We need to visit each node and edge once. Here n is the number of nodes and e is the number of edges.
// Space Complexity: O(n + e) - The adjacency list can take up to O(n + e) space in the worst case, and the visited set can take up to O(n) space.
