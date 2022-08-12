

var start = document.getElementById("start-button");     //link items from index.html that will be displayed on the screen
var startPage = document.getElementById("startpage");
var displayHighScore = document.getElementById("displayHighScore");
var timerCount = document.getElementById("timer-count");
var quiz = document.getElementById("quiz");
var renderTotal = document.getElementById("renderTotal");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var message  = document.getElementById("message");
var userName = document.getElementById("userName");
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
var winCount = 0;
var userName = "";
var timer = 0;
var runningQuestion= 0;
var lastQuestionIndex = questionsArray.length - 1;


 start.addEventListener("click", startQuiz);
// displayHighScore.addEventListener("click", showHighScore);


//function showHighScore(){       //show the high score then return to the init function
//  getWins();
  //initialize();
//}
                            // The startQuiz function called when the start button is clicked: start the timer, display the questions, display the totals
function startQuiz() {
  timerCount = 50;
  startTimer();
  renderQuestion();
  checkAnswer();
}

function renderQuestion(){
  message="";
  startPage.style.display = "none";
  quiz.style.display = "block";
  var qnmbr = questionsArray[runningQuestion];
  question.innerHTML = qnmbr.question + "<br>";
  choiceA.innerHTML = qnmbr.choiceA;
  choiceB.innerHTML = qnmbr.choiceB;
  choiceC.innerHTML = qnmbr.choiceC;
  choiceD.innerHTML = qnmbr.choiceD;
}

function checkAnswer(answer) {
      if ( answer == questionsArray[runningQuestion].correct) {
      document.getElementById(questionsArray[runningQuestion].correct).style.color = "green";
      message.innerHTML = "Correct!";
      document.getElementById(questionsArray[runningQuestion].correct).style.color = "black";
      } else {
      document.getElementById(questionsArray[runningQuestion].correct).style.color = "red";
      message.innerHTML = "Sorry! That's incorrect.";
      document.getElementById(questionsArray[runningQuestion].correct).style.color = "black";
      timerCount === timerCount - 10;   
      }

    if (runningQuestion < lastQuestionIndex) {   //go on to the next question if there is one
     runningQuestion++;
    renderQuestion();
    } else {
     renderTotal();                                //if no more questions, go to the rendertotal page
    }
}

//display user initials and score
function renderTotal(){
  quiz.style.display = "none";    //turns off question page 
  renderTotal.style.display = "block";    //turns on results page
  timer-count.innerHTML === timerCount;
  clearInterval(timer);
}

//document.getElementById("userInfo").addEventListener('submit', submitt());
//
//    function submitt(){
//  var form1  = document.getElementById("userName");   //user enters initials 
//   if (timerCount > winCount) {                          //if user is not high scorer, retrieve high score/user initials and set it in local storage
//        var storedWins = localStorage.setitem("wincount");
//        var savedUser = localStorage.setitem("userName");
//        
//      } else {
 //      = "High scores";
 //     = savedUser + winCount;
 //    var timerCount = localStorage.setitem("wincount");  //if user is high scorer, set their score and initials into local storage
 //     var form1 = localStorage.setitem("userName");
 //     }   
 //   }

//var goBack = document.querySelector("gobackbtn");  //if user presses go-back button, return to init function
//goBackbtn.addEventListener("click", initialize);
//var reset = document.querySelector("resetbtn"); //if user presses reset button, run reset function
//resetBtn.addEventListener("click", resetGame);


  function startTimer(){
      var timer = setInterval(finalCountdown, 1000);                  //run the timer during the renderQuestion function every 1 second                                            //decrement timerCount and display on the header 
          }
function finalCountdown(){
        if (timerCount != 0) {
          timerCount--; }

        document.getElementById('timer-count').innerHTML= timerCount;
      if (timerCount == 0) {                                       //if the timerCount goes to zero, print an error message and go to Totals page
        clearInterval(timer);
        alert("Time is up!");
      }
    }
// Updates win and sets win count to client storage
//function setWins() {
//  timerCount.textContent = winCounter;
//  localStorage.setItem("winCount", winCounter);
//  localStorage.setItem("userName", savedUser);
//}


// This function is used by init
//function getWins() {
  // Get stored value from client storage, if it exists
 // var storedWins = localStorage.getItem("winCount");
 // var savedUser = localStorage.getItem("userName");
  // If stored value doesn't exist, set counter to 0
 // if (storedWins = null) {
 //   winCounter = 0 && savedUser === "";

 // } else {
    // If a value is retrieved from client storage set the winCounter to that value
//    winCounter = storedWins;
//    winUser = savedUser;
//  }
  
//}

//function resetGame() {
  // Resets win 
  //winCounter = 0;
  // Renders win counts and sets them into client storage
//  setWins();
 // initialize();
//}

