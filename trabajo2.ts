
interface Observer{
update(temperature: number, humidity:number,pressure:number): void;
}



interface Subject{
    registreObserver (observer : Observer): void;
    removeObserver ( observer: Observer): void;
    notifyObserver(): void;
}



class WeatherData implements Subject{
private observers: Observer [] = [];
private temperature: number | undefined;
private humidity: number | undefined;
private pressure: number | undefined;


constructor(){
    this.observers
}

public registreObserver(observer: Observer): void {
    this.observers.push(observer);
}

public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer)
        if(index >= 0){
            this.observers.splice(index, 1)
            
        }
}
notifyObserver(): void {
    if (this.temperature !== undefined &&
        this.humidity !== undefined &&
        this.pressure !== undefined

    ){for(let observer of this.observers){
        observer.update(this.temperature, this.humidity, this.pressure);
      }
    }
  } 

public setMeasurement(
    temperature: number,
    humidity:number,
    pressure: number,
): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObserver();
  }
}

class  CurrentConditionsDisplay implements Observer{
    private temperature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;



    constructor(private weatherData: Subject){
        this.weatherData.registreObserver(this);

    }
public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.display();
}

public display(): void{
  if (
this.temperature !== undefined &&
this.humidity !== undefined &&
this.pressure !== undefined



  ) {

    console.log(`temperature5, ${this.temperature}, humidity:${this.humidity}`);
    
  } else {
    console.log(" Weather data is not avaible");
    
  }
}

}


//client code
const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);



weatherData.setMeasurement(80,65,30.5)


 

