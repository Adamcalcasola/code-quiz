// Define Global Variables and Selectors
var highScore = {
    id: "",
    initials: "",
    score: ""
};
var highScores = [];

var startBtn = document.querySelector("#startQuiz");
var highScorebtn = document.querySelector("#highScore");
var mainContent = document.querySelector("#content");
var header = document.querySelector("#header");
var answers = document.querySelector("#answers");
var topPage = document.querySelector("#top-page");

var answerA = document.createElement("button");
var answerB = document.createElement("button");
var answerC = document.createElement("button");
var answerD = document.createElement("button");
var result = document.createElement("div");
var correct = document.createElement("h3");
var incorrect = document.createElement("h3");
var enterInitials = document.createElement("h2");
var saveScoreForm = document.createElement("form");
var initialsInput = document.createElement("input");
var submitBtn = document.createElement("button");
var index = 0;
var timeLeft = 50;
var initials = "";
var timer = 0;

enterInitials.textContent = "Enter Initials ";
submitBtn.textContent = "Submit";
correct.textContent = "Last answer was correct";
incorrect.textContent = "Last answer was incorrect";
//saveScoreForm.setAttribute("type", "text");
//saveScoreForm.setAttribute("name", "initials");
//submitBtn.setAttribute("type", "button");
//saveScoreForm.setAttribute("onsubmit", "saveHighScores();return false");
initialsInput.setAttribute("id", "initials");

answerA.className = "btn";
answerB.className = "btn";
answerC.className = "btn";
answerD.className = "btn";

// Array of Question Objects
var questions = [
    {
        question: "question 1",
        answer1: "choice A",
        answer2: "choice B",
        answer3: "choice C",
        answer4: "choice D",
        correctAnswer: "choice A"
    },
    {
        question: "question 2",
        answer1: "choice E",
        answer2: "choice F",
        answer3: "choice G",
        answer4: "choice H",
        correctAnswer: "choice G"
    },
    {
        question: "question 3",
        answer1: "choice I",
        answer2: "choice J",
        answer3: "choice K",
        answer4: "choice L",
        correctAnswer: "choice L"
    },
    {
        question: "question 4",
        answer1: "choice M",
        answer2: "choice N",
        answer3: "choice O",
        answer4: "choice P",
        correctAnswer: "choice N"
    },
    {
        question: "question 5",
        answer1: "choice Q",
        answer2: "choice R",
        answer3: "choice S",
        answer4: "choice T",
        correctAnswer: "choice T"
    },
]

function checkAnswers () {
    if (this.innerHTML === questions[index].correctAnswer) {
        result.innerHTML = "";
        result.appendChild(correct);
        console.log("correct");
    } else {
        result.innerHTML = "";
        result.appendChild(incorrect);
        console.log("incorrect")
        timeLeft -= 10;
    };
    index++;
    if (index < questions.length) { 
        displayQuestions();
    };
};

function displayQuestions () {
    header.textContent = questions[index].question;
    answers.innerHTML = "";

    answerA.textContent = questions[index].answer1;
    answerB.textContent = questions[index].answer2;
    answerC.textContent = questions[index].answer3;
    answerD.textContent = questions[index].answer4;

    answerA.addEventListener("click", checkAnswers);
    answerB.addEventListener("click", checkAnswers);
    answerC.addEventListener("click", checkAnswers);
    answerD.addEventListener("click", checkAnswers);

    answers.appendChild(answerA);
    answers.appendChild(answerB);
    answers.appendChild(answerC);
    answers.appendChild(answerD);
    mainContent.appendChild(result);
};

// Displays the players score and allow them to submit their initials 
function endQuiz () {
    clearInterval(timer);
    document.querySelector("#quizTimer").innerHTML = "Time: " + timeLeft;
    header.textContent = "All Done";
    answers.textContent = "Your Final Score is " + timeLeft;
    result.innerHTML = ""
    mainContent.appendChild(enterInitials);
    //mainContent.appendChild(initialsInput);
    //mainContent.appendChild(submitBtn);
    mainContent.appendChild(saveScoreForm);
    saveScoreForm.appendChild(initialsInput);
    saveScoreForm.appendChild(submitBtn);
    
    submitBtn.addEventListener("click", saveHighScore);

    console.log("End Quiz");
};

function startTimer () {
    if (index === questions.length || timeLeft <= 0) {
        return endQuiz();
    } else {
        timeLeft--;
        document.querySelector("#quizTimer").innerHTML = "Time: " + timeLeft;
    };
};

function startGame () {
    document.querySelector("#instructions").innerHTML = "";
    mainContent.removeChild(startBtn);  
    document.querySelector("#quizTimer").innerHTML = "Time: " + timeLeft;
    timer = setInterval(startTimer, 1000);
    displayQuestions();
};

function loadHighScore() {
    var savedScores = localStorage.getItem("highScores");
    if (!savedScores) {
        return false;
    };
    savedScores = JSON.parse(savedScores);
    for (var i; i < savedScores.length; i++) {
        savedScores.id = i;

        //aaaaa(savedScores[i]);
    }
};

function saveHighScore() {
    //event.preventDefault();
    highScore.initials = document.querySelector("#initials").value;
    highScore.score = timeLeft;
    highScores.push(highScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);
    
    //if (timeLeft > highScore) {
    //    highScore = timeLeft;
    //    localStorage.setItem("highScore", JSON.stringify(highScore));
    //}
};

function displayHighScore() {
    topPage.innerHTML = "";
    header.textContent = "High Scores ";

    console.log("record");
};

startBtn.addEventListener("click", startGame);
highScorebtn.addEventListener("click", displayHighScore);