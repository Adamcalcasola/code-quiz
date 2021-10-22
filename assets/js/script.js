var startBtn = document.querySelector("#startQuiz");
var highScore = document.querySelector("#highScore");

//function startTimer() {
//    setTimeout(function() {
//       console.log("time", 75000)
//    });
//};

function startTimer () {
    document.querySelector("#header").textContent = "Question1";
    document.querySelector("#instructions").innerHTML = "";
    
    var screen = document.querySelector("#content");
    screen.removeChild(startBtn);
    
    var answerOptions = document.querySelector("#answers");
    //answerOptions.removeChild("#instructions");
    //answerOptions.className = "Options";
    
    
    var answer1A = document.createElement("button");
    answer1A.textContent = "Answer 1";
    answer1A.className = "btn";

    var answer1B = document.createElement("button");
    answer1B.textContent = "Answer 2";
    answer1B.className = "btn";

    var answer1C = document.createElement("button");
    answer1C.textContent = "Answer 3";
    answer1C.className = "btn";

    var answer1D = document.createElement("button");
    answer1D.textContent = "Answer 4";
    answer1D.className = "btn";

    answerOptions.appendChild(answer1A);
    answerOptions.appendChild(answer1B);
    answerOptions.appendChild(answer1C);
    answerOptions.appendChild(answer1D);

    return answerOptions;
    
    
    
}

function saveHighScore() {
    if (time > highScore) {
        highScore = time;
        localStorage.setItem("highScore", JSON.stringify(highScore));
    }
}

function displayHighScore() {
    console.log("record");
};

startBtn.addEventListener("click", startTimer);
highScore.addEventListener("click", displayHighScore);