class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.first) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }

    this.last = newNode;
  }

  dequeue() {
    if (this.first) {
      const dequeued = this.first;

      // Update first pointer to point to the next node of the dequeued node
      this.first = dequeued.next;

      // If the dequeued node is the last node in the queue,
      // update the last pointer to point to `null`
      if (dequeued === this.last) {
        this.last = null;
      }

      return dequeued.value;
    }
  }
}


module.exports = Queue