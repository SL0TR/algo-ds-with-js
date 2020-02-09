class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(item) {
    this.storage[this.count] = item;
    this.count++;
  }

  pop() {
    if(this.count === 0) {
      throw new Error('No items on the stack!');
    }
    this.count--;
    const item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
  }

  size() {
    return this.count++;
  }

  peek() {
    return this.storage[this.count -1];
  }

}

const myStack = new Stack();

myStack.push(5);
myStack.push({ id: 1});
myStack.push('test string');

console.log( myStack.pop(), myStack.peek())


