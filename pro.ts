class Reactangle{
    constructor(private width: number, private height: number ){}


    public getWidth(): number{
        return this.width
    }

public getHeight():number{
    return this.height
}


public area():number{
    return this.width*this.height;

}


}


class Square{
    constructor(private side: number){}
public getSide():number{
    return this.side;
}

public area():number{
    return this.side * this.side;
}

}
class SquareToReactangleAdopter{
    constructor(private square: Square){}


public getWidth():number{
    return this.square.getSide();

}

public getHeight():number{
    return this.square.getSide();
}


public area():number{
    return this.square.area();
}

}
//cloent code
let square = new Square(-8);
let adapter = new SquareToReactangleAdopter(square);


console.log(adapter.getHeight());
console.log(adapter.getWidth());
console.log(adapter.area());
console.log(adapter);











