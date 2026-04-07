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
let currentQuestions = []; 
let currentQuestionIndex = 0;
let score = 0;

// 3. Логика квиза
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const imgElement = document.getElementById("image");

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
    resDiv.innerHTML = `Вы набрали ${score} из ${currentQuestions.length} <br> Level: <span style="color:${color};font-weight:bold;">${level}</span>`;
}


// 4. ЗАПУСК (Один блок на всё)
window.addEventListener('load', () => {
    console.log("Загрузка завершена");
    
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
            currentQuestions = quizDataBase[currentTheme][currentDifficulty];
            
            currentQuestionIndex = 0;
            score = 0;
            
            showScreen('quiz-screen');
            loadQuestion();
        };
    });
});