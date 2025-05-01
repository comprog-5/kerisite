// Dark mode toggle
const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("light-theme");
});
