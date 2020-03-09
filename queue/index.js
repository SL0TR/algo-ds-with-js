class Queue {

  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  enqueue(elem) {
    this.collection.push(elem)
  }

  dequeue() {
    this.collection.shift()
  }

  front() {
    return this.collection[0]
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(10);
queue.enqueue(9);

queue.print() // -> [ 1, 10, 9 ]

queue.dequeue()

queue.print() // -> [ 10, 9 ]

console.log(queue.front())  // -> 10
console.log(queue.size())  // -> 2
console.log(queue.isEmpty())  // -> false

