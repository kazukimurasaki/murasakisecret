const tracks = [
  { name: "Track 1", src: "assets/music/track1.mp3" },
  { name: "Track 2", src: "assets/music/track2.mp3" },
  { name: "Track 3", src: "assets/music/track3.mp3" }
];

const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

const audio = document.getElementById("bg-music");
const trackName = document.getElementById("track-name");

audio.src = randomTrack.src;
trackName.textContent = randomTrack.name;

audio.play().catch(() => {
  console.warn("err");
});