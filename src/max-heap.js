const Node = require('./node');

class MaxHeap {
  constructor() {
    this.root = null;
	this.parentNodes = [];
	this.heapSize = 0;
  }

  push(data, priority) {
    const node = new Node(data, priority);
    this.insertNode(node);
    this.shiftNodeUp(node);
  }

  pop() {
    if (this.root) {
    }
  }

  detachRoot() {
	  if (this.root){
		  if (this.parentNodes[0] === this.root){
			  this.parentNodes.shift();
		  }
		  let oldRoot = this.root;
		  this.root = null;
		  return oldRoot;
	  }
  }

  restoreRootFromLastInsertedNode(detached) {}

  size() {
	  return this.heapSize;
  }

  isEmpty() {
	  return this.heapSize === 0;
  }

  clear() {
    this.root = null;
	this.parentNodes = [];
	this.heapSize = 0;
  }

  insertNode(node) {
    if (!this.root) {
      this.root = node;
      this.parentNodes[0] = node;
    } else {
      this.parentNodes[0].appendChild(node);
      this.parentNodes.push(node);
      if (this.parentNodes[0].right) {
        this.parentNodes.shift();
      }
	}
	this.heapSize += 1;
  }

  shiftNodeUp(node) {
	  while (node.parent && node.priority > node.parent.priority){
		let parentIndex = this.parentNodes.indexOf(node.parent);
		let nodeIndex = this.parentNodes.indexOf(node);
		if (parentIndex != -1) {
			this.parentNodes[parentIndex] = node;
		}
		if (nodeIndex != -1) {
			this.parentNodes[nodeIndex] = node.parent;
		}
		node.swapWithParent();
		if (!node.parent){
			this.root = node;
		}
		this.shiftNodeUp(node);
	  }
  }

  shiftNodeDown(node) {}
}

module.exports = MaxHeap;
