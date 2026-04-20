/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let current = root;

    while (current !== null) {
        // If both p and q are strictly less than the current node, 
        // the LCA must be entirely in the left subtree.
        if (p.val < current.val && q.val < current.val) {
            current = current.left;
        } 
        // If both p and q are strictly greater than the current node, 
        // the LCA must be entirely in the right subtree.
        else if (p.val > current.val && q.val > current.val) {
            current = current.right;
        } 
        // If one is less and one is greater (or one is equal to current), 
        // we have found the split point. This current node is the LCA.
        else {
            return current;
        }
    }
};