
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
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");

let score = 0;
let currentQuestion = 0;

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
}

function setNextQuestion() {
  resetState();
  displayQuestion(questions[currentQuestion]);
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
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const userChoice = selectedButton.innerText;
  const question = questions[currentQuestion];
  const correctAnswer = question.choices[question.answerIndex];

  showResults();

 
  
  // const feedbackEl = document.getElementById('feedback');
  // if (userChoice === correctAnswer) {
  //   feedbackEl.textContent = 'Correct';
  
  // } else {
  //   feedbackEl.textContent = 'Incorrect';
  // }


  // if (userChoice === correctAnswer) {
  //   alert('Correct!');
  //   score++;
  // } else {
  //   alert(`Sorry, the correct answer was "${correctAnswer}".`);
  // }

  currentQuestion = currentQuestion + 1;

  if (currentQuestion < questions.length) {
    currentQuestion + 1;
    displayQuestion(questions[currentQuestion]);

  } else {
    questionElement.innerText = `Quiz complete! You scored ${score} out of ${questions.length}.`;
    answerButton.innerHTML = '';

  }

  // displayQuestion();
}





