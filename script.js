// Ultimately removed the save scores and highscores because I could not get it to work properly


const questions = [
  {
    text: 'Why is a breed-up program necessary in the USA for the Valais Blacknosed Sheep?',
    choices: ['The Valais sheep has gone extinct', 'The USDA does not currently permit the import of live sheep from other countries', 'The Valais sheep is a new hybrid species developed for consumption, that will rival GMO impossible burger meat', 'You can never have enough sheep'],
    answerIndex: 1
  },
  {
    text: 'Which of the following breeds can be used as a foundation in the breed-up program?',
    choices: ['Horned Dorset', 'Scottish Blackface', 'Teeswater', 'All of the Above'],
    answerIndex: 3
  },

  {
    text: 'How many generations does it take to have a purebred Valais sheep?',
    choices: ['5 generations', '7 generations', '3 generations', 'it is not possible to get a purebred sheep from a breed-up program'],
    answerIndex: 0
  },
  {
    text: 'Both ewes and rams are horned in the Valais',
    choices: ['true', 'false'],
    answerIndex: 0
  },
  {
    text: 'Where did the Valais breed originate?',
    choices: ['Germany', 'Russia', 'Switzerland', 'Italy'],
    answerIndex: 2
  },
];
console.log("startbutton")
const questionContainer = document.getElementById('question-container');
const timerEl = document.getElementById("timer");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const endElement = document.getElementById("end-quiz");
const initialsInput = document.getElementById("initials");
const submitBtn = document.querySelector("input[type='submit']");
const playAgainBtn = document.getElementById("play-again-btn");
const scoreEl = document.getElementById("score");
const highScoresBtn = document.getElementById("high-scores-btn");



let score = 0;
let time = 20;
let currentQuestion = 0;
let timerInterval;
// let finalScore = score + time;

endElement.classList.add('hide');

startButton.addEventListener('click', beginQuiz);
console.log("startbutton")
nextButton.addEventListener('click', () => {
  currentQuestion++;
  setNextQuestion();

});

function beginQuiz() {
  startButton.classList.add('hide');
  currentQuestion = 0;
  score = 0;
  questionContainer.classList.remove('hide');
  setNextQuestion();
  startTimer();
}

function setNextQuestion() {
  resetState();
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    displayQuestion(questions[currentQuestion]);
  }
}

function resetState() {
  // adds CSS class 'hide' to the next button so that the button disappears if the quiz is complete
  nextButton.classList.add('hide');
  // removes all the answer buttons which were appended till there are no more left if the quiz has ended
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function displayQuestion(question) {
  // writes a question from the array of questions and clears out the answers
  questionElement.innerText = question.text;
  answerButton.innerHTML = '';
  // Loop for the answer choices, if the current question is less than the total questions, then the next question is called
  for (let i = 0; i < question.choices.length; i++) {
    const button = document.createElement('button');
    button.innerText = question.choices[i];
    button.classList.add('btn');
    // event listener for the answer choice selection
    button.addEventListener('click', selectAnswer);
    answerButton.appendChild(button);
  }
  // 
  if (currentQuestion < questions.length) {
    // if current question is less than the total questions then add + 1 for the current Question
    question.textContent = questions[currentQuestion].question;
    question.choices.forEach((choice, index) => {

      choice.textContent = questions[currentQuestion].choices[index];
    });
    // had to change from currentQuestion++ to currentQuestion + 1 because only every other question was being displayed.
    currentQuestion + 1;

  }

}

function selectAnswer(e) {
  const selectedButton = e.target;
  const userChoice = selectedButton.innerText;
  const question = questions[currentQuestion];
  const correctAnswer = question.choices[question.answerIndex];




  if (userChoice === correctAnswer) {
    // if the answer selection is correct, add +1 to the score
    score++;

  }


  currentQuestion = currentQuestion + 1;

  if (currentQuestion < questions.length) {
    displayQuestion(questions[currentQuestion]);

  } else {
    questionElement.innerText = `Quiz complete! You scored ${score} out of ${questions.length}.`;
    answerButton.innerHTML = '';
    endQuiz();

  }

}

function startTimer() {
  timerInterval = setInterval(() => {
    time--;
    timerEl.textContent = `Time: ${time}`;
    if (time <= 0) {
      // If the timer ends before all the questions have been answered then the quiz is ended.
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  // start the timer over
  clearInterval(timerInterval);
  // Hide the question container when the quiz is ended and unhide the End Quiz element
  questionContainer.classList.add("hidden");
  endElement.classList.remove("hide");

}

// submitBtn.addEventListener("click", saveScore);


// function saveScore(event) {
//   event.preventDefault();
//   const initials = initialsInput.value;
//   const totalScore = score;
//   const scoreEl = document.getElementById("score")

//   if (scoreEl) {
//     scoreEl.textContent = 'Score: ${totalScore}'
//   }
//   // Gets the high scores from local storage, or creates an empty array if there are no high scores yet

//   let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//   // adds the current score and initials to the high scores array
//   highScores.push({ initials, score });
//   // sorts the high score
//   highScores = highScores.sort((a, b) => b.score - a.score);
//   // stores high scores in local storage
//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   // displays total score
//   // scoreEl.textContent = `Score: ${totalScore}`;
//   window.location.href = "highscores.html";
// }

playAgainBtn.addEventListener("click", () => {
  window.location.reload();
});

// highScoresBtn.addEventListener("click", () => {
//   window.location.href = "highscores.html";

// });





