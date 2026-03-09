/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    // const result = [];

    // function dfs(r, c, visited) {
    //     if (visited.has(r + "," + c)) return;

    //     visited.add(r + "," + c);

    //     for (let [dr, dc] of dirs) {
    //         const nr = r + dr;
    //         const nc = c + dc;

    //         if (
    //             nr >= 0 && nc >=0 &&
    //             nr < m && nc < n &&
    //             heights[nr][nc] <= heights[r][c]
    //         ) {
    //             dfs(nr, nc, visited);
    //         }
    //     }
    // }

    // for (let r = 0; r < m; r++) {
    //     for (let c = 0; c < n; c++) {
    //         const visited = new Set();

    //         dfs(r, c, visited);

    //         let pacific = false;
    //         let atlantic = false;

    //         for (let pos of visited) {
    //             const [i, j] = pos.split(",").map(Number);

    //             if (i === 0 || j === 0) pacific = true;
    //             if (i === m-1 || j === n-1) atlantic = true;
    //         }

    //         if (pacific && atlantic) {
    //                 result.push([r,c]);
    //         }
    //     }
    // }

    // return result;

    // Approach 2:- Optimized BFS Approach
    // const pacific = Array.from({length:m}, () => Array(n).fill(false));
    // const atlantic = Array.from({length:m}, () => Array(n).fill(false));

    // function bfs(queue, visited) {
    //     while(queue.length) {
    //         const [r,c] = queue.shift();

    //         for (let [dr,dc] of dirs) {
    //             const nr = r + dr;
    //             const nc = c + dc;

    //             if (
    //                 nr >= 0 && nc >= 0 &&
    //                 nr < m && nc < n &&
    //                 !visited[nr][nc] &&
    //                 heights[nr][nc] >= heights[r][c]
    //             ) {
    //                 visited[nr][nc] = true;
    //                 queue.push([nr,nc]);
    //             }
    //         }
    //     }
    // }

    // const pacQueue = [];
    // const atlQueue = [];

    // for (let i = 0; i < m; i++) {
    //     pacific[i][0] = true;
    //     pacQueue.push([i,0]);

    //     atlantic[i][n-1] = true;
    //     atlQueue.push([i, n-1]);
    // }

    // for (let j = 0; j < n; j++) {
    //     pacific[0][j] = true;
    //     pacQueue.push([0, j]);

    //     atlantic[m-1][j] = true;
    //     atlQueue.push([m-1, j]);   
    // } 

    // bfs(pacQueue, pacific);
    // bfs(atlQueue, atlantic);

    // const result = [];

    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (pacific[i][j] && atlantic[i][j]) {
    //             result.push([i,j]);
    //         }
    //     }
    // }

    // return result;

    // Approach 3:- DFS
    const pacific = Array.from({length:m}, () => Array(n).fill(false));
    const atlantic = Array.from({length:m}, () => Array(n).fill(false));

    function dfs(r,c,visited) {
        visited[r][c] = true;

        for (let [dr,dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nc >= 0 &&
                nr < m && nc < n &&
                !visited[nr][nc] &&
                heights[nr][nc] >= heights[r][c]
            ) {
                dfs(nr, nc, visited);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        dfs(i,0, pacific);
        dfs(i, n-1, atlantic);
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific);
        dfs(m-1, j, atlantic);
    }

    const result = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i,j]);
            }
        }
    }

    return result;
}

// Time Complexity of 1st Approach:- O(m*n*(m+n)) in worst case when all cells are of same height
// Time Complexity of 2nd Approach:- O(m*n) as each cell is visited at most twice (once for Pacific and once for Atlantic)
// Time Complexity of 3rd Approach:- O(m*n) as each cell is visited at most twice (once for Pacific and once for Atlantic)

// Space Complexity of 1st Approach:- O(m*n) in worst case due to the visited set
// Space Complexity of 2nd Approach:- O(m*n) due to the visited arrays and the queues
// Space Complexity of 3rd Approach:- O(m*n) due to the visited arrays and the recursion stack in worst case