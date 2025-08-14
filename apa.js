var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseServer = /** @class */ (function () {
    function BaseServer() {
    }
    BaseServer.prototype.handle = function (request) {
        console.log("handling request", request);
    };
    return BaseServer;
}());
var ServerRequestDecorator = /** @class */ (function () {
    function ServerRequestDecorator(serverRequest) {
        this.serverRequest = serverRequest;
    }
    return ServerRequestDecorator;
}());
var LogginMiddleware = /** @class */ (function (_super) {
    __extends(LogginMiddleware, _super);
    function LogginMiddleware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogginMiddleware.prototype.handle = function (request) {
        console.log("loggin request", request);
        this.serverRequest.handle(request);
    };
    return LogginMiddleware;
}(ServerRequestDecorator));
var AuthMiddleware = /** @class */ (function (_super) {
    __extends(AuthMiddleware, _super);
    function AuthMiddleware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthMiddleware.prototype.handle = function (request) {
        if (request.isAuthenticated) {
            console.log("request is authenticated");
            this.serverRequest.handle(request);
        }
        else {
            console.log("unAuthorised access");
        }
    };
    return AuthMiddleware;
}(ServerRequestDecorator));
var request = {
    isAuthenticated: false,
    body: "hello world",
};
var server = new BaseServer();
server = new LogginMiddleware(server);
server = new AuthMiddleware(server);
server.handle(request);
