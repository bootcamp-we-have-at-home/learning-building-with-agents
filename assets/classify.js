// Classify drill: the student sorts each item into one category and gets feedback per item.
// Items are shuffled on load (interleaving), the first answer counts, and "Try again" reshuffles.
// Usage:
// <div class="classify" data-cats='["DNS","TCP","TLS","HTTP"]' data-prompt="Which layer failed?">
//   <div class="item" data-answer="DNS" data-why="Explanation shown after answering.">
//     <pre><code>curl: (6) Could not resolve host: api.example.com</code></pre>
//   </div>
//   ...more .item elements...
// </div>
// <script src="../assets/classify.js"></script> at the end of the body.
document.querySelectorAll(".classify[data-cats]").forEach((box) => {
  let cats;
  try {
    cats = JSON.parse(box.dataset.cats);
  } catch (e) {
    console.error("classify.js: bad data-cats JSON", box, e);
    return;
  }
  const items = Array.from(box.querySelectorAll(":scope > .item"));
  if (box.dataset.prompt) {
    const p = document.createElement("p");
    p.className = "prompt";
    p.textContent = box.dataset.prompt;
    box.prepend(p);
  }
  const score = document.createElement("p");
  score.className = "score";
  const tally = document.createElement("span");
  const retry = document.createElement("button");
  retry.type = "button";
  retry.textContent = "Try again in a new order";
  score.append(tally, retry);

  const shuffle = () => {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    items.forEach((it) => box.appendChild(it));
    box.appendChild(score);
  };
  const update = () => {
    const done = items.filter((it) => it.dataset.done);
    const right = done.filter((it) => it.dataset.done === "right").length;
    tally.textContent = `${right} of ${done.length} correct` + (done.length < items.length ? `, ${items.length - done.length} left` : ".");
  };
  const build = (it) => {
    it.querySelectorAll(".cats, .why-item").forEach((n) => n.remove());
    delete it.dataset.done;
    const row = document.createElement("div");
    row.className = "cats";
    const why = document.createElement("p");
    why.className = "why-item";
    cats.forEach((c) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = c;
      b.addEventListener("click", () => {
        if (it.dataset.done) return;
        const ok = c === it.dataset.answer;
        it.dataset.done = ok ? "right" : "wrong";
        b.classList.add(ok ? "right" : "wrong");
        row.querySelectorAll("button").forEach((x) => {
          x.disabled = true;
          if (x.textContent === it.dataset.answer) x.classList.add("right");
        });
        why.textContent = (ok ? "Correct. " : `Not quite. The answer is ${it.dataset.answer}. `) + (it.dataset.why || "");
        update();
      });
      row.appendChild(b);
    });
    it.append(row, why);
  };
  retry.addEventListener("click", () => {
    items.forEach(build);
    shuffle();
    update();
  });
  items.forEach((it) => {
    if (!it.querySelector(".body")) {
      const body = document.createElement("div");
      body.className = "body";
      while (it.firstChild) body.appendChild(it.firstChild);
      it.appendChild(body);
    }
    build(it);
  });
  shuffle();
  update();
});
