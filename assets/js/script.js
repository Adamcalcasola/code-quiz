// Define Global Variables and Selectors
var highScore = {
    id: "",
    initials: "",
    score: ""
};
var highScores = [];

var startBtn = document.querySelector("#startQuiz");
//var highScorebtn = document.querySelector("#highScore");
var viewHighScore = document.createElement("button");
var mainContent = document.querySelector("#content");
var header = document.querySelector("#header");
var answers = document.querySelector("#answers");
var topPage = document.querySelector("#top-page");

var label = document.createElement("h1");
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
var returnBtn = document.createElement("button");
var clearScore = document.createElement("button");
var index = 0;
var timeLeft = 75;
var initials = "";
var timer = 0;

enterInitials.textContent = "Enter Initials ";
submitBtn.textContent = "Submit";
viewHighScore.textContent = "View High Score",
correct.textContent = "Last answer was correct";
incorrect.textContent = "Last answer was incorrect";
label.textContent = "High Scores";
returnBtn.textContent = "Play Again";
clearScore.textContent = "Clear High Scores";
//saveScoreForm.setAttribute("type", "text");
//saveScoreForm.setAttribute("name", "initials");
//submitBtn.setAttribute("type", "button");
//saveScoreForm.setAttribute("onsubmit", "saveHighScores();return false");
initialsInput.setAttribute("id", "initials");

answerA.className = "btn";
answerB.className = "btn";
answerC.className = "btn";
answerD.className = "btn";

// Array of Question/Answer Objects
var questions = [
    {
        question: "Commonly used data types Do Not Include:",
        answer1: "1. strings",
        answer2: "2. booleans",
        answer3: "3. alerts",
        answer4: "4. numbers",
        correctAnswer: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ________.",
        answer1: "1. quotes",
        answer2: "2. curly brackets",
        answer3: "3. parenthesis",
        answer4: "4. square brackets",
        correctAnswer: "2. curly brackets"
    },
    {
        question: "Array in JavaScript can be used to store ________.",
        answer1: "1. numbers and strings",
        answer2: "2. other arrays",
        answer3: "3. booleans",
        answer4: "4. all of the above",
        correctAnswer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answer1: "1. commas",
        answer2: "2. curly brackets",
        answer3: "3. quotes",
        answer4: "4. parenthesis",
        correctAnswer: "3. quotes"
    },
    {
        question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        answer1: "1. JavaScript",
        answer2: "2. terminal/Bash",
        answer3: "3. for loops",
        answer4: "4. console.log",
        correctAnswer: "4. console.log"
    },
]

// Checks to see answer selected was correct or incorrect
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

// Displays the questions and anwers throughout the quiz
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
    
    document.querySelector("#quizTimer").innerHTML = "";
    header.textContent = "All Done";
    answers.textContent = "Your Final Score is " + timeLeft;
    result.innerHTML = "";
    mainContent.appendChild(enterInitials);
    mainContent.appendChild(initialsInput);
    mainContent.appendChild(submitBtn);
    mainContent.appendChild(viewHighScore);
    //mainContent.appendChild(saveScoreForm);
    //saveScoreForm.appendChild(initialsInput);
    //saveScoreForm.appendChild(submitBtn);
    
    submitBtn.addEventListener("click", saveHighScore);
    viewHighScore.addEventListener("click", displayHighScore);

    console.log("End Quiz");
};

// Starts the game timer and ends it when all the questions have been answered or the timer reaches 0
function startTimer () {
    if (index === questions.length || timeLeft <= 0) {
        clearInterval(timer);
        return endQuiz();
    } else {
        timeLeft--;
        document.querySelector("#quizTimer").innerHTML = "Time: " + timeLeft;
    };
};

// Starts the game
function startGame () {
    document.querySelector("#instructions").innerHTML = "";
    mainContent.removeChild(startBtn);  
    document.querySelector("#quizTimer").innerHTML = "Time: " + timeLeft;
    timer = setInterval(startTimer, 1000);
    displayQuestions();
};

// Loads the high score array from local storage
function loadHighScore() {
    var savedScores = localStorage.getItem("highScores");
    if (!savedScores) {
        return false;
    };
    savedScores = JSON.parse(savedScores);
    highScores = savedScores;
};

// saves currant highscore and adds it to highScores array and arranges array into decending order by score
function saveHighScore() {

    loadHighScore();
    highScore.id = highScores.length;
    highScore.initials = document.querySelector("#initials").value;
    highScore.score = timeLeft;
    highScores.push(highScore);
    highScores.sort(function (x, y) {
        return y.score - x.score;
    });
    for (i=0;i<highScores.length;i++) {
        highScores[i].id = i;
    };
    localStorage.setItem("highScores", JSON.stringify(highScores));
    document.querySelector("#initials").value = "";
};

function clearHighScore() {
    highScores = [];
    localStorage.setItem("highScores", JSON.stringify(highScores));
    return displayHighScore();
};

function reload () {
    location.reload();
};

// Displays the high scores in order from highest to lowest
function displayHighScore() {
    loadHighScore();
    topPage.innerHTML = "";
    mainContent.removeChild(enterInitials);
    mainContent.removeChild(initialsInput);
    mainContent.removeChild(submitBtn);
    mainContent.removeChild(viewHighScore);
    header.textContent = "High Scores";
    answers.textContent = "";
    var topScores = document.createElement("ol");
    answers.appendChild(topScores);
    
    for (i=0;i<highScores.length;i++) {
        var listItem = document.createElement("li");
        listItem.textContent = highScores[i].initials + " = " + highScores[i].score;
        topScores.appendChild(listItem);
    };

    answers.appendChild(returnBtn);
    answers.appendChild(clearScore);

    returnBtn.addEventListener("click", reload);
    clearScore.addEventListener("click", clearHighScore);
};

startBtn.addEventListener("click", startGame);