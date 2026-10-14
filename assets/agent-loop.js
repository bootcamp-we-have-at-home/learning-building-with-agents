// Agent loop stepper: replays an agent session one item at a time, shows the context
// window growing, and asks the student to predict what kind of item comes next.
// Usage:
// <link rel="stylesheet" href="../assets/agent-loop.css">
// <div class="agent-loop" data-caption="Captured on 2026-10-14 ..."
//      data-end-why="Explanation shown when the student predicts the end of the loop.">
//   <div class="turn" data-kind="user"><pre>Your prompt</pre></div>
//   <div class="turn" data-kind="call" data-why="Why this item comes next."><pre>Tool call</pre></div>
//   <div class="turn" data-kind="result" data-why="..."><pre>Tool result</pre></div>
//   <div class="turn" data-kind="text" data-why="..."><pre>Model text</pre></div>
// </div>
// <script src="../assets/agent-loop.js"></script> at the end of the body.
// data-kind is one of: user, text, call, result. The first turn is shown at the start.
document.querySelectorAll(".agent-loop").forEach((box) => {
  const LABELS = { user: "Your message", text: "Model text", call: "Tool call", result: "Tool result", end: "The loop ends" };
  const WRITER = { user: "written by you", text: "written by the model", call: "written by the model", result: "written by the program" };
  const turns = Array.from(box.querySelectorAll(":scope > .turn"));
  turns.forEach((t) => {
    const badge = document.createElement("p");
    badge.className = "badge";
    badge.textContent = `${LABELS[t.dataset.kind]}, ${WRITER[t.dataset.kind]}`;
    t.prepend(badge);
  });
  const head = document.createElement("p");
  head.className = "loop-head";
  head.textContent = "Context window";
  box.prepend(head);
  if (box.dataset.caption) {
    const cap = document.createElement("p");
    cap.className = "loop-caption";
    cap.textContent = box.dataset.caption;
    head.after(cap);
  }
  const status = document.createElement("p");
  status.className = "loop-status";
  const ask = document.createElement("div");
  ask.className = "loop-ask";
  box.append(status, ask);

  let shown = 0;
  let right = 0;
  let guesses = 0;
  const showUpTo = (n) => {
    turns.forEach((t, i) => (t.hidden = i >= n));
    shown = n;
    const chars = turns.slice(0, n).reduce((s, t) => s + t.querySelector("pre").textContent.length, 0);
    const requests = turns.slice(0, n).filter((t) => t.dataset.kind === "text" || t.dataset.kind === "call").length;
    status.textContent =
      `The context holds ${n} item${n === 1 ? "" : "s"} (about ${chars} characters, plus the system prompt and tool list that you don't see). ` +
      `The program has sent the whole context to the model ${requests} time${requests === 1 ? "" : "s"} so far.`;
  };
  const buildAsk = () => {
    ask.textContent = "";
    const q = document.createElement("p");
    q.className = "q";
    const fb = document.createElement("p");
    fb.className = "loop-feedback";
    const row = document.createElement("div");
    row.className = "loop-choices";
    if (shown > turns.length) {
      q.textContent = `You predicted ${right} of ${guesses} items correctly.`;
      const again = document.createElement("button");
      again.type = "button";
      again.textContent = "Replay the session";
      again.addEventListener("click", () => {
        right = 0;
        guesses = 0;
        showUpTo(1);
        buildAsk();
      });
      row.appendChild(again);
      ask.append(q, row);
      return;
    }
    q.textContent = "What comes next?";
    const expected = shown < turns.length ? turns[shown].dataset.kind : "end";
    ["text", "call", "result", "end"].forEach((k) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = LABELS[k];
      b.addEventListener("click", () => {
        if (row.dataset.done) return;
        row.dataset.done = "1";
        guesses++;
        const ok = k === expected;
        if (ok) right++;
        b.classList.add(ok ? "right" : "wrong");
        row.querySelectorAll("button").forEach((x) => {
          x.disabled = true;
          if (x.textContent === LABELS[expected]) x.classList.add("right");
        });
        const why = expected === "end" ? box.dataset.endWhy || "" : turns[shown].dataset.why || "";
        fb.textContent = (ok ? "Correct. " : `Not quite. The next item is: ${LABELS[expected]}. `) + why;
        const next = document.createElement("button");
        next.type = "button";
        next.className = "loop-next";
        next.textContent = expected === "end" ? "See your score" : "Add it to the context";
        next.addEventListener("click", () => {
          if (expected === "end") shown = turns.length + 1;
          else showUpTo(shown + 1);
          buildAsk();
        });
        ask.appendChild(next);
      });
      row.appendChild(b);
    });
    ask.append(q, row, fb);
  };
  showUpTo(1);
  buildAsk();
});
