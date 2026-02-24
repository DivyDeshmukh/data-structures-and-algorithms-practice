/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (!grid.length) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let maxArea = 0;

    function dfs(r, c) {
        // boundary + water check
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            grid[r][c] === 0
        ) return 0;

        // mark visited
        grid[r][c] = 0;

        // explore 4 directions
         return 1 +
            dfs(r + 1, c) +
            dfs(r - 1, c) +
            dfs(r, c + 1) +
            dfs(r, c - 1);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j  < cols; j++) {
            if (grid[i][j] === 1) {
                let area = dfs(i, j);
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;

    // Approach 2:- BFS
    // const directions = [
    //     [1, 0],         // down
    //     [-1, 0],        // up
    //     [0, 1],         // right
    //     [0, -1]         // left
    // ];

    // function bfs(r, c) {
    //     const queue = [[r, c]];
    //     grid[r][c] = 0;       // mark visited
    //     let area = 0;

    //     while(queue.length) {
    //         const [row, col] = queue.shift();
    //         area++;

    //         for (let [dr, dc] of directions) {
    //             const newRow = row + dr;
    //             const newCol = col + dc;

    //             if (
    //                 newRow >= 0 && newCol >= 0 &&
    //                 newRow < rows && newCol < cols &&
    //                 grid[newRow][newCol] === 1
    //             ) {
    //                 grid[newRow][newCol] = 0;
    //                 queue.push([newRow, newCol]);
    //             }
    //         }
    //     }

    //     return area;
    // }

    // for (let i = 0; i < rows; i++) {
    //     for (let j = 0; j < cols; j++) {
    //         if (grid[i][j] === 1) {
    //             const area = bfs(i, j);
    //             maxArea = Math.max(maxArea, area);
    //         }
    //     }
    // }

    // return maxArea;
};

console.log(maxAreaOfIsland([
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1]
]));

// Time Complexity of DFS: O(m * n) - We need to check each cell in the grid once.
// Space Complexity of DFS: O(m * n) - In the worst case, when the grid is filled with land, the recursive call stack can grow up to m * n in size. Here m is the number of rows and n is the number of columns in the grid.

// Time Complexity of BFS: O(m * n) - We need to check each cell in the grid once.
// Space Complexity of BFS: O(min(m, n)) - In the worst case, when the grid is filled with land, the queue can grow up to min(m, n) in size.