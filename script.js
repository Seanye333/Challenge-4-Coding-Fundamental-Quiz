const quizArray = [
    {
        question: "Commonly used data types DO NOT include:",
        a:"strings",
        b:"booleans",
        c:"alters",
        d:"numbers",
        correct:"c", 
    },
    
    {
        question: "The condition in an if/else statement is enclosed within ____. ",
        a:"quotes",
        b:"curly brackets", 
        c:"parentheses", 
        d:"square brackets", 
        correct: "c",
    },

    {
        question: "Arrays in JavaScript can be used to store ___. ",
        a:"numbers and strings",
        b:"other Arrays",
        c:"booleans",
        d:"all of the above",
        correct: "d",
    },

    {
        question: "String Value must be enclosed within ___ when being assigned to variables.",
        a:"commas",
        b:"curly brackets",
        c:"quotes", 
        d:"parentheses", 
        correct:  "c",
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a:"JavaScript",
        b:"Terminal/Bash", 
        c:"for loops",
        d:"console log",  
        correct: "d",
    },
];

var startQuiz = document.querySelector("#startquiz");
var startPage = document.getElementById("startpage");
var timerCountDown = document.getElementById('countdown');
var gobackPB = document.getElementById('goback');
var clearhistPB = document.getElementById('clearhistory');
var submitinitialWindow = document.getElementById('submitinitial');
var quizComplete = document.getElementById('alldonepage');
var highScore = document.getElementById("highscorepage");
var initialSaved = document.getElementById('msg')
const elementQuiz = document.getElementById('quizlist');
const elementA = document.querySelectorAll('.answer');
const elementQ = document.getElementById('question');
const answerA = document.getElementById('answerA');
const answerB = document.getElementById('answerB');
const answerC = document.getElementById('answerC');
const answerD = document.getElementById('answerD');
const submitBtn = document.getElementById('submit');
const submitintPB = document.getElementById('submitinitialPB')
// var textInitial = usertext;
var secondsLeft = 75;
let currentQuiz = 0;
let correctAnswer = 0;
let mistake = 0;

// console.log(textInitial);
elementQuiz.style.visibility = 'hidden';
quizComplete.style.visibility = 'hidden';
submitinitialWindow.style.visibility = 'hidden';

startQuiz.addEventListener("click", function(){
    secondsLeft = 75;
    currentQuiz = 0;   
    quizTimer(); 
    startPage.style.visibility = 'hidden';
})

function quizTimer() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timerCountDown.textContent = secondsLeft + "s remaining";
    if (secondsLeft > 0 && currentQuiz < 5){
            elementQuiz.style.visibility = 'visible';
        }
    else if (secondsLeft === 0 || currentQuiz === 5) {
        clearInterval(timeInterval);
        
        elementQuiz.style.visibility = 'hidden';
        submitinitialWindow.style.visibility = 'visible';
        }
     }, 1000);}
          
    
function inputQuiz(){
    removeAnswers()
    const currentquizArray= quizArray[currentQuiz]
        elementQ.innerText = currentquizArray.question
        answerA.innerText = currentquizArray.a
        answerB.innerText = currentquizArray.b
        answerC.innerText = currentquizArray.c
        answerD.innerText = currentquizArray.d        
    } 
    inputQuiz()

function removeAnswers(){
    elementA.forEach(answerEl => answerEl.checked = false)
}

function selectAnswers() {
    let answer
    elementA.forEach(answerE1 => {
        if (answerE1.checked){
            answer = answerE1.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = selectAnswers()
    if(answer){
        if(answer === quizArray[currentQuiz].correct){
            correctAnswer++
        }  
        else{
            mistake++
            // time penality if answer incorrecty structing 10s from the elementQuiz countdowm timer.
            secondsLeft -= 10;
        }  
        currentQuiz++
        if(currentQuiz < quizArray.length){
            inputQuiz()
        } else{
            // elementQuiz.innerHTML = `<h2> Your answered ${correctAnswer} questions corretcly<h2>`
            var finalScore = Number(correctAnswer)*20;
            alldonepage.innerHTML = `<p> Your final score is ${finalScore} <p>`
            submitinitialWindow.style.visibility = 'visible';
        }
        console.log(mistake);
        console.log(currentQuiz);
        console.log(secondsLeft);
    }
})

var initialSaved = document.getElementById("msg");
// var finalScore = Number(correctAnswer)*20;
// var highScore= document.getElementById("higescore");
function saveLastInitial() {
  // Save related form data as an object
  var studentGrade = {
    highScore: highScore.value,
    initialSaved: initialSaved.value.trim()
    
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
}

function renderLastInitial() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastInitial = JSON.parse(localStorage.getItem("studentGrade"));
  // Check if data is returned, if not exit out of the function
  if (lastInitial !== null) {
  document.getElementById("saved-initial").innerHTML = lastInitial.initialSaved ;
  document.getElementById("saved-grade").innerHTML = Number(correctAnswer)*20;
//   document.getElementById("saved-grade").innerHTML = lastInitial.highScore;
  } else {
    return;
  }
//   if (finalScore > highScore)
//     {highScore = finalScore;}
}

submitintPB.addEventListener("click", function(event) {
  event.preventDefault();
  saveLastInitial();
  renderLastInitial();
  submitinitialWindow.style.visibility = 'hidden';
});

// The init() function fires when the page is loaded 
function init() {
  // When the init function is executed, the code inside renderLastInitial function will also execute
  renderLastInitial();
}
init();

gobackPB.addEventListener("click", function(){
    // highScore.style.visibility = 'hidden';
    startPage.style.visibility = 'visible';
})