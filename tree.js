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

  sumValues() {
    const children = [this.root]
    let totalVal=0
    while(children.length > 0 && this.root!=null){
      let current = children.pop()
      totalVal+=current.val
      for (let child of current.children){
        children.push(child)
      }
    }
    return totalVal;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const children = [this.root]
    let numOfEvens=0
    while(children.length > 0 && this.root!=null){
      let current = children.pop()
      if (current.val % 2==0){
        numOfEvens+=1
      }
      for (let child of current.children){
        children.push(child)
      }
    }
    return numOfEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const children = [this.root]
    let numOfGreater=0
    while(children.length > 0 && this.root!=null){
      let current = children.pop()
      if (current.val > lowerBound){
        numOfGreater+=1
      }
      for (let child of current.children){
        children.push(child)
      }
    }
    return numOfGreater;
  }
}

module.exports = { Tree, TreeNode };
