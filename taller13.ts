/*interface IproductA {
operationA(): string;
}

interface IproductB{
    operationB (): string;
combinedOperation(collarborator: IproductA): string;
}

interface IFactoy{
    createProductA(): IproductA;
    createProductB(): IproductB;
}

class productA implements IproductA{
    public operationA(): string {
        return "this is the result of operation A";
 
    }
   

    
}

class ProductB implements IproductB{
    public operationB(): string {
        return "this is the result of operation B";
 
    }
   
public combinedOperation(collarborator: IproductA): string{
    const result = collarborator.operationA();
    return `The result of produt B collobrating with (${result})`;
}
}


class Factory implements IFactoy{
  public createProductA(): IproductA {
      return new productA();
  }



  public createProductB(): IproductB {
      return new ProductB();
      
  }
}



// client code
const factory = new Factory();

const productA = factory.createProductA();
console.log(productA.operationA());

const productB = factory.createProductB();
console.log(productB.combinedOperation(productA));
console.log(productB.operationB());
 
*/

interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  public operationA(): string {
    return "This is the result of Operation A";
  }
}

class ProductB implements IProductB {
  public operationB(): string {
    return "This is the result of Operation B";
  }

  public combinedOperation(collaborator: IProductA): string {
    const result = collaborator.operationA();
    return `The result of Product B Collobrating with (${result})`;
  }
}

class Factory implements IFactory {
  public createProductA(): IProductA {
    return new ProductA();
  }

  public createProductB(): IProductB {
    return new ProductB();
  }
}

//  Client Code
const factory = new Factory();

const productA = factory.createProductA();
console.log(productA.operationA());

const productB = factory.createProductB();
console.log(productB.combinedOperation(productA));
console.log(productB.operationB());