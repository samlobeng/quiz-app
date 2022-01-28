const quizData = [
  {
    question:
      "Britain and France declared war on Germany on 3 September 1939 after the German invasion of which country?",
    answers: {
      a: "Denmark",
      b: "Poland",
      c: "Czechoslovakia",
      correct: "b",
    },
  },
  {
    question: "When did Germany invade the USSR?",
    answers: {
      a: "May 1940",
      b: "May 1940",
      c: "June 1941",
      correct: "c",
    },
  },
  {
    question:
      "What was the name of Britain's new bombing policy in May 1942 that targeted German cities?",
    answers: {
      a: "Tactical bombing",
      b: "Area bombing",
      c: "Precision bombing",
      correct: "b",
    },
  },
  {
    question:
      "What was the name of the army officer who planted the bomb that almost killed Hitler in July 1944?",
    answers: {
      a: "Colonel Stauffenberg",
      b: "Field Marshal Rommel",
      c: "Colonel Tresckow",
      correct: "a",
    },
  },
  {
    question:
      "To which country in Nazi occupied Europe were Jews sent as part of the 'Final Solution' agreed at the Wannsee Conference?",
    answers: {
      a: "Poland",
      b: "Czechoslovakia",
      c: "Estonia",
      correct: "a",
    },
  },
  {
    question: "What was the name of the biggest Nazi death camp?",
    answers: {
      a: "Treblinka",
      b: "Sobibor",
      c: "Auschwitz-Birkenau",
      correct: "c",
    },
  },
  {
    question:
      "Where did German army lose its first battle of the war in Europe, in early 1943?",
    answers: {
      a: "Moscow",
      b: "Stalingrad",
      c: "Leningrad",
      correct: "b",
    },
  },
  {
    question:
      "When did Germany surrender to the Allies, ending World War Two in Europe?",
    answers: {
      a: "March 1945",
      b: "May 1945",
      c: "August 1945",
      correct: "b",
    },
  },
  {
    question:
      "In which German city were the trials of those Nazis suspected of war crimes held from late 1945?",
    answers: {
      a: "Berlin",
      b: "Dresden",
      c: "Nuremberg",
      correct: "c",
    },
  },
  {
    question:
      "Who was the first Chancellor of the Federal Republic of Germany (West Germany)?",
    answers: {
      a: "Wilhelm Pieck",
      b: "Konrad Adenauer",
      c: "Willy Brandt",
      correct: "b",
    },
  },
];
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  console.log(currentQuizData);
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.answers.a;
  b_text.innerText = currentQuizData.answers.b;
  c_text.innerText = currentQuizData.answers.c;
}

function getSelected() {
  const answerEl = document.querySelectorAll(".answer");
  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelect() {
  const answerEl = document.querySelectorAll(".answer");
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].answers.correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      deSelect();
      loadQuiz();
    } else {
      quizEl.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions. </h2> <button onclick = "location.reload()">Reload</button>`;
    }
  }
});
