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
	  if (node === this.left){
		  this.left = null;
	  } else if (node === this.right){
		  this.right = null;
	  } else{
		  throw new Error();
	  }
  }

  remove() {
    if(this.parent){
      this.parent.removeChild(this); 
    }
  }

  swapWithParent() {
    if (this.parent){
      let currentNode = this;
      let parentNode = currentNode.parent;
      let leftSonNode, rightSonNode;
      if (parentNode.parent){
        currentNode.parent = parentNode.parent;
        parentNode.parent.removeChild(parentNode);
      } else {
        currentNode.parent = null;
      }
      if (parentNode.left && parentNode.right){
        let brotherNode;
        if (parentNode.left === currentNode){
          brotherNode = parentNode.right;
        } else {
          brotherNode = parentNode.left;
        }
        brotherNode.parent = currentNode;
        currentNode.appendChild(brotherNode);
      }
      if (currentNode.left){
        leftSonNode = currentNode.left;
      } 
      if (currentNode.right){
         rightSonNode = currentNode.right;
      }
      parentNode.parent = currentNode;
      parentNode.removeChild(currentNode);
      if (leftSonNode){
        parentNode.appendChild(leftSonNode);
        leftSonNode.parent = parentNode;
      }
      if (rightSonNode){
        parentNode.appendChild(rightSonNode);
        rightSonNode.parent = parentNode;
      }
      currentNode.appendChild(parentNode);
    }
  }
}

module.exports = Node;
