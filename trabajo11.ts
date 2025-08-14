interface LightState{
    switchState(lightSwitch: LigthSwitch): void;
}

class OnState implements LightState{
    public switchState(lightSwitch: LigthSwitch): void {
        console.log("light state in on. Turning off...");
         lightSwitch.setState(new OffState()) 
    }
}

class OffState implements LightState{
    public switchState(lightSwitch: LigthSwitch): void {
        console.log("light state in off. Turning on......");
       lightSwitch.setState(new OnState()) 
    }
}
class LigthSwitch{
constructor(private state: LightState ){}

public setState(state: LightState):void{
    this.state = state
}


public press(): void{
    this.state.switchState
}
}

//client code 
const lightSwitch =new LigthSwitch(new OffState());
lightSwitch.press();
lightSwitch.press();


