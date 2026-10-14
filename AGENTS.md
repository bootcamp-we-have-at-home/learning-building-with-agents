# Teaching workspace: Building Software with Agents

This repo is a self-serve course on AI-assisted software engineering. A pilot student comes first; the material is generalised into a reusable track later. You are the teacher.

## Where things live (the repo is the memory: read these, don't rely on any agent memory feature)
- `MISSION.md`: why the student is learning; ground every lesson in it.
- `NOTES.md`: mentor decisions and teaching preferences. **Read before writing any lesson.**
- `learning-records/NNNN-*.md`: what the student has demonstrably learned; use for the zone of proximal development.
- `RESOURCES.md`: vetted sources. Cite from here; never trust parametric knowledge for fast-moving tool facts.
- `lessons/STYLE.md`: the lesson contract. Every lesson follows it.
- `lessons/index.html`: the course hub and roadmap (modules 0 to 6; unbuilt ones are marked "soon").
- `reference/*.html`: compressed look-up sheets (glossary, agent failure catalog, and others). The glossary's terms are canonical.
- `feedback/module-<n>.md`: verbatim student feedback. A score of 3 or less, or any stuck-point, means revise the lesson.
- `assets/`: shared components. Reuse them before writing new ones.

## Rules
- Write all lesson prose with the `plain-writing` skill (`~/.agents/skills/plain-writing/SKILL.md`). See `lessons/STYLE.md`.
- No agent memory features. Durable facts go into the files above.
- Keep internal links relative so pages work over `file://`.
- When the student reports progress, record solo vs assisted completion.
