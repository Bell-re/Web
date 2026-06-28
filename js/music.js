const music = new Audio("assets/audio/birthday.mp3");
music.loop = true;
music.preload = "auto";

function playMusic() {
    if (!music.paused) return;

    const playPromise = music.play();

    if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
            // The browser may still block playback until a direct action occurs.
        });
    }
}

function attachMusicToGiftButton() {
    const giftButton = document.querySelector("button");

    if (!giftButton) return;

    giftButton.addEventListener("click", () => {
        playMusic();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachMusicToGiftButton);
} else {
    attachMusicToGiftButton();
}