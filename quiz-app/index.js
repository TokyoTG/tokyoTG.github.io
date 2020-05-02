const questions = [
  {
    question:
      "At which bridge does the annual Oxford and Cambridge boat race start?",
    correct_answer: "Putney",
    incorrect_answers: ["Hammersmith", "Vauxhall", "Battersea"],
  },
  {
    question:
      "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian GrandPrix?",
    correct_answer: "Jordan",
    incorrect_answers: ["Benetton", "Ferrari", "Mercedes"],
  },
  {
    question: "Astimpmeter measures the speed of a ball over what surface?",
    correct_answer: "Golf Putting Green",
    incorrect_answers: [" Football Pitch", "Cricket Outfield", "PinballTable"],
  },
  {
    question: "Which Formula One driver was nicknamed 'The Professor'?",
    correct_answer: "Alain Prost",
    incorrect_answers: ["Ayrton Senna", "Niki Lauda", "Emerson Fittipaldi"],
  },
  {
    question:
      "What national team won the 2016 edition of UEFA European Championship?",
    correct_answer: "Portugal",
    incorrect_answers: ["France", "Germany", "England"],
  },
];

let currentIndex = 0; //current question index
let numberOfCorrect = 0; //number of correct answers
let questionsLeft = 5; // total number of questions
let selectedAnswer, correctAnswer, answerElement;
let answered = false;

//displays the current question
function displayQuestion(obj, index) {
  let answers = document.getElementById("answers");
  let questionContainer = document.getElementById("Currentquestion");
  answers.innerHTML = "";
  let shuffledAnswers = shuffle(obj, index);
  let answerText = displayAnswers(shuffledAnswers);
  answers.innerHTML = answerText;
  answerText = "";
  questionContainer.textContent = obj[index].question;
}

//shuffles the position of the correct answer
function shuffle(obj, index) {
  let array = [...obj[index].incorrect_answers, obj[index].correct_answer];
  const length = array.length;
  if (!length) {
    return [];
  }
  let i = -1;
  const lastIndex = length - 1;
  const result = [...array];
  while (++i < length) {
    const rand = i + Math.floor(Math.random() * (lastIndex - i + 1));
    const value = result[rand];
    result[rand] = result[i];
    result[i] = value;
  }
  return result;
}

//gets the correct answer from the question object
function getCorrectAnswer(obj, index) {
  return obj[index].correct_answer;
}

//displays the list of options
function displayAnswers(arr) {
  let answerText = "";
  for (let item of arr) {
    answerText += `<li onclick="getAnswer()">${item}</li>`;
  }
  return answerText;
}

//gets the element the player selected
function selectAnswer() {
  let answersArr = [...document.getElementsByTagName("li")];
  for (let item of answersArr) {
    if ([...item.classList].includes("selected")) {
      item.classList.remove("selected");
    }
  }
  event.target.classList.add("selected");
  return event.target;
}

//display the correct answer
function displayCorrectAnswer(correctAnswer) {
  let answersArr = [...document.getElementsByTagName("li")];
  for (let item of answersArr) {
    if (item.textContent === correctAnswer) {
      item.classList.add("correct");
    }
  }
}

//gets the answer the player selected
function getAnswer() {
  submitAnswer.classList.remove("disabled");
  answerElement = selectAnswer();
  selectedAnswer = answerElement.textContent;
}

//reset game and display player score
function resetgame() {
  correctDisplay.textContent = numberOfCorrect;
  modal.style.display = "block";
  modalContent.textContent = `Score: ${numberOfCorrect}`;
  currentIndex = 0;
  numberOfCorrect = 0;
  questionsLeft = 5;
  correctDisplay.textContent = numberOfCorrect;
  numOfQuestions.textContent = questionsLeft;
}
