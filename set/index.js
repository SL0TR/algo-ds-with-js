class CustomSet {
  constructor() {
    this.collection = [];
  }
  
  values() {
    return this.collection;
  }

  has(elem) {
    return this.collection.indexOf(elem) !== -1;
  }

  add(elem) {
    if(!this.has(elem)) {
      this.collection.push(elem);
      return true;
    }
    return false;
  }

  remove(elem) {
    if(this.has(elem)) {
      const index = this.collection.indexOf(elem);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  union(otherSet) {
    const unionSet = new CustomSet();
    const combinedSetValues = [...this.values(), ...otherSet.values()];
    combinedSetValues.forEach(e => unionSet.add(e))
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new CustomSet();
    const firstSet = this.values();
    firstSet.forEach(e => otherSet.has(e) ? intersectionSet.add(e) : null )
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new CustomSet();
    const firstSet = this.values();
    firstSet.forEach(e => !otherSet.has(e) ? differenceSet.add(e) : null )
    return differenceSet;
  }

  subset(otherSet) {
    const firstSet = this.values();
    return firstSet.every(e => otherSet.has(e))
  }

}

const setA = new CustomSet();
const setB = new CustomSet();

setA.add(5);
setA.add(75);
setA.add(15);

setB.add(35);
setB.add(3);
setB.add(15);

const unionSet = setA.union(setB) // -> { collection: [ 5, 75, 15, 35, 25 ] }
const intersectionSet = setA.intersection(setB) // -> { collection: [ 15 ] }
const differenceSet = setA.difference(setB) // -> { collection: [ 5, 75 ] }
const subset = setA.subset(setB) // -> false