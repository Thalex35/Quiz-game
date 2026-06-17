import {
  welcome_screen,
  category_screen,
  quiz_screen,
  results_screen,
  start_button,
  play_again_button,
  category_button,
  finish_button,
} from "./element.js";

import { showScreen } from "./views.js";

start_button?.addEventListener("click", () => {
  showScreen(category_screen);
});

category_button?.addEventListener("click", () => {
  showScreen(quiz_screen);
});

finish_button?.addEventListener("click", () => {
  showScreen(results_screen);
});

play_again_button?.addEventListener("click", () => {
  showScreen(welcome_screen);
});
