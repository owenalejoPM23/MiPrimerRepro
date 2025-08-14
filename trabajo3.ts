class ArrayIterator<T> {
  private position: number = 0;
  constructor(private collection: T[]) {}

  public next(): T {
    // Get the next element in the collection
    let result: T = this.collection[this.position];
    this.position += 1;
    return result;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }
}


//client code

const array: number [] = [1,2,3,4,5,6];
const interator = new ArrayIterator(array);
console.log(interator.hasNext());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.hasNext());



const arrayString = ["hello cachones"];
const stringInterator = new ArrayIterator<string>(arrayString);
console.log(stringInterator.hasNext());
console.log(stringInterator.next());