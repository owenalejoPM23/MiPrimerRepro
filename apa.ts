interface ServerRequest{
    handle(request: any):void
}

class BaseServer implements ServerRequest{
    public handle(request: any): void {
 console.log("handling request", request);
 
    }
}

abstract class ServerRequestDecorator implements ServerRequest{
    constructor (protected serverRequest: ServerRequest){}
    abstract handle(request: any): void;
}




class LogginMiddleware extends ServerRequestDecorator{
    public handle(request: any): void {
    console.log("loggin request", request);
    this.serverRequest.handle(request)
    }
}

class AuthMiddleware extends ServerRequestDecorator{
    public handle(request: any): void {
       if (request.isAuthenticated){
        console.log("request is authenticated");
        this.serverRequest.handle(request);
        
       }else{
        console.log("unAuthorised access");
        
       }
    }
}


const request = {
   isAuthenticated: false,
   body: "hello world",

};
 let server: ServerRequest = new BaseServer();
 server = new LogginMiddleware( server);
server= new AuthMiddleware(server);
server.handle(request)