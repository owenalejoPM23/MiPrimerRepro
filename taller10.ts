interface ShapeProperties {
color: string;
x: number;
y: number;
}

 abstract class  Shape  {
 constructor( public properties: ShapeProperties){}
abstract clone(): Shape;
}



class Reactangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);

  }

public clone(): Shape {

let clonedProperties: ShapeProperties ={
    color: this.properties.color,
    x: this.properties.x,
    y: this.properties.y,
};
return new Reactangle(clonedProperties, this.width, this.height)
}


}

class circle extends Shape{
constructor(
properties: ShapeProperties,
public radius: number


){
super(properties);

}

}