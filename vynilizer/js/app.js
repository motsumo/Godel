const playButton = document.getElementsByClassName('play')[0];
const audio = document.getElementsByClassName('music')[0];
const disc = document.getElementsByClassName('disc')[0];
let isPlaing = false;

playButton.onclick = function () {
    if (!isPlaing) {
        playButton.innerHTML="Stop";
        audio.play();
        isPlaing = true;
        audioDuration=audio.duration/5;
        disc.style.animation = `plaing ${audioDuration}s 5`;
    } else {
        playButton.innerHTML="Play";
        audio.pause();
        isPlaing = false;
        disc.animation.pause();
    }
}