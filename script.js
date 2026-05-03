console.log("I'm alive")

window.addEventListener('load', () => {
    console.log("--- СТАРТ ОТЛАДКИ ---");
    
    // Скрываем загрузчик
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 3500);

    // 2. Проверяем экран тем
    const themeScreen = document.getElementById('theme-screen');
    if (themeScreen) {
        console.log("✅ Экран тем найден");
        showScreen('theme-screen');
    } else {
        console.error("❌ ОШИБКА: Экран с id='theme-screen' не найден!");
    }

    // 3. Проверяем наличие кнопок
    const themeButtons = document.querySelectorAll('.theme-btn');
    console.log("Найдено кнопок тем на странице:", themeButtons.length);

    if (themeButtons.length === 0) {
        console.warn("⚠️ ВНИМАНИЕ: Кнопки с классом .theme-btn не найдены. Проверь HTML!");
    }

    // Навешиваем клики
    themeButtons.forEach(btn => {
        btn.onclick = () => {
            currentTheme = btn.getAttribute('data-theme');
            console.log("Выбрана тема:", currentTheme);
            showScreen('difficulty-screen');
        };
    });

    console.log("--- ОТЛАДКА ЗАВЕРШЕНА ---");
});

function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.add('screen-hidden'));
    
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('screen-hidden');
    }
}

let currentTheme = "";
let currentDifficulty = "";
let currentQuestions = []; 
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const hardWrapper = document.getElementById("hard-input-wrapper");
    const imgElement = document.getElementById("image");

    questionElement.innerText = q.question;

    // Картинка
    if (q.image) {
        imgElement.src = q.image;
        imgElement.style.display = "block";
    } else {
        imgElement.style.display = "none";
    }

    // ЛОГИКА СЛОЖНОСТИ
    if (currentDifficulty === 'hard') {
        choicesContainer.style.display = "none"; // Прячем кнопки
        hardWrapper.style.display = "block";    // Показываем инпут
        
        const inputField = document.getElementById("answer-input");
        inputField.value = ""; // Очистка
        inputField.focus();    // Курсор сразу в поле
    } else {
        choicesContainer.style.display = "flex"; // Показываем кнопки
        hardWrapper.style.display = "none";     // Прячем инпут
        
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

    // Сравниваем без учета регистра и лишних пробелов
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

// Привязываем кнопку "Ответить" и клавишу Enter
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

let level = '';
let color = '';

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

function showResults() {
    showScreen('result-screen');
    const resDiv = document.getElementById("display-result");
    resDiv.innerHTML = `Your score is ${score} of ${currentQuestions.length} <br> Level: <span style="color:${color};font-weight:bold;">${level}</span>`;
}

window.addEventListener('load', () => {
    console.log("Загрузка завершена");
    
    // Слушаем кнопки тем
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.onclick = () => {
            currentTheme = btn.getAttribute('data-theme');
            showScreen('difficulty-screen');
        };
    });

        document.querySelectorAll('.diff-btn').forEach(btn => {
            btn.onclick = () => {
                currentDifficulty = btn.getAttribute('data-diff');
                currentQuestions = quizDataBase[currentTheme][currentDifficulty];

                

    currentQuestions.sort(() => Math.random() - 0.5);


                
                currentQuestionIndex = 0;
                score = 0;
                
                showScreen('quiz-screen');
                loadQuestion();
            };
        });
    });