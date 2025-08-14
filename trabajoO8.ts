abstract class DataParser{
public parseData():void{
this.loadData();
const  data = "sample data";
const parseData = this.parse(data);
this.validate(parseData);
this.useData(parseData)
}
protected loadData (): void{
    console.log("loanding.........");
    
}
protected validate (data: any):void{
    console.log("validate parse.......");
    
}
 protected useData(data: any): void {
    console.log("Using Data...");
  }

  protected abstract parse(data: string): void;
}
   
   class JsonParse extends DataParser{
protected parse(data:any):void{
console.log("parsing data as Json");

return data;
}
   }

  class XMLParse extends DataParser{
protected parse(data:any):void{
console.log("parsing data as XML");

return data;
}
   }

//client code
function dataParse(dataParse: DataParser){
    dataParse.parseData();
}

console.log(" parsing JSON data");
dataParse(new JsonParse);

console.log(" parsing XML data");
dataParse(new XMLParse);
