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

let lastIndex = localStorage.getItem("lastTrackIndex");

const audio = document.getElementById("bg-music");
const trackName = document.getElementById("track-name");

function playRandomTrack() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * tracks.length);
  } while (newIndex == lastIndex && tracks.length > 1);

  const track = tracks[newIndex];

  audio.src = track.src;
  audio.play().catch(() => {
    console.warn("Autoplay blocked — user interaction needed.");
  });

  trackName.textContent = track.name;
  trackName.href = track.url;

  lastIndex = newIndex;
  localStorage.setItem("lastTrackIndex", newIndex);
}

// Play first track on load
playRandomTrack();

// Trigger next track when the current one ends
audio.addEventListener("ended", playRandomTrack);
