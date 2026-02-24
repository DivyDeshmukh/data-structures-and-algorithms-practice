/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinces = 0;

    // function dfs(city) {
    //     visited[city] = true;
    //     for (let j = 0; j < n; j++) {
    //         if (isConnected[city][j] === 1 && !visited[j]) {
    //             dfs(j);
    //         }
    //     }
    // }

    // for (let i = 0; i < n; i++) {
    //     if (!visited[i]) {
    //         dfs(i);
    //         provinces++;
    //     }
    // }

    // return provinces;

    // Approach 2: using BFS
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            provinces++;
        
            const queue = [i];
            visited[i] = true;

            while(queue.length) {
                const city = queue.shift();

                for (let j = 0; j < n; j++) {
                    if (isConnected[city][j] === 1 && !visited[j]) {
                        visited[j] = true;
                        queue.push(j);
                    }
                }
            }
        }
    }

    return provinces;
};

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));

// Time Complexity of DFS: O(n^2) - We need to check each cell in the isConnected matrix once.
// Space Complexity of DFS: O(n) - In the worst case, when all cities are directly or indirectly connected, the recursive call stack can grow up to n in size. Here n is the number of cities.

// Time Complexity of BFS: O(n^2) - We need to check each cell in the isConnected matrix once.
// Space Complexity of BFS: O(n) - In the worst case, when all cities are directly or indirectly connected, the queue can grow up to n in size.