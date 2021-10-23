var startBtn = document.querySelector("#startQuiz");
var highScore = localStorage.getItem(highScore);
var highScorebtn = document.querySelector("#highScore");
var mainContent = document.querySelector("#content");
var header = document.querySelector("#header");
var answers = document.querySelector("#answers");
var answerA = document.createElement("button");
var answerB = document.createElement("button");
var answerC = document.createElement("button");
var answerD = document.createElement("button");

answerA.className = "btn";
answerB.className = "btn";
answerC.className = "btn";
answerD.className = "btn";

//document.querySelector("#highScore");
var index = 0;
var timeLeft = 5

// Array of Question Objects
var questions = [
    {
        question: "question 1",
        answer1: "choice 1",
        answer2: "choice 2",
        answer3: "choice 3",
        answer4: "choice 4",
        correctAnswer: "choice 1"
    },
    {
        question: "question 2",
        answer1: "choice 1",
        answer2: "choice 2",
        answer3: "choice 3",
        answer4: "choice 4",
        correctAnswer: "choice 3"
    },
    {
        question: "question 3",
        answer1: "choice 1",
        answer2: "choice 2",
        answer3: "choice 3",
        answer4: "choice 4",
        correctAnswer: "choice 4"
    },
    {
        question: "question 4",
        answer1: "choice 1",
        answer2: "choice 2",
        answer3: "choice 3",
        answer4: "choice 4",
        correctAnswer: "choice 2"
    },
    {
        question: "question 5",
        answer1: "choice 1",
        answer2: "choice 2",
        answer3: "choice 3",
        answer4: "choice 4",
        correctAnswer: "choice 4"
    },
]

    // display message on bottom that state correct answer selected
    // clear previous question and answers
    // call function for next question(array of object?)

    // display message on bottom that states incorrect answer selected
    // clear previous question and answers
    // deduct time from timer
    // call function for next question(iterate through array of objects?)

function checkAnswers () {
    console.log(this.innerHTML);
    console.log(questions[index].correctAnswer);
    if (this.innerHTML === questions[index].correctAnswer) {
        //document.querySelector("#content").appendChild = "Correct";
        console.log("correct");

    } else {
        ///document.querySelector("#content").appendChild = "Incorrect";
        console.log("incorrect")
        timeLeft -= 10;
    }

    
    index++;
    displayQuestions();
};

function displayQuestions () {
        header.textContent = questions[index].question;
        answers.innerHTML = "";
        
        answerA.textContent = questions[index].answer1;
        answerA.addEventListener("click", checkAnswers);
        
        answerB.textContent = questions[index].answer2;
        answerB.addEventListener("click", checkAnswers);
        
        answerC.textContent = questions[index].answer3;
        answerC.addEventListener("click", checkAnswers);
        
        answerD.textContent = questions[index].answer4;
        answerD.addEventListener("click", checkAnswers);

        answers.appendChild(answerA);
        answers.appendChild(answerB);
        answers.appendChild(answerC);
        answers.appendChild(answerD);
};
function startTimer () {

    if (index === questions.length || timeLeft === 0) {
        return endQuiz();
    } else {
        timeLeft--;
        document.querySelector("#quizTimer").innerHTML = "time " + timeLeft;
    }
};

function endQuiz () {
    //mainContent.innerHTML = "";
    header.textContent = "All Done";
    answers.textContent = "Your Final Score is " + timeLeft;
    answers.textContent = "Enter Initials ";
    //input box button

    saveHighScore();
    console.log("End Quiz");
}
function startGame () {
//    setTimeout(function() {
//       console.log("time", 75000)
//    });
    index = 0;
    document.querySelector("#quizTimer").innerHTML = "time " + timeLeft;
    setInterval(startTimer, 1000);
    document.querySelector("#instructions").innerHTML = "";
    mainContent.removeChild(startBtn);

    displayQuestions ()
};

function saveHighScore() {
    if (timeLeft > highScore) {
        highScore = timeLeft;
        localStorage.setItem("highScore", JSON.stringify(highScore));
    }
};

function displayHighScore() {
    header.textContent = "High Scores";

    console.log("record");
};

startBtn.addEventListener("click", startGame);
highScorebtn.addEventListener("click", displayHighScore);