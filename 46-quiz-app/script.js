const quizData = [
    {
        question: "What's a group of kittens called?",
        a: "A swarm",
        b: "A huddle",
        c: "A kindle",
        d: "A mess",
        correct: "c",
    },
    {
        question: "Which part of a cat is unique like a human fingerprint?",
        a: "Paw pads",
        b: "Nose pad",
        c: "Tongue",
        d: "Claws",
        correct: "b",
    },
    {
        question: "Cats can't taste _____ flavors.",
        a: "Sour",
        b: "Sweet",
        c: "Bitter",
        d: "Salty",
        correct: "b",
    },
    {
        question: "How much of their life has a 15-year-old cat spent sleeping?",
        a: "4 to 6 years",
        b: "6 to 8 years",
        c: "8 to 10 years",
        d: "10 to 12 years",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2 class="result">You answered ${score}/${quizData.length} questions correctly!</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})