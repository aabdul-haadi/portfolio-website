const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Toggle between sign-up and login
registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// Sign-up form submission
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Account already exists! Please log in.");
        return;
    }

    // Store user credentials in localStorage
    localStorage.setItem(email, JSON.stringify({ name, password }));
    alert("Account created successfully! You can now log in.");
    container.classList.remove("active"); // Switch to login
});

// Login form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert(`Welcome back, ${user.name}! Redirecting to the quiz...`);
        window.location.href = "quiz/quiz.html";
        // Adjust path as needed
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
