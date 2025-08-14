var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(collection) {
        this.collection = collection;
        this.position = 0;
    }
    ArrayIterator.prototype.next = function () {
        // Get the next element in the collection
        var result = this.collection[this.position];
        this.position += 1;
        return result;
    };
    ArrayIterator.prototype.hasNext = function () {
        return this.position < this.collection.length;
    };
    return ArrayIterator;
}());
//client code
var array = [1, 2, 3, 4, 5, 6];
var interator = new ArrayIterator(array);
console.log(interator.hasNext());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.hasNext());
var arrayString = ["hello cachones"];
var stringInterator = new ArrayIterator(arrayString);
console.log(stringInterator.hasNext());
console.log(stringInterator.next());
