/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid.length) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    function dfs(r, c) {
        // boundary + water check
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            grid[r][c] === "0"
        ) return;

        // mark visited
        grid[r][c] = "0";

        // explore 4 directions
        dfs(r  + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j  < cols; j++) {
            if (grid[i][j] === "1") {
                islands++;
                dfs(i, j);
            }
        }
    }

    return islands;
};

console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]));

// Time Complexity: O(m * n) - We need to check each cell in the grid once.
// Space Complexity: O(m * n) - In the worst case, when the grid is filled with land, the recursive call stack can grow up to m * n in size.
