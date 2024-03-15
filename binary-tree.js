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

  minDepthHelper(root){
    if (root.right== null && root.left == null)  return 1;
    else if (root.right== null) return this.minDepthHelper(root.left)+1
    else if (root.left== null) return this.minDepthHelper(root.right)+1
    return Math.min(this.minDepthHelper(root.right),this.minDepthHelper(root.left)) +1
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0
    return this.minDepthHelper(this.root)
  }

  maxDepthHelper(root){
    if (root.right== null && root.left == null)  return 1;
    else if (root.right== null) return this.maxDepthHelper(root.left)+1
    else if (root.left== null) return this.maxDepthHelper(root.right)+1
    return Math.max(this.maxDepthHelper(root.right),this.maxDepthHelper(root.left)) +1
  }
  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0
    return this.maxDepthHelper(this.root)
  }

  maxSumHelper(node){
    if (node.right ==null && node.left == null) return node.val;
    if (node.right == null) return this.maxSumHelper(node.left) + node.val
    if (node.left == null) return this.maxSumHelper(node.right) + node.val
    return Math.max(0,this.maxSumHelper(node.right)+this.maxSumHelper(node.left) + node.val)

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null
    let greaterNums = []

    function nextLargerHelper(node){
      if (!node) return null
      if (node.right == null && node.left == null){
        if (node.val > lowerBound){
          greaterNums.push(node.val)
        }
      }
      if (node.right == null){
        if (node.val > lowerBound){
          greaterNums.push(node.val)
        }
        nextLargerHelper(node.left)
      }
      if (node.left == null){
        if (node.val > lowerBound){
          greaterNums.push(node.val)
        }
        nextLargerHelper(node.right)
      }
      if (node.left != null && node.right != null){
        if (node.val > lowerBound){
          greaterNums.push(node.val)
        }
        nextLargerHelper(node.left)
        nextLargerHelper(node.right)
      }
    }

    nextLargerHelper(this.root)

    if (greaterNums.length == 0){
      return null
    }else{
      let finalNum = greaterNums[0]
      for (let num of greaterNums){
        if (num < finalNum){
          finalNum = num
        }
      }
      return finalNum
    }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
