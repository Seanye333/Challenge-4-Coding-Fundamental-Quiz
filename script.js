// sudo code 
// 1. create an array with all questions and write to HTML
// 2. declar and point variables to HTML
// 3. create quiz start pushbutton to allow user to start and hide the start window 
// 4. create countdowm timer for quiz 
// 5. verify answer with each questions 
// 6. substract 10s if response is incorrect 
// 7. hide question window if questions are all answered 
// 8. display a box with submit function to allow users input their initials
// 9. hide user' initals window 
// 10. calculate and display grade of quiz with initials
// 11. store user's score 
// 12. click on Re-start pushbutton to jump back to step 4 and restart timer once start button is clicked 

// declar quiz questions, answers, and corect answers with array 
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
// declar following global variables and point into ID or class selectors 
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

// set inital and rest timer, quiz number, number of correct and incorrect repsonse 
var secondsLeft = 75;
let currentQuiz = 0;
let correctAnswer = 0;
let mistake = 0;

// hide windows at the begining and restart 
elementQuiz.style.visibility = 'hidden';
quizComplete.style.visibility = 'hidden';
submitinitialWindow.style.visibility = 'hidden';

// Start pushbutton to start quiz at 75s with zero question answered 
// hide start window once click and display timer 
startQuiz.addEventListener("click", function(){
    secondsLeft = 75;
    currentQuiz = 0;
    correctAnswer = 0;   
    quizTimer(); 
    startPage.style.visibility = 'hidden';
})

// function of quiz timer: display quiz questions and choices if timer is greater than 0s and reponse to the quiz is less than 5  
// either time is complete or quiz is completed, questions will be hide, and initial window will be displayed 
// count down by 1s 
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
          
//quiz inputs/answers from user 
//check selected answers   
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

//if submit button is clicked check answers. 
//If correct, add one to variable. 
//if incorect, subtract 10s 
// calculate score based on correct answer , each correct answer is 20 points 
//    
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
function saveLastInitial() {
  // Save related form data as an object
  var studentGrade = {
    initialSaved: initialSaved.value.trim()
    
  };
  // store object in storage to change it to a string
  localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
}

function renderLastInitial() {
  // convert text to JavaScript object
  var lastInitial = JSON.parse(localStorage.getItem("studentGrade"));
  // used to display initial and grade 
  if (lastInitial !== null) {
  document.getElementById("saved-initial").innerHTML = lastInitial.initialSaved ;
  document.getElementById("saved-grade").innerHTML = Number(correctAnswer)*20;
  } else {
    return;
  }
}
// submit your initial here to return with initial-score
submitintPB.addEventListener("click", function(event) {
  event.preventDefault();
  saveLastInitial();
  renderLastInitial();
  submitinitialWindow.style.visibility = 'hidden';
});

// The init() function fires when the page is loaded 
function init() {
  renderLastInitial();
}
init();
// restart quiz and return to start menu here if push button is clicked 
gobackPB.addEventListener("click", function(){
    startPage.style.visibility = 'visible';
})