const tracks = [
  { 
    name: "Static by Flavor Foley (R3 Music Box)", 
    src: "assets/music/static.mp3", 
    url: "https://www.youtube.com/watch?v=eBwmRPTUVJE" 
  },
  { 
    name: "I'm Fading Away from Like a Dragon Gaiden (R3 Music Box)", 
    src: "assets/music/fadingaway.mp3", 
    url: "https://www.youtube.com/watch?v=LB2HHoUh8_k" 
  },
  { 
    name: "Today is a Diamond from Yakuza 6 (R3 Music Box)", 
    src: "assets/music/diamond.mp3", 
    url: "https://www.youtube.com/watch?v=XXXXX3"
  },
  { 
    name: "Who Will Know by Shiro Sagisu (R3 Music Box)", 
    src: "assets/music/whowillknow.mp3", 
    url: "https://www.youtube.com/watch?v=SWZUi2XJ_A4" 
  }
];

// get last track index from localStorage
const lastIndex = localStorage.getItem("lastTrackIndex");

// avoid repeating last track on refresh
let newIndex;
do {
  newIndex = Math.floor(Math.random() * tracks.length);
} while (newIndex == lastIndex && tracks.length > 1);

const randomTrack = tracks[newIndex];

// refresh audio
const audio = document.getElementById("bg-music");
audio.src = randomTrack.src;
audio.play().catch(() => {
  console.warn("Autoplay blocked — user interaction needed.");
});

// update track name
const trackName = document.getElementById("track-name");
trackName.textContent = randomTrack.name;
trackName.href = randomTrack.url;

// index localstorage
localStorage.setItem("lastTrackIndex", newIndex);
