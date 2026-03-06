/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const queue = [];
    let fresh = 0;

    // collect initial rotten oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            if (grid[r][c] === 2) {
                queue.push([r, c]);
            }

            if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    if (fresh === 0) return 0;

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let minutes = 0;
    let i = 0;

    while (i < queue.length) {
        const size = queue.length - i;
        let rotted = false;

        for (let k = 0; k < size; k++) {
            const [r, c] = queue[i++];

            for (let [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < rows &&
                    nc < cols &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;
                    fresh--;
                    queue.push([nr, nc]);
                    rotted = true;
                }
            }
        }
        if (rotted) minutes++;
    }

    return fresh === 0 ? minutes : -1;
};

// Time Complexity: O(m * n) - We need to visit each cell in the grid at most once. Here m is the number of rows and n is the number of columns.
// Space Complexity: O(m * n) - In the worst case, the queue can contain all the cells in the grid if they are all rotten.
