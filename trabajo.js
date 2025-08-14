var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(id) {
        this.id = id;
    }
    ConcreteObserver.prototype.update = function (subject) {
        console.log("Observer, ".concat(this.id, "update, new state ").concat(subject.getState));
    };
    return ConcreteObserver;
}());
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observer = [];
        this.state = 0;
    }
    ConcreteSubject.prototype.addObserver = function (observer) {
        var isExists = this.observer.includes(observer);
        if (isExists) {
            return console.log("observer already exist");
        }
        this.observer.push(observer);
        console.log("observer added successfully");
    };
    ConcreteSubject.prototype.removeObserver = function (observer) {
        var observerIndex = this.observer.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Observer Does not exist");
        }
        this.observer.splice(observerIndex, 1);
        console.log("observer was successfully removed");
    };
    ConcreteSubject.prototype.notifyObserver = function () {
        var _this = this;
        this.observer.forEach(function (observer) { return observer.update(_this); });
    };
    ConcreteSubject.prototype.getState = function () {
        return this.state;
    };
    ConcreteSubject.prototype.setState = function (state) {
        this.state = state;
        console.log(" Setting State..... ");
        this.notifyObserver();
    };
    return ConcreteSubject;
}());
// CLIENT CODE
var subject = new ConcreteSubject();
var observer1 = new ConcreteObserver(1);
subject.addObserver(observer1);
var observer2 = new ConcreteObserver(2);
subject.addObserver(observer2);
