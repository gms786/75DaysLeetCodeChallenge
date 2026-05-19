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
    // Base case
    if (root === null || root === p || root === q) {
        return root;
    }

    // Search in left and right subtree
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // If both sides return non-null,
    // current node is the LCA
    if (left !== null && right !== null) {
        return root;
    }

    // Otherwise return the non-null side
    return left !== null ? left : right;
};