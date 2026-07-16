const quiz = [

    {
        question: "What is JavaScript?",
        options: [
            "Programming Language",
            "Database",
            "Browser",
            "Operating System"
        ],
        answer: "Programming Language"
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "float",
            "char"
        ],
        answer: "var"
    },

    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
            "=="
        ],
        answer: "//"
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Apple"
        ],
        answer: "Netscape"
    },

    {
        question: "Which method displays output in the browser console?",
        options: [
            "console.log()",
            "document.write()",
            "alert()",
            "print()"
        ],
        answer: "console.log()"
    },

    {
        question: "Which operator is used for strict equality?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "Which loop is guaranteed to execute at least one time?",
        options: [
            "for",
            "while",
            "do...while",
            "foreach"
        ],
        answer: "do...while"
    },

    {
        question: "Which function converts a string into an integer?",
        options: [
            "parseInt()",
            "parseFloat()",
            "Number()",
            "toString()"
        ],
        answer: "parseInt()"
    },

    {
        question: "Which method is used to add an element at the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        answer: "push()"
    },

    {
        question: "Which method removes the last element from an array?",
        options: [
            "pop()",
            "push()",
            "shift()",
            "slice()"
        ],
        answer: "pop()"
    }

];

let index = 0;
var id;
var timeupQuestions = [];
var score = 0;
var flag = 0;

var backStack = [];

function getData(index) {

    if (index >= quiz.length) {

        clearInterval(id);

        let totalQuestions = quiz.length;
        let correctAnswers = score;
        let wrongAnswers = totalQuestions - correctAnswers - timeupQuestions.length;
        let percentage = (correctAnswers / totalQuestions) * 100;

        let result;

        if (percentage >= 40) {
            result = "PASS";
        } else {
            result = "FAIL";
        }

        document.querySelector(".wrapper").innerHTML = `
            <div class="result">

                <h1>Quiz Finished</h1>

                <h2>Total Questions : ${totalQuestions}</h2>

                <h2>Correct Answers : ${correctAnswers}</h2>

                <h2>Wrong Answers : ${wrongAnswers}</h2>

                <h2>Time Up Questions : ${timeupQuestions.length}</h2>

                <h2>Your Score : ${score} / ${totalQuestions}</h2>

                <h2>Percentage : ${parseInt(percentage)}%</h2>

                <h2>Result : ${result}</h2>

            </div>
        `;

        return;
    }

    clearInterval(id);  

    let timeLeft = 60;
    document.querySelectorAll('.timer span')[0].innerText = "01";
    document.querySelectorAll('.timer span')[1].innerText = "00";

    if (index == quiz.length - 1) {
        document.querySelector(".next").disabled = true;
    }
    else {
        document.querySelector(".next").disabled = false;
    }

    if (backStack.length === 0) {
        document.querySelector(".pre").disabled = true;
    } else {
        document.querySelector(".pre").disabled = false;
    }

    document.querySelector(".questionlist").innerHTML = `
                        <article>
                    <h2>${quiz[index].question}</h2>
                </article>
                <main>
                    <aside>
                        <input type="radio" name="answer" form="myform" value="${quiz[index].options[0]}">
                        <label>${quiz[index].options[0]}</label>
                    </aside>

                    <aside>
                        <input type="radio" name="answer" form="myform" value="${quiz[index].options[1]}">
                        <label>${quiz[index].options[1]}</label>
                    </aside>

                    <aside>
                        <input type="radio" name="answer" form="myform" value="${quiz[index].options[2]}">
                        <label>${quiz[index].options[2]}</label>
                    </aside>

                    <aside>
                        <input type="radio" name="answer" form="myform" value="${quiz[index].options[3]}">
                        <label>${quiz[index].options[3]}</label>
                    </aside>
                </main> 
        `;

    id = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(id);
            timeupQuestions.push(index);

            alert("Time's up for this question! Moving to next question.");

            index++;
            getData(index);
            return;
        }

        let mins = parseInt(timeLeft / 60);
        let secs = timeLeft % 60;

        if (mins < 10) {
            document.querySelectorAll('.timer span')[0].innerText = "0" + mins;
        } else {
            document.querySelectorAll('.timer span')[0].innerText = mins;
        }

        if (secs < 10) {
            document.querySelectorAll('.timer span')[1].innerText = "0" + secs;
        } else {
            document.querySelectorAll('.timer span')[1].innerText = secs;
        }
    }, 1000);

    document.querySelectorAll("main aside").forEach((box) => {
        box.onclick = function () {
            box.querySelector("input").checked = true;
        };
    });
}
getData(index);

document.querySelector(".next").onclick = function (event) {
    event.preventDefault();
    clearInterval(id);

    backStack.push(index);

    index++;
    getData(index);
}

document.querySelector(".pre").onclick = function (event) {
    event.preventDefault();

    if (backStack.length === 0) {
        return;
    }

    clearInterval(id);
    index = backStack.pop();
    getData(index);
}

document.querySelector("#myform").addEventListener("submit", function (event) {

    event.preventDefault();

    let selectedAnswer = "";

    for (let i = 0; i < event.target.length; i++) {

        if (event.target[i].checked) {
            selectedAnswer = event.target[i].value;
            break;
        }

    }

    if (selectedAnswer == "") {
        alert("Please select an answer before submitting!");
        return;
    }

    if (selectedAnswer == quiz[index].answer) {
        score++;
    }

    alert("Submitted Successfully!");

    clearInterval(id);

    index++;

    getData(index);

});