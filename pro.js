var Reactangle = /** @class */ (function () {
    function Reactangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Reactangle.prototype.getWidth = function () {
        return this.width;
    };
    Reactangle.prototype.getHeight = function () {
        return this.height;
    };
    Reactangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Reactangle;
}());
var Square = /** @class */ (function () {
    function Square(side) {
        this.side = side;
    }
    Square.prototype.getSide = function () {
        return this.side;
    };
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    return Square;
}());
var SquareToReactangleAdopter = /** @class */ (function () {
    function SquareToReactangleAdopter(square) {
        this.square = square;
    }
    SquareToReactangleAdopter.prototype.getWidth = function () {
        return this.square.getSide();
    };
    SquareToReactangleAdopter.prototype.getHeight = function () {
        return this.square.getSide();
    };
    SquareToReactangleAdopter.prototype.area = function () {
        return this.square.area();
    };
    return SquareToReactangleAdopter;
}());
//cloent code
var square = new Square(-8);
var adapter = new SquareToReactangleAdopter(square);
console.log(adapter.getHeight());
console.log(adapter.getWidth());
console.log(adapter.area());
console.log(adapter);
