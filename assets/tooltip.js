// Tap-to-toggle for .term tooltips (hover/focus is pure CSS; touch needs a click).
// Usage: <span class="term" data-tip="explanation">word</span> + <script src="../assets/tooltip.js">
document.querySelectorAll(".term[data-tip]").forEach((el) => {
  el.setAttribute("tabindex", "0");
  el.addEventListener("click", () => {
    document.querySelectorAll(".term.open").forEach((o) => o !== el && o.classList.remove("open"));
    el.classList.toggle("open");
  });
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".term")) {
    document.querySelectorAll(".term.open").forEach((o) => o.classList.remove("open"));
  }
});
