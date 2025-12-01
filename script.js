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
let lastIndex = localStorage.getItem("lastTrackIndex");

const audio = document.getElementById("bg-music");
const trackName = document.getElementById("track-name");

function playRandomTrack() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * tracks.length);
  } while (newIndex == lastIndex && tracks.length > 1);

  const track = tracks[newIndex];

  // update audio
  audio.src = track.src;
  audio.play().catch(() => {
    console.warn("Autoplay blocked — user interaction needed.");
  });

  // update track name and link
  trackName.textContent = track.name;
  trackName.href = track.url;

  // store the current index
  lastIndex = newIndex;
  localStorage.setItem("lastTrackIndex", newIndex);
}

// play the first track on page load
playRandomTrack();

// when a track ends, play a new random one
audio.addEventListener("ended", playRandomTrack);
