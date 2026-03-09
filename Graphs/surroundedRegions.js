/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length;
    const n = board[0].length;

    const queue = [];

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    // Instead of finding O's that are surrounded, find O's that cannot be  surrounded (boundary connected).
    const bfs = (r,c) => {
        queue.push([r,c]);
        board[r][c] = 'T';

        while(queue.length) {
            const [x, y] = queue.shift();

            for (let [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (
                    nx >= 0 && ny >= 0 &&
                    nx < m && ny < n &&
                    board[nx][ny] === 'O'
                ) {
                    // T for Temporary
                    board[nx][ny] = 'T';
                    queue.push([nx, ny]);
                }
            }
        }
    }

    // first column & last column
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') bfs(i, 0);
        if (board[i][n-1] === 'O') bfs(i, n-1); 
    }

    // first row & last row
    for(let j = 0; j < n; j++) {
        if (board[0][j] === 'O') bfs(0, j);
        if (board[m-1][j] === 'O') bfs(m-1, j);
    }

    // convert
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O')
                board[i][j] = 'X';

            if (board[i][j] === 'T')
                board[i][j] = 'O';
        }
    }
};

// Time complexity is O(m*n) where m and n are the dimensions of the board. This is because in the worst case, we may need to visit every cell in the board once.
// Space complexity is O(m*n) in the worst case when all cells are 'O' and we need to store them in the queue. However, in practice, the space complexity is often less than O(m*n) due to the nature of the problem and the distribution of 'O's in the board.