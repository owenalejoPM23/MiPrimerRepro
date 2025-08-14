var GrayScaleStrategy = /** @class */ (function () {
    function GrayScaleStrategy() {
    }
    GrayScaleStrategy.prototype.apply = function (image) {
        console.log("aid ".concat(image, " Grayscale"));
    };
    return GrayScaleStrategy;
}());
var SepiaStrategy = /** @class */ (function () {
    function SepiaStrategy() {
    }
    SepiaStrategy.prototype.apply = function (image) {
        console.log("paid ".concat(image, " Sepia strategy "));
    };
    return SepiaStrategy;
}());
var NegativeStrategy = /** @class */ (function () {
    function NegativeStrategy() {
    }
    NegativeStrategy.prototype.apply = function (image) {
        console.log("paid ".concat(image, " negative strategy"));
    };
    return NegativeStrategy;
}());
var ImageProccessor = /** @class */ (function () {
    function ImageProccessor(strategy) {
        this.strategy = strategy;
    }
    ImageProccessor.prototype.setFilterStrategy = function (strategy) {
        this.strategy = strategy;
    };
    ImageProccessor.prototype.applyFilter = function (image) {
        this.strategy.apply(image);
    };
    return ImageProccessor;
}());
//client code
var imageProccessor = new ImageProccessor(new GrayScaleStrategy());
imageProccessor.applyFilter("image.jpg");
imageProccessor.setFilterStrategy(new SepiaStrategy());
imageProccessor.applyFilter("Image2.jpg");
