var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CakeRecipe = /** @class */ (function () {
    function CakeRecipe() {
    }
    CakeRecipe.prototype.bakeCake = function () {
        this.bakeCake();
        this.mixIngredients();
        this.bake();
        this.coolingDown();
        this.decorate();
    };
    CakeRecipe.prototype.preHearOven = function () {
        console.log("PreHeating oven to 175 degree C");
    };
    CakeRecipe.prototype.bake = function () {
        console.log("Baking cake........");
    };
    CakeRecipe.prototype.coolingDown = function () {
        console.log("Decorating cake.........");
    };
    CakeRecipe.prototype.decorate = function () {
        console.log("Decorating cake.........");
    };
    return CakeRecipe;
}());
var ChocolateCake = /** @class */ (function (_super) {
    __extends(ChocolateCake, _super);
    function ChocolateCake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChocolateCake.prototype.mixIngredients = function () {
        console.log("mixing: cholate, sugar, butter, flour. eggs");
    };
    ChocolateCake.prototype.decorate = function () {
        console.log(" Decorating cake with chocolate");
    };
    return ChocolateCake;
}(CakeRecipe));
var vainillaCake = /** @class */ (function (_super) {
    __extends(vainillaCake, _super);
    function vainillaCake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    vainillaCake.prototype.mixIngredients = function () {
        console.log("mixing: cholate, sugar, butter, flour. eggs");
    };
    return vainillaCake;
}(CakeRecipe));
//client code
function bakeCake(cake) {
    cake.bakeCake();
}
console.log("baking a chocolate cake");
bakeCake(new ChocolateCake());
