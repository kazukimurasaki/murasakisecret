window.addEventListener("load", () => {
  const tracks = [
    "assets/music/static.mp3",
    "assets/music/diamond.mp3",
    "assets/music/whowillknow.mp3",
	"assets/music/fadingaway.mp3",
  ];

  // Pick a random track
  const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

  const audio = document.getElementById("bg-music");
  audio.src = randomTrack;
  audio.volume = 0.5;  // adjust as needed
  audio.play().catch(() => {
    // Browser might block autoplay; show simple click-to-play overlay
    const overlay = document.createElement("div");
    overlay.textContent = "Click to begin";
    Object.assign(overlay.style, {
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "1.5em",
      background: "rgba(0, 0, 0, 0.6)",
      cursor: "pointer",
      zIndex: 2
    });
    overlay.onclick = () => {
      audio.play();
      overlay.remove();
    };
    document.body.appendChild(overlay);
  });
});