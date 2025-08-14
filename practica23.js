var Developer = /** @class */ (function () {
    function Developer(name, Salary) {
        this.name = name;
        this.Salary = Salary;
    }
    Developer.prototype.getName = function () {
        return this.name;
    };
    Developer.prototype.getSalary = function () {
        return this.Salary;
    };
    Developer.prototype.getRole = function () {
        return "Developer";
    };
    return Developer;
}());
var Designer = /** @class */ (function () {
    function Designer(name, Salary) {
        this.name = name;
        this.Salary = Salary;
    }
    Designer.prototype.getName = function () {
        return this.name;
    };
    Designer.prototype.getSalary = function () {
        return this.Salary;
    };
    Designer.prototype.getRole = function () {
        return "Designer";
    };
    return Designer;
}());
var Manager = /** @class */ (function () {
    function Manager(name, Salary) {
        this.name = name;
        this.Salary = Salary;
        this.employees = [];
    }
    Manager.prototype.getName = function () {
        return this.name;
    };
    Manager.prototype.getSalary = function () {
        return this.Salary;
    };
    Manager.prototype.getRole = function () {
        return "Manager";
    };
    Manager.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Manager.prototype.removeEmployee = function (employee) {
        var index = this.employees.indexOf(employee);
        if (index == -1) {
            this.employees.splice(index, 1);
        }
    };
    Manager.prototype.getEmployees = function () {
        return this.employees;
    };
    return Manager;
}());
//client code
var dev1 = new Developer("jhon", 1200);
var dev2 = new Developer("kathia", 32200);
var dev3 = new Developer("mariana", 13000);
var designer = new Designer("juan", -12200);
var manager = new Manager("michael", 1000000000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(dev3);
manager.addEmployee(designer);
console.log(manager);
console.log(manager.getRole());
console.log(manager.getSalary());
