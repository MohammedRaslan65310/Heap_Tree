//selcet the elements
let countSpan = document.querySelector(".count span");
let bulletsSpanContainer = document.querySelector(".bullets .spans")
let quizArea = document.querySelector(".quiz-area");
let answerArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let bullets = document.querySelector(".bullets");
let resultsContainer = document.querySelector(".results");
let countDownElement = document.querySelector(".count-down");
//som sitting
let currentIndex = 0;
let rightAnswers = 0;
let countDownInterval;


function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionObject = JSON.parse(this.responseText);
            let qCount = questionObject.length;

            //createBullets + set questions count
            createBullets(qCount);
            //add Data
            addData(questionObject[currentIndex], qCount);
            //start CountDown
            countDown(120, qCount);
            //click on submit
            submitButton.onclick = () => {
                //Get right awnser
                let theRightAnswer = questionObject[currentIndex].right_answer;
                //Increase The Index
                currentIndex++;
                //check The Answer
                checkAnswer(theRightAnswer, qCount);
                //Remove previous question
                quizArea.innerHTML = "";
                answerArea.innerHTML = "";
                //Add Data
                addData(questionObject[currentIndex], qCount);
                //Handle Bullets Class
                handleBullets();
                //start CountDown
                clearInterval(countDownInterval);
                countDown(120, qCount);
                //Show Results
                showResults(qCount);
            };

        }
    }

    myRequest.open("GET", "questions.json", true);
    myRequest.send();
}
getQuestions();

function createBullets(num) {
    countSpan.innerHTML = num;
    for (let i = 0; i < num; i++) {
        //create bullet
        let theBullet = document.createElement("span");
        //check if it's first span 
        if (i === 0) {
            theBullet.className = "on";
        }
        //append bullet to main bullet Container
        bulletsSpanContainer.appendChild(theBullet);
    }

}
function addData(obj, count) {
    if (currentIndex < count) {
        //Create H2 element Question
        let qtitle = document.createElement("h2");
        //Create question Text
        let qText = document.createTextNode(obj.title);
        //Append Text to H2
        qtitle.appendChild(qText);
        //Append h2 to quiz area
        quizArea.appendChild(qtitle);
        //create the answers
        for (i = 1; i <= 4; i++) {
            //create Main div answer
            let mainDiv = document.createElement("div");
            //Add class to main div
            mainDiv.className = 'answer';
            //Create Radio Input
            let radioInput = document.createElement("input");
            //Add type + name + id + data attribute
            radioInput.name = 'question';
            radioInput.type = 'radio';
            radioInput.id = `answer_${i}`;
            radioInput.dataset.answer = obj[`answer_${i}`];
            //create the label
            let thelabel = document.createElement("label");
            //add four attribute
            thelabel.htmlFor = `answer_${i}`;
            //create label text
            let thelabetText = document.createTextNode(obj[`answer_${i}`]);
            //Add the Text to the label
            thelabel.appendChild(thelabetText);
            //add input +label to main div
            mainDiv.appendChild(radioInput);
            mainDiv.appendChild(thelabel);

            //Append All div To Answers Area
            answerArea.appendChild(mainDiv);
        }
    }
}
function checkAnswer(rAnswer, count) {
    let answers = document.getElementsByName("question");
    let theChoosenAnswer;
    for (i = 0; i < answers.length; i++) {
        if (answers[i].checked)
            theChoosenAnswer = answers[i].dataset.answer;
    }

    if (rAnswer === theChoosenAnswer) {
        rightAnswers++;
    }
}
function handleBullets() {
    let bulletsSpans = document.querySelectorAll(".bullets .spans span");
    let arrayOfSpans = Array.from(bulletsSpans);
    arrayOfSpans.forEach((span, index) => {
        if (currentIndex === index) {
            span.className = 'on';
        }
    })

}
function showResults(count) {
    let theResults;
    if (currentIndex === count) {
        quizArea.remove();
        answerArea.remove();
        submitButton.remove();
        bullets.remove();
        if (rightAnswers > (count / 2) && rightAnswers < count) {
            theResults = `<div class="row"><a href="index.htm"><button type="button" class="btn btn-primary m-2 "
            >Try Again</button></a>Good!..but try again i beleive in you! ,${rightAnswers}:${count}</div>`;
        } else if (rightAnswers === count) {
            theResults = `<div class="row"><a href="index.htm"><button type="button" class="btn btn-primary m-2 "
            >Return</button></a>You Did well  ,${rightAnswers}:${count}</div>`;

        } else {
            theResults = `<div class="row"><a href="index.htm"><button type="button" class="btn btn-primary m-2 "
            >Try Again</button></a>Ops!.. try again i beleive in you! ,${rightAnswers}:${count}</div>`;

        }
        resultsContainer.innerHTML = theResults;

        resultsContainer.style.padding = "20px";
        resultsContainer.style.backgroundColor = "white";
        resultsContainer.style.marginTop = "10px";

    }

}
function countDown(duration, count) {
    if (currentIndex < count) {
        let minutes, seconds;
        countDownInterval = setInterval(function () {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            countDownElement.innerHTML = `${minutes}:${seconds}`;
            if (--duration < 0) {
                clearInterval(countDownInterval);

                submitButton.click();
            }

        }, 1000)
    }
}