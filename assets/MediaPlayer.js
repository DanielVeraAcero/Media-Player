function MediaPlayer(config) {
    this.media = config.element;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.play = function () {
    this.media.play();     
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();     
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        console.log('Reproduciendo'); 
        this.play();
    } else {
        console.log('Pausado');
        this.pause();
    }
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function () {
    if (this.media.muted) {
        console.log('Activando sonido'); 
        this.unmute();
    } else {
        console.log('Silenciando');
        this.mute();
    }
}

export default MediaPlayer;