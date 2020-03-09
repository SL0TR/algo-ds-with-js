class PriorityQueue {

  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  enqueue(elem) {
    if(this.isEmpty()) {
      this.collection.push(elem);
      return;
    }

    let added = false;
    for(const [i, item] of this.collection.entries()) {
      if(elem[1] > item[1]) {
        this.collection.splice(i, 0, elem);
        added = true;
        break;
      }
    }
    if(!added) {
      this.collection.push(elem);
    }

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

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(['Hello there!', 10])
priorityQueue.enqueue(['test there!', 26])
priorityQueue.enqueue(['Hdasd asd there!', 3])
priorityQueue.enqueue(['zxd s there!', 4])
priorityQueue.enqueue(['popxd s there!', 9])
priorityQueue.enqueue(['ewed s there!', 24])

priorityQueue.print(); // output => [
//   [ 'test there!', 26 ],
//   [ 'ewed s there!', 24 ],
//   [ 'Hello there!', 10 ],
//   [ 'popxd s there!', 9 ],
//   [ 'zxd s there!', 4 ],
//   [ 'Hdasd asd there!', 3 ]
// ]