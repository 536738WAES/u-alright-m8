/* u alright m8 media player
   Connects the big play button, the time read-out and the track list
   to the page's <audio> element. */

const audio = document.getElementById("player-audio");
const playButton = document.getElementById("player-play");
const playIcon = playButton.querySelector("i");
const titleText = document.getElementById("player-title");
const currentTime = document.getElementById("player-current");
const totalTime = document.getElementById("player-total");
const trackButtons = document.querySelectorAll(".player-track-btn");

/* Turn a number of seconds into mm:ss */
function formatTime(seconds) {
    if (!isFinite(seconds)) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return String(minutes).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}

/* Swap the icon and label between play and pause */
function showPlaying(isPlaying) {
    playIcon.className = isPlaying ? "bi bi-pause-fill" : "bi bi-play-fill";
    playButton.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
}

/* Big round button: play or pause */
playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

/* Track list: load the chosen demo and play it */
trackButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        trackButtons.forEach(function (other) {
            other.removeAttribute("aria-current");
        });
        button.setAttribute("aria-current", "true");
        audio.src = button.dataset.src;
        titleText.textContent = button.textContent;
        audio.play();
    });
});

/* Keep the icon and the time read-out in step with the audio */
audio.addEventListener("play", function () {
    showPlaying(true);
});
audio.addEventListener("pause", function () {
    showPlaying(false);
});
audio.addEventListener("ended", function () {
    showPlaying(false);
});
audio.addEventListener("loadedmetadata", function () {
    totalTime.textContent = formatTime(audio.duration);
});
audio.addEventListener("timeupdate", function () {
    currentTime.textContent = formatTime(audio.currentTime);
});
