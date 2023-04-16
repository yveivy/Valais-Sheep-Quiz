
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
const highScoresBtn = document.getElementById("high-scores-btn");


let score = 0;
let time = 20;
let currentQuestion = 0;
let timerInterval;

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
  if (currentQuestion === questions.length){
    endQuiz();
  }else {
  displayQuestion(questions[currentQuestion]);
  }
}

function resetState() {
  nextButton.classList.add('hide');
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function displayQuestion(question) {
  questionElement.innerText = question.text;
  answerButton.innerHTML = '';

  for (let i = 0; i < question.choices.length; i++) {
    const button = document.createElement('button');
    button.innerText = question.choices[i];
    button.classList.add('btn');
    button.addEventListener('click', selectAnswer);
    answerButton.appendChild(button);
  }

  if (currentQuestion < questions.length){
    question.textContent = questions[currentQuestion].question;
    question.choices.forEach((choice, index) => {
    
      choice.textContent = questions[currentQuestion].choices[index];
    });
    currentQuestion + 1;
  
  }

}

function selectAnswer(e) {
  const selectedButton = e.target;
  const userChoice = selectedButton.innerText;
  const question = questions[currentQuestion];
  const correctAnswer = question.choices[question.answerIndex];

  // showResults();



  if (userChoice === correctAnswer) {
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
        endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  questionContainer.classList.add("hidden");
  endElement.classList.remove("hide");

}

submitBtn.addEventListener("click", saveScore);

function saveScore(event) {
  event.preventDefault();
  const initials = initialsInput.value;
  const score = score + time;
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push({initials, score});
  highScores = highScores.sort((a, b) => b.score - a.score);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  const scoreEl = docuement.getElementById("score");
  scoreEl.textContent = `Score: ${totalScore}`;
  // window.location.href = "highscores.html";
}

playAgainBtn.addEventListener("click", () => {
  window.location.reload();
});

highScoresBtn.addEventListener("click", () => {
  window.location.href = "highscores.html";

});





