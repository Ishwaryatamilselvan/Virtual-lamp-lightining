function chgimg(x) {
    const lamp = document.getElementById("i1");
    const audio = document.getElementById("fluteAudio");

    lamp.src = x;
    lamp.classList.add("glow");

    setTimeout(() => lamp.classList.remove("glow"), 1000);
    
    // Play audio when lamp changes
    audio.currentTime = 0;
    audio.play();
}
