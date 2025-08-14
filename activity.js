var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.turnOn = function () {
        console.log(" Amplifier is Tunerd On");
    };
    Amplifier.prototype.setVolumen = function (level) {
        console.log("Volumen is set to , ".concat(level));
    };
    return Amplifier;
}());
var DvdPlayer = /** @class */ (function () {
    function DvdPlayer() {
    }
    DvdPlayer.prototype.turnOn = function () {
        console.log(" the DVD Player is tuned on");
    };
    DvdPlayer.prototype.play = function (movie) {
        console.log("playing ".concat(movie));
    };
    return DvdPlayer;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.turnOn = function () {
        console.log("Projector is turned On");
    };
    Projector.prototype.setInput = function (dvdPlayer) {
        console.log(" Input set to DvdPlayer");
    };
    return Projector;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function (level) {
        console.log("Lights dimmed to ".concat(level));
    };
    return Lights;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(amplifier, dvdPlayer, projector, lights) {
        this.amplifier = amplifier;
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
        this.lights = lights;
    }
    HomeTheaterFacade.prototype.watchMovie = function (movie, volumen, level) {
        console.log("Get Ready To watch ".concat(movie));
        this.lights.dim(level);
        this.amplifier.turnOn();
        this.amplifier.setVolumen(volumen);
        this.dvdPlayer.turnOn();
        this.projector.turnOn();
        this.projector.setInput(this.dvdPlayer);
        this.dvdPlayer.play(movie);
    };
    return HomeTheaterFacade;
}());
var amplifier = new Amplifier();
var dvdPlayer = new DvdPlayer();
var projector = new Projector();
var lights = new Lights();
var homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector, lights);
homeTheater.watchMovie("el entierro de la anaconda", 10, 20);
