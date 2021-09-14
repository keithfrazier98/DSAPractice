// do stuff with stacks

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // Create a new node,
    // add data to the new node, and
    // have the pointer point to the top
    this.top = new Node(value, this.top);
    return this;
  }

  pop(){
      const popped = this.top
      this.top = popped.next
      return popped.value
  }
}

module.exports= Stack