const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.heap.heapSize >= this.maxSize){
			throw new Error();
		}
		this.heap.push(data, priority);
	}

	shift() {
		if (this.heap.isEmpty()){
			throw new Error();
		}
		return this.heap.pop();
	}

	size() {
		return this.heap.heapSize;
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
