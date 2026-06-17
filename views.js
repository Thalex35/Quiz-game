export function showScreen(screenToShow) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => {
    screen.classList.add("hidden");
  });
  screenToShow.classList.remove("hidden");
}
