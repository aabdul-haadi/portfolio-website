const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
const verseDisplay = document.getElementById('verseDisplay');
const verseText = document.getElementById('verseText');

// Verse translations
const verses = [
    { verse: "13", surah: "Ar-Rahman", translation: "Then which of the favors of your Lord will you deny?" },
    { verse: "67", surah: "Al-Mulk", translation: "Blessed is He in whose hand is dominion, and He is over all things competent." },
    { verse: "24", surah: "An-Nur", translation: "Allah is the Light of the heavens and the earth." },
    { verse: "2", surah: "Al-Baqarah", translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah." },
    { verse: "36", surah: "Yasin", translation: "Indeed, We have brought the dead to life and recorded what they have sent before them and their footprints." },
    { verse: "18", surah: "Al-Kahf", translation: "Praise be to Allah, who has sent down the Book to His servant and has not made therein any deviance." },
    { verse: "17", surah: "Al-Isra", translation: "Glory be to Him who took His servant by night from the Sacred Mosque to the Farthest Mosque." },
    { verse: "112", surah: "Al-Ikhlas", translation: "Say, 'He is Allah, [who is] One.'" }
];

let currentRotation = 0;

// Hide verse display initially
verseDisplay.classList.remove('active');
verseText.textContent = ''; // Clear text content

spinBtn.onclick = function () {
    // Generate a random rotation value
    const randomRotation = Math.floor(Math.random() * 3000) + 2000;
    currentRotation += randomRotation;
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // Delay to ensure the spin animation is complete
    setTimeout(() => showVerse(), 5000); // Adjust delay if needed
};

function showVerse() {
    // Calculate the index based on the current rotation
    const selectedIndex = Math.floor((currentRotation % 360) / (360 / verses.length));
    
    // Display the selected verse
    verseText.textContent = verses[selectedIndex].translation;
    verseDisplay.classList.add('active'); // Show verse display
}
