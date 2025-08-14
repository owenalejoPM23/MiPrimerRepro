/*interface Employee{
    getName():void;
    getSalary(): void;
    getRole():void;

}


class Developer implements Employee{
    constructor(
        private name: string, private Salary:number
    ){}
    public getName(): string {
        return this.name;
    }

    public getSalary(): number {
        return this.Salary
    }

    public getRole(): string {
        return "Developer";
    }
}




class Designer implements Employee{
    constructor(
        private name: string, private Salary:number
    ){}
    public getName(): string {
        return this.name;
    }

    public getSalary(): number {
        return this.Salary
    }

    public getRole(): string {
        return "Designer";
    }
}

interface CompositeEmployee extends Employee{
addEmployee ( employee: Employee):void;
removeEmployee(employee: Employee): void;
getEmployees(): Employee[];


}

class Manager implements CompositeEmployee{
    private employees: Employee [] = [];
     constructor(
        private name: string, private Salary:number){}
      
        public getName(): string {
        return this.name;
    }

    public getSalary(): number {
        return this.Salary
    }

    public getRole(): string {
        return "Manager";

    }
    public addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }


    public removeEmployee(employee: Employee): void {
        const index = this.employees.indexOf(employee);
        if(index ! == -1 ){
            this.employees.splice(index,1)
        }

    }
    public getEmployees(): Employee[] {
        return this.employees;
    }
    }


//client code
let dev1 = new Developer("jhon", 1200);
let dev2 = new Developer("kathia", 32200);
let dev3 = new Developer("mariana", 13000);
let designer = new Designer("juan", -12200);


let manager = new Manager ("michael", 1000000000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(dev3);
manager.addEmployee(designer);

console.log(manager);
console.log(manager.getRole());
console.log(manager.getSalary());*/