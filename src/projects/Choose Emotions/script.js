const verses = {
    sad: [
      { verse: "Verily, with hardship comes ease.", reference: "Quran 94:6" },
      { verse: "Do not lose heart nor fall into despair, for you will be superior if you are true believers.", reference: "Quran 3:139" },
      { verse: "And We have certainly created man into hardship.", reference: "Quran 90:4" },
      { verse: "Allah does not burden a soul beyond that it can bear.", reference: "Quran 2:286" },
      { verse: "Indeed, my Lord is near and responsive.", reference: "Quran 11:61" },
      { verse: "And seek help through patience and prayer.", reference: "Quran 2:45" },
      { verse: "So be patient. Indeed, the promise of Allah is truth.", reference: "Quran 30:60" },
      { verse: "Do not grieve; indeed Allah is with us.", reference: "Quran 9:40" },
      { verse: "He is with you wherever you are.", reference: "Quran 57:4" },
      { verse: "And He found you lost and guided [you].", reference: "Quran 93:7" }
    ],
    happy: [
      { verse: "In the bounty of Allah and in His mercy - in that let them rejoice.", reference: "Quran 10:58" },
      { verse: "And it is He who makes [one] laugh and weep.", reference: "Quran 53:43" },
      { verse: "Say, 'Allah is sufficient for me.'", reference: "Quran 9:129" },
      { verse: "So do not weaken and do not grieve, and you will be superior.", reference: "Quran 3:139" },
      { verse: "And be patient, for the decision of your Lord is final.", reference: "Quran 52:48" },
      { verse: "Those who have believed and whose hearts are assured by the remembrance of Allah.", reference: "Quran 13:28" },
      { verse: "And whoever relies upon Allah - then He is sufficient for him.", reference: "Quran 65:3" },
      { verse: "They will have no fear, nor will they grieve.", reference: "Quran 10:62" },
      { verse: "And your Lord is going to give you, and you will be satisfied.", reference: "Quran 93:5" },
      { verse: "Then Allah will soon bring about happiness after difficulty.", reference: "Quran 65:7" }
    ],
    grateful: [
      { verse: "If you are grateful, I will surely increase you in favor.", reference: "Quran 14:7" },
      { verse: "He who is grateful to Allah will receive more.", reference: "Quran 14:7" },
      { verse: "But few of My servants are grateful.", reference: "Quran 34:13" },
      { verse: "So remember Me; I will remember you. And be grateful to Me.", reference: "Quran 2:152" },
      { verse: "And whatever good thing you enjoy, it is from Allah.", reference: "Quran 16:53" },
      { verse: "Do good as Allah has done good to you.", reference: "Quran 28:77" },
      { verse: "And they were grateful for the bounty of Allah.", reference: "Quran 16:114" },
      { verse: "If you give thanks, I will give you more.", reference: "Quran 14:7" },
      { verse: "Allah loves those who do good.", reference: "Quran 2:195" },
      { verse: "Worship Allah and be grateful to Him.", reference: "Quran 16:114" }
    ],
    hopeless: [
      { verse: "So truly where there is hardship, there is also ease.", reference: "Quran 94:6" },
      { verse: "And do not despair of the mercy of Allah.", reference: "Quran 39:53" },
      { verse: "Verily, with hardship comes ease.", reference: "Quran 94:6" },
      { verse: "Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah.'", reference: "Quran 39:53" },
      { verse: "And who despairs of the mercy of his Lord except for those astray?", reference: "Quran 15:56" },
      { verse: "For indeed, with hardship [will be] ease.", reference: "Quran 94:5" },
      { verse: "And the mercy of Allah is near to the doers of good.", reference: "Quran 7:56" },
      { verse: "And whoever fears Allah - He will make for him a way out.", reference: "Quran 65:2" },
      { verse: "Allah will bring about ease after hardship.", reference: "Quran 65:7" },
      { verse: "And be patient, for indeed, Allah is with the patient.", reference: "Quran 8:46" }
    ],
    fearful: [
      { verse: "Allah is sufficient for us, and He is the best Disposer of affairs.", reference: "Quran 3:173" },
      { verse: "Do not fear, indeed I am with you.", reference: "Quran 20:46" },
      { verse: "And do not fear them but fear Me.", reference: "Quran 2:150" },
      { verse: "So fear them not, but fear Me.", reference: "Quran 5:3" },
      { verse: "And fear Allah and know that He is severe in penalty.", reference: "Quran 2:196" },
      { verse: "Fear not. Indeed, I am with you both.", reference: "Quran 20:46" },
      { verse: "And fear the Day when you will be returned to Allah.", reference: "Quran 2:281" },
      { verse: "So fear Allah and obey me.", reference: "Quran 26:179" },
      { verse: "And whoever fears Allah - He will make for him a way out.", reference: "Quran 65:2" },
      { verse: "Do not fear, for Allah is with us.", reference: "Quran 9:40" }
    ],
    content: [
      { verse: "Indeed, in the remembrance of Allah do hearts find rest.", reference: "Quran 13:28" },
      { verse: "And He will satisfy them, and enter them into Paradise.", reference: "Quran 47:6" },
      { verse: "Then Allah will soon bring about happiness after difficulty.", reference: "Quran 65:7" },
      { verse: "And We will surely test you with something of fear and hunger and loss.", reference: "Quran 2:155" },
      { verse: "They will have no fear, nor will they grieve.", reference: "Quran 10:62" },
      { verse: "For them is the Garden of Bliss.", reference: "Quran 13:29" },
      { verse: "So remember Me; I will remember you.", reference: "Quran 2:152" },
      { verse: "And your Lord is going to give you, and you will be satisfied.", reference: "Quran 93:5" },
      { verse: "Indeed, the righteous will be among gardens and rivers.", reference: "Quran 54:54" },
      { verse: "And be content with Allah’s provisions.", reference: "Quran 9:59" }
    ],
    hopeful: [
      { verse: "And whoever fears Allah - He will make for him a way out.", reference: "Quran 65:2-3" },
      { verse: "For indeed, with hardship comes ease.", reference: "Quran 94:6" },
      { verse: "Say, 'Allah is sufficient for me.'", reference: "Quran 9:129" },
      { verse: "And We gave him good tidings of a forbearing boy.", reference: "Quran 37:101" },
      { verse: "So be patient. Indeed, the promise of Allah is truth.", reference: "Quran 30:60" },
      { verse: "And He found you lost and guided [you].", reference: "Quran 93:7" },
      { verse: "For them is the Garden of Refuge.", reference: "Quran 41:30" },
      { verse: "So do not weaken and do not grieve, and you will be superior.", reference: "Quran 3:139" },
      { verse: " He is with you wherever you are.", reference: "Quran 57:4" },
      { verse: "So truly where there is hardship, there is ease.", reference: "Quran 94:6" }
    ]
  };
  
  // Add event listeners to the emotion buttons
  // Add event listeners to the emotion buttons
const emotions = ['sad', 'happy', 'grateful', 'hopeless', 'fearful', 'content', 'hopeful'];

emotions.forEach(emotion => {
  document.getElementById(`${emotion}-btn`).addEventListener('click', () => displayVerse(emotion));
});

function displayVerse(emotion) {
  const randomVerse = verses[emotion][Math.floor(Math.random() * verses[emotion].length)];
  const verseElement = document.getElementById('verse');
  verseElement.innerHTML = `<strong>${randomVerse.verse}</strong><br><em>${randomVerse.reference}</em>`;

  const verseDisplay = document.getElementById('verse-display');
  verseDisplay.classList.add('active');
}
