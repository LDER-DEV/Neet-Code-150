/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null; //if there is no root, we return  null

        [root.left, root.right] = [root.right, root.left]; // here we are setting what ever was assigned to the left side of the root we are assiging to the right and vice-versa
        this.invertTree(root.left); // here we recurssively call our funciton on each remaining left and right child until every subtree tree is reversed
        this.invertTree(root.right);

        return root;
    }
}
