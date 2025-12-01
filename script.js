const tracks = [
  { name: "Track 1", src: "assets/music/diamond.mp3" },
  { name: "Track 2", src: "assets/music/whowillknow.mp3" },
  { name: "Track 1", src: "assets/music/static.mp3" },
  { name: "Track 3", src: "assets/music/fadingaway.mp3" }
];

const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

const audio = document.getElementById("bg-music");
const trackName = document.getElementById("track-name");

audio.src = randomTrack.src;
trackName.textContent = randomTrack.name;

audio.play().catch(() => {
  console.warn("err");
});