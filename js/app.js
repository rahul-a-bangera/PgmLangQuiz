const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answer-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const optionBox = document.querySelector(".option-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let corrrectAnswers = 0;
let attempt = 0;
let quiz = [];

function questionAssign1() {
  quiz = cLang;
  console.log(quiz);
  optionBox.classList.add("hide");
  homeBox.classList.remove("hide");
}
function questionAssign2() {
  quiz = cppLang;
  console.log(quiz);
  optionBox.classList.add("hide");
  homeBox.classList.remove("hide");
}
function questionAssign3() {
  quiz = javaLang;
  console.log(quiz);
  optionBox.classList.add("hide");
  homeBox.classList.remove("hide");
}
function questionAssign4() {
  quiz = pythonLang;
  console.log(quiz);
  optionBox.classList.add("hide");
  homeBox.classList.remove("hide");
}

function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}

function getNewQuestion() {
  questionNumber.innerHTML =
    "Question " + (questionCounter + 1) + " of " + quiz.length;

  //getting random question
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  const index1 = availableQuestions.indexOf(questionIndex);
  availableQuestions.splice(index1, 1);

  const optionLen = currentQuestion.options.length;
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }
  optionContainer.innerHTML = "";
  let animationDelay = 0.15;
  for (let i = 0; i < optionLen; i++) {
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    const index2 = availableOptions.indexOf(optionIndex);
    availableOptions.splice(index2, 1);

    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.15;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }
  questionCounter++;
}

function getResult(element) {
  const id = parseInt(element.id);
  if (id == currentQuestion.answer) {
    element.classList.add("correct");
    updateAnswerIndicator("correct");
    corrrectAnswers++;
  } else {
    element.classList.add("wrong");
    updateAnswerIndicator("wrong");

    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++)
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer)
        optionContainer.children[i].classList.add("correct");
  }
  attempt++;
  unclickableOptions();
}
function unclickableOptions() {
  const optionLen = optionContainer.children.length;
  for (let i = 0; i < optionLen; i++)
    optionContainer.children[i].classList.add("already-answered");
}

function answersIndicator() {
  answerIndicatorContainer.innerHTML = "";
  const totalQuestion = quiz.length;

  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");

    answerIndicatorContainer.appendChild(indicator);
  }
}
function updateAnswerIndicator(markType) {
  answerIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}

function next() {
  if (questionCounter === quiz.length) {
    console.log("quiz over ");
    quizOver();
  } else {
    getNewQuestion();
  }
}
function quizOver() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  quizResult();
}
function quizResult() {
  resultBox.querySelector(".total-question").innerHTML = quiz.length;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = corrrectAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - corrrectAnswers;
  const per = (corrrectAnswers / quiz.length) * 100;
  resultBox.querySelector(".percentage").innerHTML = per.toFixed(2) + "%";
  resultBox.querySelector(".total-score").innerHTML =
    corrrectAnswers + "/" + quiz.length;
}
function resetQuiz() {
  questionCounter = 0;
  corrrectAnswers = 0;
  attempt = 0;
}
function tryAgainQuiz() {
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}
function goToHome() {
  resultBox.classList.add("hide");
  optionBox.classList.remove("hide");
  resetQuiz();
}

function startQuiz() {
  homeBox.classList.add("hide");
  quizBox.classList.remove("hide");
  setAvailableQuestions();
  getNewQuestion();

  answersIndicator();
}

window.onload = function () {
  homeBox.querySelector(".total-question").innerHTML = quiz.length;
};
