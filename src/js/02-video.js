import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash/throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const time = localStorage.getItem(LOCALSTORAGE_KEY);
const onTimeupdate = throttle(e => {
  localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}, 1000);

time && player.setCurrentTime(time);

player.on('timeupdate', onTimeupdate);
