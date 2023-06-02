import Player from '@vimeo/player';
import storage from "./storag.js"
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (event) {
    storage.save("videoplayer-current-time", event.seconds);
    console.log(event);
}

player.on('timeupdate', throttle(onPlay, 1000))


const time = storage.load("videoplayer-current-time")

if (time) {
    player.setCurrentTime(time)
}
