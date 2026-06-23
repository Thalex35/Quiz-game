import {
  welcome_screen,
  category_screen,
  loading_screen,
  quiz_screen,
  results_screen,
  start_button,
  play_again_button,
  category_button,
  next_question_button,
  finish_button,
  question_text,
  answer_buttons,
  progress_text,
  score_text,
  results_description,
} from "./element.js";

import { showScreen } from "./views.js";
import {
  checkAnswer,
  getCurrentQuestion,
  getProgressText,
  getResults,
  getScoreText,
  goToNextQuestion,
  startQuiz,
} from "./quiz.js";

function renderQuestion() {
  const currentQuestion = getCurrentQuestion();

  question_text.textContent = currentQuestion.question;
  progress_text.textContent = getProgressText();
  score_text.textContent = getScoreText();

  answer_buttons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.disabled = false;
    button.classList.remove("correct", "wrong");
  });
}

function showResults() {
  const results = getResults();

  results_description.textContent = `You scored ${results.score} out of ${results.total}.`;
  showScreen(results_screen);
}

start_button?.addEventListener("click", () => {
  showScreen(category_screen);
});

category_button?.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    showScreen(loading_screen);

    setTimeout(() => {
      startQuiz(category);
      renderQuestion();
      showScreen(quiz_screen);
    }, 800);
  });
});

answer_buttons?.forEach((button) => {
  button.addEventListener("click", () => {
    const isCorrect = checkAnswer(button.textContent);

    button.classList.add(isCorrect ? "correct" : "wrong");
    answer_buttons.forEach((answerButton) => {
      answerButton.disabled = true;
    });

    score_text.textContent = getScoreText();
  });
});

next_question_button?.addEventListener("click", () => {
  const hasNextQuestion = goToNextQuestion();

  if (hasNextQuestion) {
    renderQuestion();
  } else {
    showResults();
  }
});

finish_button?.addEventListener("click", () => {
  showResults();
});

play_again_button?.addEventListener("click", () => {
  showScreen(welcome_screen);
});
