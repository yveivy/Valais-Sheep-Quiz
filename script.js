

const startButton = document.getElementById
('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')
// let shuffledQuestions, currentQuestionIndex
// let currentQuestionIndex = 0;

// startButton.addEventListener('click', startQuiz)

// nextButton.addEventListener('click', () => {
    // currentQuestion++
// })

// function startQuiz() {
    // currentQuestionIndex = 0;
    // nextButton.innerText = "Next";
    // showQuestion();
    // startButton.classList.add('hide');
    // currentQuestionIndex = 0;
    // questionElement.innerText = question[currentQuestion].question;
    // answerButtonsElement.innerText = questions[currentQuestion].answers[0].option;
    // answerButtonsElement
    // questionContainerElement.classList.remove('hide');
    // if (currentQuestion < 4) {
    // setNextQuestion()
    // }
// }

// function showQuestion() {
    // resetState();
    // let currentQuestionIndex = questions[currentQuestionIndex];
    // let questionNo = currentQuestionIndex + 1;
    // questionElement.innerText = questionNo + "." + currentQuestion.question;

    // currentQuestion.answers.forEach(answer => {
        // const button = document.createElement("button");
        // button.innerText = answer.text;
        // button.classList.add("btn");
        // answerButtonsElement.appendChild(button);
    // });
// }

// function resetState(){
    // nextButton.style.display = "none";
    // while(answerButtons.firstChild){
        // answerButtons.removeChild(answerButtons.firstchild);
    // }

// }
// 
// startQuiz();

// function setNextQuestion(){
    // currentQuestion++;
    // if(currentQuestion >= 4) {
    //  nextButton.classList.add('hide')
    // }
    // resetState()
    // showQuestion(shuffledQuestions[currentQuestionIndex])
// }


// function showQuestion(question) {
    // let currentQuestionIndex = questions[currentQuestion];
    // let questionNo = currentQuestion + 1;
    // questionElement.innerText = questionNo + "." + currentQuestion.question;
    // currentQuestion.answers.forEach(answer => {
            // const button = document.createElement('button');
            // button.innerText = answer.text;
            // button.classList.add('btn');
            // if (answer.correct) {
                // button.dataset.correct = answer.correct
            // }
            // button.addEventListener('click', selectAnswer)
            // answerButtonsElement.appendChild(button)
    // })
// }
// function resetState(){
//     nextButton.classList.add('hide')
//     while (answerButtonsElement.firstChild) {
//         // answerButtonsElement.removeChild
//         (answerButtonsElement.firstchild)
//     }
// }
// function selectAnswer(e){
//     const selectedButton = e.target
//     const correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide')
//     } else { 
//         startButton.innerText = 'Restart'
//         startButton.classList.remove('hide')
//     }
// }

// function setStatusClass(element, correct) {
//     clearsStatusClass(element)
//     if (correct) {
//         element.classList.add ('correct')
//     }   else {
//         element.classList.add ('wrong')
//     }
// }
// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }
// let currentQuestion = 0;
const questions = [
    {
        text: 'Why is a breed-up program necessary in the USA for the Valais Blacknosed Sheep?',
        choices:[ 'The Valais sheep has gone extinct', 'The USDA does not currently permit the import of live sheep from other countries', 'The Valais sheep is a new hybrid species developed for consumption, that will rival GMO impossible burger meat','You can never have enough sheep'],
        answerIndex: 1
    },

    {
        text: 'Which of the following breeds can be used as a foundation in the breed-up program?',
        choices:['Horned Dorset', 'Scottish Blackface', 'Teeswater','All of the Above'],
        answerIndex: 3  

        
    },

    {
        question: 'Where did the Valais breed originate?',
        choices: ['Germany', 'Russia','Switzerland','Italy'],
        answerIndex: 2

    },
    {
        question: 'How many generations does it take to have a purebred Valais sheep?',
        choices: ['5 generations', '7 generations','3 generations','it is not possible to get a purebred sheep from a breed-up program'],
        answerIndex: 0
    },
    {
        question: 'Both ewes and rams are horned in the Valais',
        choices: [ 'true','false',],
        answerIndex: 0
        
    }
 ]
  
  
   

   
]
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex =0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild.removeChild(answerButtons.firstChild));
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
    } else{
        selectAnswerBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

startQuiz();


