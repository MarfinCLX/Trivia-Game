window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }, 3500);
});

// 1. Функция переключения (всегда сверху!)
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.add('screen-hidden'));
    
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('screen-hidden');
    }
}

// 2. Переменные
let currentTheme = "";
let currentDifficulty = "";
let currentQuestions = []; // Исправил C на Q
let currentQuestionIndex = 0;
let score = 0;

// 3. Логика квиза
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const imgElement = document.getElementById("quiz-image");

    if (currentQuestionIndex < currentQuestions.length) {
        const q = currentQuestions[currentQuestionIndex];
        questionElement.innerText = q.question;

        // Картинка
        if (q.image) {
            imgElement.src = q.image;
            imgElement.style.display = "block";
        } else {
            imgElement.style.display = "none";
        }

        // Кнопки ответов
        choicesContainer.innerHTML = "";
        q.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.innerText = choice;
            btn.classList.add("choice-btn");
            btn.onclick = () => checkAnswer(choice);
            choicesContainer.appendChild(btn);
        });
    } else {
        showResults();
    }
}

function checkAnswer(selected) {
    const correct = currentQuestions[currentQuestionIndex].correctAnswer;
    if (selected === correct) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion(); // Грузим следующий вопрос
}

function showResults() {
    showScreen('result-screen');
    const resDiv = document.getElementById("result-display");
    resDiv.innerHTML = `Вы набрали ${score} из ${currentQuestions.length}`;
}

// 4. ЗАПУСК (Один блок на всё)
window.addEventListener('load', () => {
    console.log("Загрузка завершена");
    
    // Скрываем лоадер через 2 секунды (чтобы насладиться анимацией)
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) loader.style.display = 'none';
        showScreen('theme-screen');
    }, 2000);

    // Слушаем кнопки тем
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.onclick = () => {
            currentTheme = btn.getAttribute('data-theme');
            showScreen('difficulty-screen');
        };
    });

    // Слушаем кнопки сложности
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.onclick = () => {
            currentDifficulty = btn.getAttribute('data-diff');
            // ВАЖНО: имя базы данных должно быть как в questions.js
            currentQuestions = quizDatabase[currentTheme][currentDifficulty];
            
            currentQuestionIndex = 0;
            score = 0;
            
            showScreen('quiz-screen');
            loadQuestion();
        };
    });
});