interface MediaPlayerImplementation{
    playAudio():void;
    playVideo():void;
}

class WindowsmediaPLayer implements MediaPlayerImplementation{
    public playAudio(): void {
        console.log("playing audio on windows media player");
        
    }
    public playVideo(): void {
        console.log("play video on windonw media player");


        
    }

}


class MacOsmediaPLayer implements MediaPlayerImplementation{
    public playAudio(): void {
        console.log("playing audio on MacOs media player");
        
    }
    public playVideo(): void {
        console.log("play video on MacOs media player");

    }
}

abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
};



class AudioPlayer extends MediaPlayerAbstraction{
    public playFile(): void {
        this.implementation.playAudio;
    }
}

class VIdeoPlayer extends MediaPlayerAbstraction{
    public playFile(): void {
        this.implementation.playVideo();
    }
}

//client code


let windowsAudioplayer = new AudioPlayer(new WindowsmediaPLayer());
windowsAudioplayer.playFile();



let MacOSVideoPlayer = new VIdeoPlayer(new MacOsmediaPLayer());
MacOSVideoPlayer.playFile();