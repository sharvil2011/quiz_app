const quizData = [
    {
        question: "What is the correct spelling of 🚁",
        a: "Heplicopter",
        b: "Helililopter",
        c: "Helicopter",
        d: "Truck",
        correct: "c",
    },{
        question: "Correct pronounciation of 'bolognese'",
        a: "bolo-ganesh",
        b: "bolo-g-sneeze",
        c: "bolo-neice",
        d: "none of the above",
        correct: "d",
    },
    {
        question: "What do color blind people see instead of car?",
        a: "truck",
        b: "bike",
        c: "car",
        d: "scooty",
        correct: "c",
    },
    {
        question: "If shashank has 2 apples and raman has 3 oranges, what can we conclude?",
        a: "Salman Khan is a faaltu actor",
        b: "America is capital of Russia",
        c: "Ibrahim Lincoln was Indian",
        d: "All of above",
        correct: "a",
    }
]
let currentQuiz = 0;
let score = 0;
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");  

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
} 

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2> You answered correctly ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});
