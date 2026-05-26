/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];

    // If the color is already the same, return image
    if (originalColor === color) {
        return image;
    }

    const rows = image.length;
    const cols = image[0].length;

    function dfs(r, c) {
        // Check boundaries
        if (r < 0 || c < 0 || r >= rows || c >= cols) {
            return;
        }

        // Only fill cells with original color
        if (image[r][c] !== originalColor) {
            return;
        }

        // Change color
        image[r][c] = color;

        // Visit all 4 directions
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    dfs(sr, sc);

    return image;
};