/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(node = this.root) {
    // If there is not a node or is null/undefined, return 0.
    if (!node) return 0;
    let sum = node.val;
    // Loop through the children of the node and add the sum of the children to the sum.
    for (let child of node.children) {
      // Recursively call sumValues on the children.
      sum += this.sumValues(child);
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {}

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {}
}

module.exports = { Tree, TreeNode };
