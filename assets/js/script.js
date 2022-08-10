

var start = document.getElementById("start-button");     //link items from index.html that will be displayed on the screen
var displayHighScore = document.getElementById("displayHighScore");
var timerCount = document.getElementByID("timer-count");
var quiz = document.getElementById("quiz");
var renderTotal = document.getElementById("renderTotal");
var question = document.getElementByID("question");
var answerChoiceA = document.getElementById("A");
var answerChoiceB = document.getElementById("B");
var answerChoiceC = document.getElementById("C");
var answerChoiceD = document.getElementById("D");
var userName = document.getElementById("userInitials");
var gobackbtn = document.getElementById("gobackbtn");
var resetbtn = document.getElementById("resetbtn");

//Array used to contain questions and answers
var questionsArray = [
  {
    question: "Commonly used data types do NOT include  ", 
    choiceA: "strings",
    choiceB: "numbers",
    choiceC: "booleans", 
    choiceD: "alerts",
    correct: "C"
  },
  {
    question: "The conditional if/else statement is enclosed with  ",
    choiceA: "parentheses",
    choiceB: "square brackets",
    choiceC: "curly brackets",
    choiceD: "square brackets",
    correct: "A"
  },
  {
  question: "An array in Javascript can be used to store   ",
  choiceA: "numbers and strings",
  choiceB: "other arrays",
  choiceC: "booleans",
  choiceD: "all of the above",
  correct: "D"
},
{
  question: "String values must be enclosed with ________ when being assigned to variables",
  choiceA: "curly brackets",
  choiceB: "parentheses",
  choiceC: "quotes",
  choiceD: "square brackets",
  correct: "B"
},
{
question: "A useful tool for debugging and development for printing content to the debugger is     ",
choiceA: "Javascript",
choiceB: "for loops",
choiceC: "console.log",
choiceD: "terminal/bash",
correct: "C"
}
];

//initialize global variables
var winCounter = 0;
var userName = "";
var timer = 0;
var runningQuestion= 0;
var lastQuestionIndex = questionsArray.length - 1;

// The init function is called when the page loads. User has option to click to retrieve high score or click to start the quiz
function init() {
 start.addEventListener("click", startQuiz);
 displayHighScore.addEventListener("click", showHighScore);
 
}
function showHighScore(){       //show the high score then return to the init function
  getWins();
  init();
}
// The startQuiz function is called when the start button is clicked: start the timer, display the questions, display the totals
function startQuiz() {
  start.style.display = "none";  //turns off display of start button page, so questions can be shown
  timerCount = 50;
  document.getElementById('timerDisplay').innerHTML= timerCount;
  startTimer();
  displayQuestions();
  renderTotal();
}
//displayQuestions function calls two functions: one to show questions on page and one to check the answers
function displayQuestions() {
renderQuestion();
checkAnswer();
}
function renderQuestion(){
  quiz.style.display = "block";
  var qnmbr = questionArray[runningQuestion];
  question.innerHTML = qnmbr.question + "<br>";
  choiceA.innerHTML = qnmbr.choiceA;
  choiceB.innerHTML = qnmbr.choiceB;
  choiceC.innerHTML = qnmbr.choiceC;
  choiceD.innerHTML = qnmbr.choiceD;
}

function checkAnswer(){
if (question[runningQuestion].correct == answer) {
  document.getElementById(runningQuestion).style.color ="green";
  win.alert = "Correct!";
} else {
 document.getElementById(runningQuestion).style.color = "red";
 win.alert = "Sorry! That's incorrect.";
 timerCount = timerCount - 10;   
}

if (runningQuestion < lastQuestionIndex) {   //go on to the next question if there is one
  runningQuestion++;
  renderQuestion();
} else {
  renderTotal();                                //if no more questions, go to the rendertotals page
}
}

//display user initials and score
function renderTotal() {
  quiz.style.display = "none";    //turns off question page 
  renderTotal.style.display = "block";    //turns on results page
win.TextContent = "Your final score is" + timerCount;
clearInterval(timer);
var form1  = document.getElementById("userName");
form.addEventListener('submit', initials());

var goBack = document.querySelector("gobackbtn");  //if user presses go-back button, return to init function
goBackbtn.addEventListener("click", init);
var reset = document.querySelector("resetbtn"); //if user presses reset button, run reset function
resetBtn.addEventListener("click", resetGame);
}

function initials(){
  if (timerCount > winCount) {                          //if user is not high scorer, retrieve high score/user initials and set it in local storage
    var storedWins = localStorage.setitem("wincount");
    var savedUser = localStorage.setitem("userName");
    
  } else {
  win.TextContent = "High scores";
  win.TextContent = savedUser + winCount;
  var timerCount = localStorage.setitem("wincount");  //if user is high scorer, set their score and initials into local storage
  var form1 = localStorage.setitem("userName");
  }

}

  function startTimer(){
      var timer = setInterval(renderQuestion, 1000);                  //run the timer during the renderQuestion function every 1 second
          timerCount--;                                               //decrement timerCount and display on the header 
          document.getElementById('timer-count').innerHTML= timerCount;
          if (timerCount = 0) {                                       //if the timerCount goes to zero, print an error message and go to Totals page
              clearInterval(timer);
              alert("Time is up!");
              renderTotal();
          }
      }


// Updates win and sets win count to client storage
function setWins() {
  timerCount.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
  localStorage.setItem("userName", savedUser);

}


// This function is used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  var savedUser = localStorage.getItem("userName");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0 && savedUser === "";

  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
    winUser = savedUser;
  }
  
}

function resetGame() {
  // Resets win 
  winCounter = 0;
  // Renders win counts and sets them into client storage
  setWins()
  init()
}

