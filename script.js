const tracks = [
  { 
    name: "Static by Flavor Foley (R3 Music Box)", 
    src: "assets/music/static.mp3", 
    url: "https://www.youtube.com/watch?v=eBwmRPTUVJE" 
  },
  { 
    name: "I'm Fading Away from Ryu Ga Gotoku Gaiden (R3 Music Box)", 
    src: "assets/music/fadingaway.mp3", 
    url: "https://www.youtube.com/watch?v=LB2HHoUh8_k" 
  },
  { 
    name: "Today is a Diamond from Ryu Ga Gotoku 6 (R3 Music Box)", 
    src: "assets/music/diamond.mp3", 
    url: "https://www.youtube.com/watch?v=ygpqZfGEXLU" 
  },
  { 
    name: "Who Will Know by Shiro Sagisu (R3 Music Box)", 
    src: "assets/music/whowillknow.mp3", 
    url: "https://www.youtube.com/watch?v=SWZUi2XJ_A4" 
  },
  { 
    name: "Masterpiece by CG5 (R3 Music Box)",
    src: "assets/music/masterpiece.mp3",
    url: "https://www.youtube.com/watch?v=H0TxhYwmgWg"
  },
  { 
    name: "Always Running by AJ Dispirito (R3 Music Box)",
    src: "assets/music/alwaysrunning.mp3",
    url: "https://www.youtube.com/watch?v=HzDzN4vSECQ"
  },
  { 
    name: "Chase by batta (R3 Music Box)",
    src: "assets/music/chase.mp3",
    url: "https://www.youtube.com/watch?v=D7GhO8UAChE"
  },
  { 
    name: "BIRDBRAIN by Jamie Paige & OK Glass (R3 Music Box)",
    src: "assets/music/birdbrain.mp3",
    url: "https://www.youtube.com/watch?v=2wguschCHm4"
  },
  { 
    name: "Runner by Bafuku Slump (R3 Music Box)",
    src: "assets/music/runner.mp3",
    url: "https://www.youtube.com/watch?v=o_VRCIQRw6w"
  },
  { 
    name: "Fight Til I'm Good Enough by The Living Tombstone (R3 Music Box)",
    src: "assets/music/fighttillimgoodenough.mp3",
    url: "https://www.youtube.com/watch?v=Z0fBs17QABA"
  },
  { 
    name: "Spoken For by Flavor Foley (R3 Music Box)",
    src: "assets/music/spokenfor.mp3",
    url: "https://www.youtube.com/watch?v=gkwExaJ0fZc"
  },
  { 
    name: "I'd Rather Sleep by Kero Kero Bonito (R3 Music Box)",
    src: "assets/music/rathersleep.mp3",
    url: "https://www.youtube.com/watch?v=X0Kvlb6AU84"
  },
  { 
    name: "Bubble by Shonan no Kaze (R3 Music Box)",
    src: "assets/music/bubble.mp3",
    url: "https://www.youtube.com/watch?v=8EiGiESUbvc"
  },
  { 
    name: "Drunk by The Living Tombstone (R3 Music Box)",
    src: "assets/music/drunk.mp3",
    url: "https://www.youtube.com/watch?v=kPyl1nfZFS4"
  },
  { 
    name: "Sunburn by The Living Tombstone (R3 Music Box)",
    src: "assets/music/sunburn.mp3",
    url: "https://www.youtube.com/watch?v=OmUdc7IjRFc"
  },
  { 
    name: "Love I Need by The Living Tombstone (R3 Music Box)",
    src: "assets/music/loveineed.mp3",
    url: "https://www.youtube.com/watch?v=sDuFfCdnXmU"
  },
  { 
    name: "anemoia by Oliver Buckland",
    src: "assets/music/anemoia.mp3",
    url: "https://www.youtube.com/watch?v=Q0guReRtGWI"
    // Non-commercial use permitted with credit per artist’s description
  },
  { 
    name: "Your New Home by Gooseworx & Evan Alderete (R3 Music Box)",
    src: "assets/music/yournewhome.mp3",
    url: "https://www.youtube.com/watch?v=wmMGH6fcI5E"
  },
  { 
    name: "Arpeggio by ALEXANDROS (R3 Music Box)",
    src: "assets/music/arpeggio.mp3",
    url: "https://www.youtube.com/watch?v=lBxq9R3dGvA"
  },
  { 
    name: "Rasen by jon-YAKITORY feat. Ado (R3 Music Box)",
    src: "assets/music/rasen.mp3",
    url: "https://www.youtube.com/watch?v=PFvsHw5IdS8"
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
