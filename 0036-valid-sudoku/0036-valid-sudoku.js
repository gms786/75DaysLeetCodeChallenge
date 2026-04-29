/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let boxes = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let value = board[i][j];

            if (value === '.') continue;

            // Check row
            if (rows[i].has(value)) return false;
            rows[i].add(value);

            // Check column
            if (cols[j].has(value)) return false;
            cols[j].add(value);

            // Check 3x3 box
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIndex].has(value)) return false;
            boxes[boxIndex].add(value);
        }
    }

    return true;
};