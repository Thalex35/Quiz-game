const QUESTION_BANK = {
  9: [
    {
      question: "Combien de jours y a-t-il dans une annee bissextile ?",
      answers: ["364", "365", "366", "367"],
      correctAnswer: "366",
    },
    {
      question: "Quelle couleur obtient-on en melangeant le bleu et le jaune ?",
      answers: ["Vert", "Rouge", "Violet", "Orange"],
      correctAnswer: "Vert",
    },
    {
      question: "Combien y a-t-il de minutes dans une heure ?",
      answers: ["30", "45", "60", "90"],
      correctAnswer: "60",
    },
  ],
  17: [
    {
      question: "Quelle est la formule chimique de l'eau ?",
      answers: ["H2O", "CO2", "O2", "H2O2"],
      correctAnswer: "H2O",
    },
    {
      question: "Quelle planete est la plus proche du Soleil ?",
      answers: ["Venus", "Mercure", "Mars", "Terre"],
      correctAnswer: "Mercure",
    },
    {
      question: "Combien de chromosomes possede l'etre humain ?",
      answers: ["23", "44", "46", "48"],
      correctAnswer: "46",
    },
  ],
  22: [
    {
      question: "Quelle est la capitale de l'Australie ?",
      answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra",
    },
    {
      question: "Quel est le plus grand pays du monde par superficie ?",
      answers: ["Canada", "Etats-Unis", "Chine", "Russie"],
      correctAnswer: "Russie",
    },
    {
      question: "Sur quel continent se trouve le desert du Sahara ?",
      answers: ["Asie", "Afrique", "Amerique du Sud", "Australie"],
      correctAnswer: "Afrique",
    },
  ],
  23: [
    {
      question: "En quelle annee la Premiere Guerre mondiale a-t-elle commence ?",
      answers: ["1910", "1912", "1914", "1916"],
      correctAnswer: "1914",
    },
    {
      question: "Qui a peint la Joconde ?",
      answers: ["Michel-Ange", "Raphael", "Leonard de Vinci", "Botticelli"],
      correctAnswer: "Leonard de Vinci",
    },
    {
      question: "En quelle annee a eu lieu la Revolution francaise ?",
      answers: ["1769", "1779", "1789", "1799"],
      correctAnswer: "1789",
    },
  ],
  18: [
    {
      question: "Que signifie HTML ?",
      answers: [
        "HyperText Markup Language",
        "High Transfer Markup Language",
        "HyperText Method Language",
        "High Text Media Link",
      ],
      correctAnswer: "HyperText Markup Language",
    },
    {
      question: "Quel langage est principalement utilise cote navigateur ?",
      answers: ["Python", "Ruby", "JavaScript", "PHP"],
      correctAnswer: "JavaScript",
    },
    {
      question: "Que represente CSS ?",
      answers: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Syntax",
        "Colorful Styling System",
      ],
      correctAnswer: "Cascading Style Sheets",
    },
  ],
  21: [
    {
      question: "Combien de joueurs une equipe de football a-t-elle sur le terrain ?",
      answers: ["9", "10", "11", "12"],
      correctAnswer: "11",
    },
    {
      question: "Dans quel sport utilise-t-on une raquette ?",
      answers: ["Tennis", "Football", "Basketball", "Rugby"],
      correctAnswer: "Tennis",
    },
    {
      question: "Combien de points vaut un panier a trois points au basketball ?",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "3",
    },
  ],
};

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

export function startQuiz(categoryId) {
  questions = QUESTION_BANK[categoryId] ?? QUESTION_BANK[17];
  currentQuestionIndex = 0;
  score = 0;

  return getCurrentQuestion();
}

export function getCurrentQuestion() {
  return questions[currentQuestionIndex];
}

export function getProgressText() {
  return `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

export function getScoreText() {
  return `${score}/${questions.length}`;
}

export function checkAnswer(answer) {
  const currentQuestion = getCurrentQuestion();
  const isCorrect = answer === currentQuestion.correctAnswer;

  if (isCorrect) {
    score++;
  }

  return isCorrect;
}

export function goToNextQuestion() {
  currentQuestionIndex++;
  return currentQuestionIndex < questions.length;
}

export function getResults() {
  return {
    score,
    total: questions.length,
  };
}
