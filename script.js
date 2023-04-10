var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('quiz-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

let currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
})

console.log('lets begin')
function startQuiz(){
    console.log('Lets Begin')
    startButton.classList.add('hide')
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
//  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
            var button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        // answerButtonsElement.removeChild
        (answerButtonsElement.firstchild)
    }
}
function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')

}

function setStatusClass(element, correct) {
    clearsStatusClass(element)
    if (correct) {
        element.classList.add ('correct')
    }   else {
        element.classList.add ('wrong')
    }
}

var questions = [
    {
        question: 'Why is a breed-up program necessary in the USA for the Valais Blacknosed Sheep?',
        answers: [
            {text: 'The Valais sheep has gone extinct', correct: false },
            {text: 'The USDA does not currently permit the import of live sheep from other countries', correct: true },
            {text: 'The Valais sheep is a new hybrid species developed for consumption that will rival GMO impossible burger meat', correct: false},
            {text: 'You can never have enough sheep', correct: false}
        ]
    }
]

// 1. Why is a breed-up program necessary in the USA for the Valais Blacknosed Sheep?
    // a. The Valais Sheep has gone extinct
    // b. The USDA does not currently permit the import of live sheep from other countries
    // c. The Valais Sheep is a new hybrid species developed for consumption that will rival 'The impossible burger'

// 2. Which of the following breeds can be used as a foundation in the breed-up program?
    // a. The Horned Dorset
    // b. The Scottish Blackface
    // c. The Lincolnshire 
    // d. All of the Above

// 3. Where did the Valais breed originate?
    // a. Germany
    // b. Russian
    // c. Switzerland
    // d. Italy

// 4. How many generations of breeding-up does it take to have a purebred Valais sheep?
    // a. 5 generations
    // b. 7 generations
    // c. 3 generations
    // d. it is not possible to get a purebred sheep from a breed-up program.

// 5. What is the cutest sheep in the world?
    // a. The Valais, of course!
    // b. Have you seen the Valais? Definitely the cutest!
    // c. Seriously, have you seen a Valais? No contest!
    // d. All of the above





    // ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```