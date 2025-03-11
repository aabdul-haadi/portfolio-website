const verses = {
    happy: [
        "“And We have certainly made the Quran easy to remember. So is there anyone who will remember?” (Quran 54:17)",
        "“And your Lord is going to give you, and you will be satisfied.” (Quran 93:5)",
        "“So do not weaken and do not grieve, and you will be superior if you are [true] believers.” (Quran 3:139)",
        "“And indeed, it is We who give life and cause death, and We are the inheritor.” (Quran 15:23)",
        "“Allah will soon grant relief and ease.” (Quran 65:2-3)",
        "“But yes! Whoever fulfills his commitment and fears Allah, then indeed, Allah loves those who fear Him.” (Quran 3:76)",
        "“And We will surely test you with something of fear and hunger, and a loss of wealth and lives, but give good tidings to the patient.” (Quran 2:155)",
        "“And Allah is the Bestower of reward.” (Quran 95:6)",
        "“So which of the favors of your Lord would you deny?” (Quran 55:13)",
        "“Indeed, Allah is with those who fear Him and those who are doers of good.” (Quran 16:128)"
    ],
    sad: [
        "“Do not lose hope, nor be sad.” (Quran 3:139)",
        "“Indeed, with hardship [will be] ease.” (Quran 94:6)",
        "“And rely upon the Ever-Living who does not die.” (Quran 25:58)",
        "“And indeed, it is We who give life and cause death, and We are the inheritor.” (Quran 15:23)",
        "“Allah will soon grant relief and ease.” (Quran 65:2-3)",
        "“But yes! Whoever fulfills his commitment and fears Allah, then indeed, Allah loves those who fear Him.” (Quran 3:76)",
        "“And We will surely test you with something of fear and hunger, and a loss of wealth and lives, but give good tidings to the patient.” (Quran 2:155)",
        "“And Allah is the Bestower of reward.” (Quran 95:6)",
        "“So which of the favors of your Lord would you deny?” (Quran 55:13)",
        "“Indeed, Allah is with those who fear Him and those who are doers of good.” (Quran 16:128)"
    ],
    grateful: [
        "“If you are grateful, I will surely increase your favor.” (Quran 14:7)",
        "“And whatever of blessing you have – it is from Allah.” (Quran 16:53)",
        "“So remember Me; I will remember you.” (Quran 2:152)",
        "“And Allah is full of bounty to the people.” (Quran 2:243)",
        "“Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.” (Quran 2:222)",
        "“And Allah wants to lighten for you [your difficulties].” (Quran 4:28)",
        "“And your Lord is the Forgiving, Full of Mercy.” (Quran 18:58)",
        "“So worship your Lord until there comes to you the certainty.” (Quran 15:99)",
        "“Indeed, Allah is Knowing and Wise.” (Quran 24:58)"
    ],
    anxious: [
        "“Is not Allah sufficient for His Servant?” (Quran 39:36)",
        "“Indeed, Allah is with those who are patient.” (Quran 8:46)",
        "“And put your trust in Allah, and Allah is sufficient as a Disposer of affairs.” (Quran 33:3)",
        "“Allah is with those who fear Him.” (Quran 9:36)",
        "“So let not this world deceive you.” (Quran 31:33)",
        "“Do not be sad; indeed Allah is with us.” (Quran 9:40)",
        "“Your ally is none but Allah and [therefore] the believers.” (Quran 5:55)",
        "“He guides whom He wills to a straight path.” (Quran 2:213)",
        "“Indeed, Allah is with the patient.” (Quran 8:66)"
    ],
    confused: [
        "“And whoever fears Allah - He will make for him a way out.” (Quran 65:2)",
        "“Allah does not burden a soul beyond that it can bear.” (Quran 2:286)",
        "“And whoever relies upon Allah - then He is sufficient for him.” (Quran 65:3)",
        "“Indeed, Allah is with those who fear Him and those who are doers of good.” (Quran 16:128)",
        "“And rely upon the Ever-Living who does not die.” (Quran 25:58)",
        "“So be patient. Indeed, the promise of Allah is truth.” (Quran 30:60)",
        "“And whoever puts his trust in Allah, He will be enough for him.” (Quran 65:3)",
        "“Say, ‘It is Allah who saves you from it and from every distress.’” (Quran 6:64)",
        "“And Allah wants to lighten for you [your difficulties].” (Quran 4:28)",
        "“So which of the favors of your Lord would you deny?” (Quran 55:13)",
        "“And Allah is the Bestower of reward.” (Quran 95:6)"
    ]
};

function openDoor() {
    document.getElementById("left-door").style.transform = "translateX(-100%)";
    document.getElementById("right-door").style.transform = "translateX(100%)";

    setTimeout(() => {
        document.getElementById("book-section").style.display = "block";
        document.getElementById("pages-section").style.opacity = 1;
    }, 2000);
}

function closeDoor() {
    document.getElementById("book-section").style.display = "none";
    document.getElementById("pages-section").style.opacity = 0;

    setTimeout(() => {
        document.getElementById("left-door").style.transform = "translateX(0)";
        document.getElementById("right-door").style.transform = "translateX(0)";
    }, 500);
}

function displayVerse(emotion) {
    const selectedVerses = verses[emotion];
    const randomVerse = selectedVerses[Math.floor(Math.random() * selectedVerses.length)];
    document.getElementById("emotion-response").innerText = randomVerse;
}


