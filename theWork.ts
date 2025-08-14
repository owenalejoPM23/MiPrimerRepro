 interface Tool{
     onMouseDown(): void;
     onMouseUp(): void;

 }
class SelectionTool implements Tool{
    public onMouseDown():void{
        console.log("Selection Started");

        
    }

    public onMouseUp(): void {
        console.log("Selection drawn");
        

    }
}

class BrushTool implements Tool{
    public onMouseDown():void{
        console.log("Selection Started");

        
    }

    public onMouseUp(): void {
        console.log("Selection drawn");
        

    }
}
class EraserTool implements Tool{
    public onMouseDown():void{
        console.log("Selection Started");

        
    }

    public onMouseUp(): void {
        console.log("Selection drawn");
        

    }
}

class Canvas {
    private tool: Tool;
    constructor(tool: Tool){}


    public seTool(tool: Tool):void{
        this.tool = tool
    }
    public onMouseDown(): void{
        this.tool.onMouseDown()
    }
    public onMouseUP(): void{
        this.tool.onMouseUp()
    }

}

//client code 

let canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUP();


canvas.seTool(new BrushTool());
canvas.onMouseDown();
canvas.onMouseUP();


canvas.seTool(new EraserTool());
canvas.onMouseDown();
canvas.onMouseUP();
