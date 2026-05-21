/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    // Build Trie
    const trie = {};

    for (let word of words) {
        let node = trie;
        for (let char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.word = word; // Mark end of word
    }

    const rows = board.length;
    const cols = board[0].length;
    const result = [];

    function dfs(r, c, node) {
        let char = board[r][c];

        // Character not found in trie
        if (!node[char]) return;

        node = node[char];

        // Found a word
        if (node.word) {
            result.push(node.word);
            node.word = null; // Avoid duplicates
        }

        // Mark visited
        board[r][c] = '#';

        // Directions: up, down, left, right
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        for (let [dr, dc] of directions) {
            let newRow = r + dr;
            let newCol = c + dc;

            if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                board[newRow][newCol] !== '#'
            ) {
                dfs(newRow, newCol, node);
            }
        }

        // Restore character
        board[r][c] = char;
    }

    // Start DFS from every cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, trie);
        }
    }

    return result;
};