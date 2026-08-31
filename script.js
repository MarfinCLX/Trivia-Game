let currentTheme = "";
let currentDifficulty = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.add('screen-hidden'));

    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('screen-hidden');
    }
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const hardWrapper = document.getElementById("hard-input-container");
    const imgElement = document.getElementById("image");

    questionElement.innerText = q.question;

    if (q.image) {
        imgElement.src = q.image;
        imgElement.style.display = "block";
    } else {
        imgElement.style.display = "none";
    }

    if (currentDifficulty === 'hard') {
        choicesContainer.style.display = "none";
        hardWrapper.style.display = "block";

        const inputField = document.getElementById("answer-input");
        inputField.value = "";
        inputField.focus();
    } else {
        choicesContainer.style.display = "flex";
        hardWrapper.style.display = "none";

        choicesContainer.innerHTML = "";
        q.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.innerText = choice;
            btn.classList.add("choice-btn");
            btn.onclick = () => checkAnswer(choice);
            choicesContainer.appendChild(btn);
        });
    }
}

function checkAnswer(selected) {
    const correct = currentQuestions[currentQuestionIndex].correctAnswer;

    if (selected.toLowerCase().trim() === correct.toLowerCase().trim()) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    showScreen('result-screen');

    let level, color;
    if (score >= 8) {
        level = 'Expert';
        color = 'gold';
    } else if (score >= 5) {
        level = 'Intermediate';
        color = 'orange';
    } else {
        level = 'Beginner';
        color = 'red';
    }

    const resDiv = document.getElementById("display-result");
    resDiv.innerHTML = `Your score is ${score} of ${currentQuestions.length} <br> Level: <span style="color:${color};font-weight:bold;">${level}</span>`;
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 3500);

    showScreen('theme-screen');

    // Theme selection
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.onclick = () => {
            currentTheme = btn.getAttribute('data-theme');
            showScreen('difficulty-screen');
        };
    });

    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.onclick = () => {
            currentDifficulty = btn.getAttribute('data-diff');
            currentQuestions = [...quizDataBase[currentTheme][currentDifficulty]];
            currentQuestions.sort(() => Math.random() - 0.5);

            currentQuestionIndex = 0;
            score = 0;

            showScreen('quiz-screen');
            loadQuestion();
        };
    });

    // Hard mode: submit button + Enter key
    document.getElementById("submit-hard").onclick = () => {
        const val = document.getElementById("answer-input").value;
        checkAnswer(val);
    };

    document.getElementById("answer-input").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const val = document.getElementById("answer-input").value;
            checkAnswer(val);
        }
    });
});