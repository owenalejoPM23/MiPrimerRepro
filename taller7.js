var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton;
        }
        return Singleton.instance;
    };
    Object.defineProperty(Singleton.prototype, "value", {
        get: function () {
            return Singleton._value;
        },
        set: function (value) {
            Singleton._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return Singleton;
}());
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
instance1.value = 10;
instance2.value = 10;
console.log(instance1.value);
console.log(instance2.value);
console.log(instance1 === instance2);
