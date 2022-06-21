const btnPlay = document.querySelector('.play-back');
const wrapperVideo = document.getElementById('videoFone');

const exPlay = document.querySelector('.ex-play');
const exVideo = document.getElementById('exVideo');

btnPlay.onclick = function() {
    wrapperVideo.play();
};