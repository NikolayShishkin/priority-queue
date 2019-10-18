class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
    if (!this.left) {
      this.left = node;
      node.parent = this;
    } else if (!this.right) {
      this.right = node;
      node.parent = this;
    }
  }

  removeChild(node) {
    if (node === this.left) {
      this.left.parent = null;
      this.left = null;
    } else if (node === this.right) {
      this.right.parent = null;
      this.right = null;
    } else {
      throw new Error();
    }
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    if (this.parent) {
      let currentNode = this;
      let parentNode = currentNode.parent;
      let leftSonNode, rightSonNode, grandparentNode, brotherLeft, brotherRight;
      if (currentNode.left) {
        leftSonNode = currentNode.left;
      }
      if (currentNode.right) {
        rightSonNode = currentNode.right;
      }
      if (parentNode.left && parentNode.left !== currentNode) {
        brotherLeft = parentNode.left;
      }
      if (parentNode.right && parentNode.right !== currentNode) {
        brotherRight = parentNode.right;
      }
      if (parentNode.parent) {
        grandparentNode = parentNode.parent;
        grandparentNode.removeChild(parentNode);
        grandparentNode.appendChild(currentNode);
        currentNode.parent = grandparentNode;
      } else {
        grandparentNode = null;
      }

      parentNode.removeChild(currentNode);
      parentNode.parent = currentNode;
      currentNode.left = null;
      currentNode.right = null;
      currentNode.appendChild(parentNode);
      currentNode.parent = grandparentNode;

      if (brotherLeft) {
        currentNode.left = brotherLeft;
        brotherLeft.parent = currentNode;
      } else if (brotherRight) {
        currentNode.right = brotherRight;
        brotherRight.parent = currentNode;
      }

      if (leftSonNode) {
        leftSonNode.parent = parentNode;
        parentNode.left = leftSonNode;
      }
      if (rightSonNode) {
        rightSonNode.parent = parentNode;
        parentNode.right = rightSonNode;
      }
    }
  }
}

module.exports = Node;
