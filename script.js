import {
  welcome_screen,
  category_screen,
  quiz_screen,
  results_screen,
  start_button,
  play_again_button,
  category_button,
  finish_button,
  loading_screen,
} from "./element.js";

import { showScreen } from "./views.js";

start_button?.addEventListener("click", () => {
  showScreen(category_screen);
});

category_button?.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(loading_screen);
    setTimeout(() => {
      showScreen(quiz_screen);
    }, 1500);
    const category = button.dataset.category;
    console.log(`Selected category: ${category}`); // Log the selected category
  });
});

finish_button?.addEventListener("click", () => {
  showScreen(results_screen);
});

play_again_button?.addEventListener("click", () => {
  showScreen(welcome_screen);
});
