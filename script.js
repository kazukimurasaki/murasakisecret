const tracks = [
  { 
    name: "Static (R3 Music Box)", 
    src: "assets/music/static.mp3", 
    url: "https://www.youtube.com/watch?v=eBwmRPTUVJE" 
  },
  { 
    name: "I'm Fading Away (R3 Music Box)", 
    src: "assets/music/fadingaway.mp3", 
    url: "https://www.youtube.com/watch?v=LB2HHoUh8_k" 
  },
  { 
    name: "Today is a Diamond (R3 Music Box)", 
    src: "assets/music/diamond.mp3", 
    url: "https://www.youtube.com/watch?v=XXXXX3" 
  },
  { 
    name: "Who Will Know (R3 Music Box)", 
    src: "assets/music/whowillknow.mp3", 
    url: "https://www.youtube.com/watch?v=SWZUi2XJ_A4" 
  },
  { 
    name: "Masterpiece by CG5 (R3 Music Box)",
    src: "assets/music/masterpiece.mp3",
    url: "https://www.youtube.com/watch?v=XXXXX1"
  },
  { 
    name: "Always Running by AJ Dispirito (R3 Music Box)",
    src: "assets/music/alwaysrunning.mp3",
    url: "https://www.youtube.com/watch?v=XXXXX2"
  },
  { 
    name: "Chase by batta (R3 Music Box)",
    src: "assets/music/chase.mp3",
    url: "https://www.youtube.com/watch?v=XXXXX3"
  },
  { 
    name: "BIRDBRAIN by Jamie Paige & OK Glass (R3 Music Box)",
    src: "assets/music/birdbrain.mp3",
    url: "https://www.youtube.com/watch?v=XXXXX4"
  },
  { 
    name: "Runner by Bafuku Slump (R3 Music Box)",
    src: "assets/music/runner.mp3",
    url: "https://www.youtube.com/watch?v=XXXXX5"
  },
  { 
    name: "Fight Til I'm Good Enough by The Living Tombstone (R3 Music Box)",
    src: "assets/music/fighttillimgoodenough.mp3",
    url: "https://www.youtube.com/watch?v=XXXXX6"
  },
  { 
    name: "Spoken For by Flavor Foley (R3 Music Box)",
    src: "assets/music/spokenfor.mp3",
    url: "https://www.youtube.com/watch?v=XXXXX7"
  },
  { 
    name: "I'd Rather Sleep by Kero Kero Bonito (R3 Music Box)",
    src: "assets/music/rathersleep.mp3",
    url: "https://www.youtube.com/watch?v=XXXXX8"
  },
  { 
    name: "Bubble by Shonan no Kaze (R3 Music Box)",
    src: "assets/music/bubble.mp3",
    url: "https://www.youtube.com/watch?v=XXXXX9"
  }
];

// Get last track index from localStorage
const lastIndex = localStorage.getItem("lastTrackIndex");

// Avoid repeating last track on refresh
let newIndex;
do {
  newIndex = Math.floor(Math.random() * tracks.length);
} while (newIndex == lastIndex && tracks.length > 1);

const randomTrack = tracks[newIndex];

// Refresh audio
const audio = document.getElementById("bg-music");
audio.src = randomTrack.src;
audio.play().catch(() => {
  console.warn("Autoplay blocked — user interaction needed.");
});

// Update track name and link
const trackName = document.getElementById("track-name");
if (trackName) {
  trackName.textContent = randomTrack.name;
  trackName.href = randomTrack.url;
}

// Store index in localStorage to prevent repetition
localStorage.setItem("lastTrackIndex", newIndex);

// --- Auto-play next track when current ends ---
audio.addEventListener("ended", () => {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * tracks.length);
  } while (nextIndex === newIndex && tracks.length > 1);

  const nextTrack = tracks[nextIndex];
  audio.src = nextTrack.src;
  audio.play().catch(() => {
    console.warn("Autoplay blocked — user interaction needed.");
  });

  // Update track text and link
  if (trackName) {
    trackName.textContent = nextTrack.name;
    trackName.href = nextTrack.url;
  }

  // Update localStorage
  localStorage.setItem("lastTrackIndex", nextIndex);
});
