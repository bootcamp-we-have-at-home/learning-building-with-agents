# Lesson design standard for Building Software with Agents

Every lesson in this track follows this contract. It is adapted from `../learning-code/lessons/STYLE.md`, whose rules came from real student feedback. For example, students said the lessons were too dense, that they assumed knowledge, and that they wanted more examples that they could skip. Those rules carry over, and rules 9 to 14 are specific to this track.

## Writing style

Write all lesson prose with the `plain-writing` skill (`~/.agents/skills/plain-writing/SKILL.md`). Read the skill before you write or edit any lesson, reference sheet or index page. The skill applies to the words and not to code or terminal output. Where it conflicts with a rule below, the plain-writing skill wins. The rules that affect lessons most are these:

- Prose, titles and navigation have no em dashes, en dashes or middle dots. Ranges use "to", and separators use commas or line breaks.
- Headings are descriptive and in sentence case, and they have no catchy labels. A memorable phrase from a source may appear only as an attributed quote, e.g., Thorsten Ball's "paint by numbers".
- Lessons use no analogies or metaphors, and they describe the actual mechanism instead.
- Sentences are complete, and paragraphs open with a topic sentence. No sentence starts with "This", "That", "These" or "Those".
- Quiz options, tooltips and feedback text follow the same rules.

## Files

```
lessons/index.html            course hub and roadmap; built modules link, unbuilt ones show "soon"
lessons/NNNN-dash-name.html   one lesson, numbered across the whole course
reference/*.html              look-up sheets; the glossary's terms are canonical
assets/                       shared CSS and JS components; reuse them before writing new ones
```

From a lesson, assets are at `../assets/`, reference sheets are at `../reference/`, and other lessons are plain filenames. Every lesson links `../assets/course.css` and `../assets/layout.js` in its head.

## Lesson skeleton

A lesson has these parts, in this order:

1. The page starts with an `<h1>` in the form "Lesson N: descriptive title", e.g., "Lesson 5: Reading one request across five systems". A `<p class="subtitle">` follows, with the time (45 minutes or less, not counting project time), the module and the strands.
2. A `<p class="why">` says why the lesson matters, in at most two sentences, and ties it to the mission of getting hired as a developer who steers agents.
3. One to three idea sections follow, each under an `<h2>`. Each idea section ends with a `<details class="examples">` block of optional worked examples and then a `<p class="read-more">` line.
4. A "Do it" section uses `<ol class="steps">`. Each step has one outcome and ends with "You should now see" and the visible result.
5. A "Check yourself" section uses the most active format the topic allows, e.g., a classify drill, a prediction or a bug to spot. The `quiz.js` multiple choice widget is the fallback.
6. A `<div class="source">` names the single best resource from `RESOURCES.md` and says what to read in it.
7. A `<div class="feedback-ask">` asks the two feedback questions. The teacher writes the answers to `feedback/module-<n>.md`.
8. A `<div class="footer-nav">` links the reference sheets, the previous and next lessons and the course index, separated by line breaks or commas. It ends with a line that invites the student to ask the teacher (the agent) a follow-up question, with one concrete example question.
9. Scripts go at the end of the body, i.e., `quiz.js`, `tooltip.js` and any other component the lesson uses.

## Rules carried over from learning-code

1. Teach a skill before a lesson requires it. The first time a lesson uses something from an earlier lesson, it names that lesson inline, e.g., "the agent loop from lesson 1".
2. A lesson introduces at most about seven new terms. Extra terms go into tooltips (`<span class="term" data-tip="...">`) or the glossary.
3. Paragraphs have two or three sentences and one new concept each. A key claim gets its own paragraph. Each section starts from something the student already knows.
4. Each step has one outcome and a visible success check.
5. Code and commands go in `<pre><code>` blocks, one command per line, with an aligned `#` comment. Inline `<code>` is only for referring to names.
6. Lessons never hardcode usernames or absolute home paths. A lesson creates its own practice folders, e.g., `~/code/agents-lab/`.
7. A destructive command comes with a safety line and a check that the student runs first.
8. Extra examples are collapsed and optional. Nothing that a step or check depends on may sit inside a `<details>` block.

## Rules for this track

9. At the systems layer, the student reads and does not write. The student reads `curl -v` output, browser Network tabs, logs and diffs that an agent produced, and lessons never drill typing commands from memory. When the student must run a command, the lesson gives the whole command in a block and spends its time on reading the output.
10. Lessons are tool-agnostic. They teach the mechanism that lives in the repo, e.g., `AGENTS.md`, tests, git and CI. A detail that only applies to one tool goes in a small table with a column for each of Claude Code, Codex, opencode, pi and Amp. The table only holds facts checked against that tool's current docs, with the date of the check, and it says "not verified" when a fact couldn't be checked.
11. Lessons never teach agent memory features, and they never tell the student to ask the agent to "remember" something. The memory is the repo, the git history and the saved session transcripts.
12. All options in a quiz have the same number of words and close to the same number of characters, and formatting never gives the answer away. The `why` text explains every option, including the wrong ones.
13. Any claim that isn't obvious links to a source from `RESOURCES.md`. A new source must be checked first and then added to `RESOURCES.md`.
14. Terminal output in a lesson is real output that someone captured, and the lesson gives the capture date. Lessons never invent output.

## Shared components in assets/

- `course.css` holds the design system. The lesson-level classes are `.why`, `.source`, `.aside`, `.steps`, `.quiz`, `.term`, `details.examples`, `.read-more`, `.feedback-ask`, `.footer-nav`, `.trace` (annotated terminal output), `.strand` (strand badges) and `.classify`.
- `quiz.js` renders a multiple choice question from `<div class="quiz" data-q="..." data-opts='[...]' data-answer="0" data-why="...">`.
- `classify.js` lets the student sort items into categories and gives feedback on each item. The markup is described in the file's header comment.
- `tooltip.js` lets the student tap a `.term` to show its tooltip on touch screens.

## Definition of done

A lesson is done when it passes a self-review against every rule above and every link in it works. New terms are added to `reference/glossary.html`, and new agent failures are added to `reference/agent-failure-catalog.html`.
