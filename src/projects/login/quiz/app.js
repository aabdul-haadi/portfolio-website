const questions = {
    html: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "None of the above"], answer: 0 },
        { question: "Which tag is used for the largest heading in HTML?", options: ["<h1>", "<h6>", "<heading>", "<header>"], answer: 0 },
        { question: "What is the purpose of the <title> tag in HTML?", options: ["To define the main heading", "To specify the document's title", "To add a footer", "None of the above"], answer: 1 },
        { question: "Which attribute is used to provide a unique identifier to an HTML element?", options: ["class", "id", "style", "name"], answer: 1 },
        { question: "What is the correct syntax for creating a hyperlink in HTML?", options: ["<a href='url'>Link</a>", "<link url='url'>Link</link>", "<a>Link</a>", "<hyperlink='url'>Link</hyperlink>"], answer: 0 },
        { question: "Which tag is used to display an image in HTML?", options: ["<img>", "<image>", "<pic>", "<src>"], answer: 0 },
        { question: "What does the <br> tag do?", options: ["Adds a line break", "Boldens text", "Changes color", "None of the above"], answer: 0 },
        { question: "Which tag is used to create an ordered list in HTML?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: 0 },
        { question: "Which attribute specifies the URL of an image in an <img> tag?", options: ["src", "href", "link", "url"], answer: 0 },
        { question: "Which element is used for adding a footer in HTML?", options: ["<footer>", "<bottom>", "<end>", "<tail>"], answer: 0 }
    ],
    css: [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], answer: 0 },
        { question: "Which property is used to change text color?", options: ["color", "font-color", "text-color", "bgcolor"], answer: 0 },
        { question: "How do you add a background color in CSS?", options: ["background-color", "bgcolor", "background", "color"], answer: 0 },
        { question: "Which property is used to change font size?", options: ["font-size", "text-size", "size", "font"], answer: 0 },
        { question: "What is the correct CSS syntax to make all <p> elements bold?", options: ["p { font-weight: bold; }", "<p style='bold'>", "p: bold;", "<p { font-weight: bold; }"], answer: 0 },
        { question: "Which CSS property controls the text alignment?", options: ["text-align", "align", "text-position", "position"], answer: 0 },
        { question: "Which property is used to add space between lines of text?", options: ["line-height", "spacing", "height", "line-space"], answer: 0 },
        { question: "How do you make a list without bullets in CSS?", options: ["list-style-type: none;", "list: none;", "bullets: off;", "none: list;"], answer: 0 },
        { question: "Which property changes the width of an element?", options: ["width", "size", "stretch", "length"], answer: 0 },
        { question: "What does the z-index property control?", options: ["Stacking order of elements", "Zoom level", "Index of the page", "Opacity of the element"], answer: 0 }
    ],
    js: [
        { question: "What does JS stand for?", options: ["JavaScript", "JavaSource", "JustScript", "JScript"], answer: 0 },
        { question: "Which symbol is used for comments in JavaScript?", options: ["//", "#", "/* */", "<!- ->"], answer: 0 },
        { question: "Which method is used to write into the console in JavaScript?", options: ["console.log()", "console.write()", "console.output()", "console.print()"], answer: 0 },
        { question: "What is the correct syntax for a function in JavaScript?", options: ["function myFunction() {}", "function:myFunction() {}", "myFunction():function{}", "function=myFunction()"], answer: 0 },
        { question: "How do you declare a variable in JavaScript?", options: ["let", "var", "const", "All of the above"], answer: 3 },
        { question: "Which method converts a string to an integer?", options: ["parseInt()", "parseFloat()", "toString()", "Number()"], answer: 0 },
        { question: "What does the DOM stand for?", options: ["Document Object Model", "Data Object Model", "Document Orientation Method", "Data Orientation Method"], answer: 0 },
        { question: "Which event occurs when a user clicks on an HTML element?", options: ["onclick", "onchange", "onhover", "onpress"], answer: 0 },
        { question: "Which method is used to add an element at the end of an array?", options: ["push()", "append()", "add()", "concat()"], answer: 0 },
        { question: "Which keyword is used to check strict equality?", options: ["===", "==", "!=", "!=="], answer: 0 }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;

// Elements
const homePage = document.getElementById("home");
const quizPage = document.getElementById("quiz-page");
const resultsPage = document.getElementById("results-page");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const timerElement = document.getElementById("timer");
const progressElement = document.getElementById("progress");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");
const retryButton = document.getElementById("retry");
const homeButton = document.getElementById("home-button");

// Functions
function loadQuiz(topic) {
    currentQuiz = [...questions[topic]]; // Clone and shuffle questions
    currentQuiz.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    homePage.style.display = "none";
    quizPage.style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = currentQuiz[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    progressElement.textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.length}`;
    startTimer();
}

function startTimer() {
    let timeLeft = 10;
    timerElement.textContent = timeLeft;
    timerElement.style.color = "#ffa726"; // Reset color
    timerElement.style.animation = "none"; // Reset animation
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 3) {
            timerElement.style.color = "red"; // Warning for last 3 seconds
            timerElement.style.animation = "pulse 1s infinite";
        }

        if (timeLeft === 0) {
            clearInterval(timer);
            selectAnswer(-1); // Auto-submit if time runs out
        }
    }, 1000);
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestion = currentQuiz[currentQuestionIndex];
    const options = optionsContainer.querySelectorAll(".option");
    options.forEach((option, index) => {
        if (index === currentQuestion.answer) {
            option.classList.add("correct");
        } else if (index === selectedIndex) {
            option.classList.add("incorrect");
        }
        option.onclick = null; // Disable further clicks
    });

    if (selectedIndex === currentQuestion.answer) {
        score++;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    quizPage.style.display = "none";
    resultsPage.style.display = "block";

    const percentage = Math.round((score / currentQuiz.length) * 100);
    scoreElement.textContent = `${percentage}%`;

    if (percentage >= 80) {
        feedbackElement.textContent = "Excellent! You're a quiz master!";
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    } else if (percentage >= 50) {
        feedbackElement.textContent = "Good job! Keep practicing to improve.";
    } else {
        feedbackElement.textContent = "Don't give up! Practice makes perfect.";
    }
}

function restartQuiz() {
    resultsPage.style.display = "none";
    homePage.style.display = "block";
}

// Event Listeners
document.querySelectorAll(".quiz-card").forEach(card => {
    card.onclick = () => loadQuiz(card.dataset.topic);
});

retryButton.onclick = restartQuiz;

homeButton.onclick = () => {
    resultsPage.style.display = "none";
    homePage.style.display = "block";
};
