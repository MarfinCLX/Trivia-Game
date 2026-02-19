const questions = ["What is the capital of France?", "What is the capital of China?", "Who painted the Mona Lisa?", 
    "Which continente on Earth is the largest?", "Which ocean is the deepest in the world?", 
    "In which country is the world's tallest building, the Burj Khalifa, located?", "Which animal is the fastest on land?",
     "How many planets are there in our Solar System?", "In what year did the Tinanic sink?", 
     "What is the name of the most prestigious award in the film industry? "];

     const choicesArray = [["Paris", "London", "Berlin", "Madrid"], 
     ["Beijing", "Lisbon", "Kiev", "Washington"],
     ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
     ["Europa", "Asia", "Africa", "America"],
     ["Arctic Ocean", "Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
     ["The United Arab Emirates (UAE)", "United States of America (USA)", "Russia", "China"],
     ["Tiger","Lion","Cheetah","Monkey"],
     ["7","8","9","10"],
     ["1908", "1973", "1928", "1912"],
     ["Grammy", "Emmy", "Oscar", "Golden Globe"]
      ];

      const correctAnswers = ["Paris", "Beijing", "Da Vinci", "Asia", "Pacific Ocean", "The United Arab Emirates (UAE)",
         "Cheetah", "8", "1912", "Oscar"];

         let currentQuestionIndex = 0;
         let score = 0;

         function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            document.getElementById(`question`).innerHTML = questions [currentQuestionIndex];
            for (let i = 0; i < choicesArray[currentQuestionIndex].length; i++) {
            const btn = document.getElementById(`choice${i + 1}`);
            btn.innerHTML = choicesArray[currentQuestionIndex][i];
            btn.value = choicesArray[currentQuestionIndex][i];
         }
          }
          else {
        document.getElementById(`result`).innerHTML = `You scored ${score} out of ${questions.length}!`;
        document.getElementById(`question`).innerHTML = "";
         document.getElementById(`choices`).innerHTML = "";
          }
          }

          function checkAnswer(btn) {
          if (btn.value === correctAnswers [currentQuestionIndex]) {
            score++;
          }
         currentQuestionIndex++;
         displayQuestion();
          }
          displayQuestion();