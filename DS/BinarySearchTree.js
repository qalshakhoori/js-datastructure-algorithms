class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  remove(value) {
    if (!this.root) return undefined;

    let current = this.root;
    let parent = null;
    let found = false;

    // Find the node to remove and its parent
    while (!found && current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    // Case 1: Node to remove has no children
    if (!current.left && !current.right) {
      if (current === this.root) {
        this.root = null;
      } else if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // Case 2: Node to remove has one child
    else if (!current.left || !current.right) {
      const child = current.left || current.right;

      if (current === this.root) {
        this.root = child;
      } else if (parent.left === current) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }
    // Case 3: Node to remove has two children
    else {
      // Find the smallest value in the right subtree (successor)
      let successorParent = current;
      let successor = current.right;

      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      // If successor is not the immediate right child
      if (successorParent !== current) {
        successorParent.left = successor.right;
        successor.right = current.right;
      }

      successor.left = current.left;

      if (current === this.root) {
        this.root = successor;
      } else if (parent.left === current) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
    }

    return current;
  }

  findSecondLargest() {
    // If tree is empty or has only one node, return undefined
    if (!this.root || (!this.root.left && !this.root.right)) {
      return undefined;
    }

    let current = this.root;
    let parent = null;

    // Find the largest value (rightmost node)
    while (current.right) {
      parent = current;
      current = current.right;
    }

    // If the largest node has a left subtree
    if (current.left) {
      // The second largest will be the largest in the left subtree
      let secondLargest = current.left;
      while (secondLargest.right) {
        secondLargest = secondLargest.right;
      }
      return secondLargest.value;
    }

    // If no left subtree, parent is the second largest
    return parent ? parent.value : undefined;
  }

  _getHeight(node) {
    if (!node) return 0;
    return (
      Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1
    );
  }

  isBalanced() {
    const isBalancedNode = (node) => {
      if (!node) return true;

      const leftHeight = this._getHeight(node.left);
      const rightHeight = this._getHeight(node.right);

      if (Math.abs(leftHeight - rightHeight) > 1) return false;

      return isBalancedNode(node.left) && isBalancedNode(node.right);
    };

    return isBalancedNode(this.root);
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
