 class Amplifier{
    public turnOn(): void{
        
        console.log(" Amplifier is Tunerd On");  
    }

public setVolumen(level: number): void{
    console.log(`Volumen is set to , ${level}`);
    
}

 }

class DvdPlayer {
    turnOn(): void{

        console.log(" the DVD Player is tuned on");
        
    }

    public play (movie:string){
        console.log(`playing ${movie}`);
        
    }
}

class Projector {
turnOn():void{
 console.log("Projector is turned On");
    
}
public setInput (dvdPlayer: DvdPlayer): void{
console.log(" Input set to DvdPlayer");

}
}

class Lights{
    public dim(level: number):void{
        console.log(`Lights dimmed to ${level}`);
        
    }
}

class HomeTheaterFacade{
    constructor (
        private amplifier: Amplifier,
        private dvdPlayer: DvdPlayer,
        private projector: Projector,
        private lights: Lights,
    ){}



    public watchMovie(movie: string, volumen: number, level:number){
        console.log(`Get Ready To watch ${movie}`);
        this.lights.dim(level);
        this.amplifier.turnOn();
        this.amplifier.setVolumen(volumen);
        this.dvdPlayer.turnOn();
        this.projector.turnOn();
        this.projector.setInput(this.dvdPlayer);
        this.dvdPlayer.play(movie);
        
    }


}



let amplifier = new  Amplifier();
let dvdPlayer = new  DvdPlayer();
let projector = new  Projector();
let lights    = new  Lights();

let homeTheater = new HomeTheaterFacade(
    amplifier,
    dvdPlayer,
    projector,
    lights,
)

homeTheater.watchMovie("el entierro de la anaconda", 10, 20)