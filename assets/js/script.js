var startBtn = document.querySelector("#startQuiz");
var highScore = document.querySelector("#highScore");
var index = 0;
var timeLeft = 75

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
        console.log("correct");

    } else {
        console.log("incorrect")
        timeLeft -= 10;
    }
    index++;
    displayQuestions();
};

function displayQuestions () {
    document.querySelector("#header").textContent = questions[index].question;
    var answerOptions = document.querySelector("#answers");
    answerOptions.innerHTML = "";

    var answer1A = document.createElement("button");
    answer1A.textContent = questions[index].answer1;
    answer1A.className = "btn";
    answer1A.addEventListener("click", checkAnswers);

    var answer1B = document.createElement("button");
    answer1B.textContent = questions[index].answer2;
    answer1B.className = "btn";
    answer1B.addEventListener("click", checkAnswers);

    var answer1C = document.createElement("button");
    answer1C.textContent = questions[index].answer3;
    answer1C.className = "btn";
    answer1C.addEventListener("click", checkAnswers);

    var answer1D = document.createElement("button");
    answer1D.textContent = questions[index].answer4;
    answer1D.className = "btn";
    answer1D.addEventListener("click", checkAnswers);

    answerOptions.appendChild(answer1A);
    answerOptions.appendChild(answer1B);
    answerOptions.appendChild(answer1C);
    answerOptions.appendChild(answer1D);

};
function startTimer () {
    timeLeft--;
    document.querySelector("#quizTimer").innerHTML = "time " + timeLeft;
    if (timeLeft === 0) {
        endQuiz();
    }
};
function startGame () {
//    setTimeout(function() {
//       console.log("time", 75000)
//    });
    document.querySelector("#quizTimer").innerHTML = "time " + timeLeft;
    setInterval(startTimer, 1000);
    document.querySelector("#instructions").innerHTML = "";
    var screen = document.querySelector("#content");
    screen.removeChild(startBtn);

    displayQuestions ()
};

function saveHighScore() {
    if (time > highScore) {
        highScore = time;
        localStorage.setItem("highScore", JSON.stringify(highScore));
    }
};

function displayHighScore() {
    console.log("record");
};

startBtn.addEventListener("click", startGame);
highScore.addEventListener("click", displayHighScore);