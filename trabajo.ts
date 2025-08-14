/*interface Observer{
    update( subject: Subject): void;
}


class ConcreteObserver implements Observer{
    constructor(private id: number){}
public update(subject: Subject): void {
    console.log(`Observer, ${this.id}up date, new state ${subject.getState}`);
    
}



}





interface Subject{
addObserver(observer: Observer): void;
removeObserver(observer: Observer): void;
notifyObserver():void;
getState(): number;
setState(state: number): void;
}

class ConcreteSubject implements Subject{
    private observer: Observer [] = [];
    private state: number= 0;
   
    
    public addObserver(observer: Observer): void {
        const isExists = this.observer.includes(observer);
        if(isExists){
            return console.log("observer already exist");
            
        }



        this.observer.push(observer)
        console.log("observer added successfully");
        
    }
    public removeObserver(observer: Observer): void {
        const observerIndex = this.observer.indexOf(observer)
        if(observerIndex === -1){
            return console.log("Observer Does not exist");

            
        }
        this.observer.splice(observerIndex, 1);
console.log("observer was successfully removed");



    }

public notifyObserver(): void {
    this.observer.forEach((observer) => observer.update(this))
}


public getState(): number {
    return this.state;
}
public setState(state: number): void {
    this. state = state;
    console.log(" Setting State..... ");
    this.notifyObserver();

}
}


// CLIENT CODE
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver(1);
subject.addObserver(observer1);

const observer2 = new ConcreteObserver(2);
subject.addObserver(observer2)
*/