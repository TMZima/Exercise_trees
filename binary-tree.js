/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // If the tree is empty, return 0.
    if (!this.root) return 0;
    // Initialize 'minDepth' to Infinity to ensure any valid depth will be smaller.
    let minDepth = Infinity;
    // Helper function. Takes a node and the current depth.
    //If the node is a leaf, update 'minDepth' with the smaller of the current 'minDepth' and the current depth.
    // Recursively call the helper function on the left and right children, incrementing the depth by 1.
    function minDepthHelper(node, depth) {
      if (!node.left && !node.right) {
        minDepth = Math.min(minDepth, depth);
      }
      if (node.left) minDepthHelper(node.left, depth + 1);
      if (node.right) minDepthHelper(node.right, depth + 1);
    }
    // Call the helper function starting from the root node with an initial depth of 1.
    minDepthHelper(this.root, 1);
    // Return the minimum depth.
    return minDepth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    let maxDepth = 0;

    function maxDepthHelper(node, depth) {
      maxDepth = Math.max(maxDepth, depth);
      if (node.left) maxDepthHelper(node.left, depth + 1);
      if (node.right) maxDepthHelper(node.right, depth + 1);
    }
    maxDepthHelper(this.root, 1);
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;
    // Helper function. Takes a node and returns the maximum sum of a path starting from that node.
    function maxSumHelper(node) {
      if (!node) return 0;
      // Recursively call the helper function on the left and right children of the current node.
      // If the sum of the left or right child is negative, set it to 0.
      let leftSum = Math.max(maxSumHelper(node.left), 0);
      let rightSum = Math.max(maxSumHelper(node.right), 0);
      // Update 'maxSum' with the maximum of the current 'maxSum' and the sum of the left child, right child, and the current node's value.
      maxSum = Math.max(maxSum, leftSum + rightSum + node.val);
      // Return the maximum sum of the path starting from the current node.
      return Math.max(leftSum, rightSum) + node.val;
    }
    maxSumHelper(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {}

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
