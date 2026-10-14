# Teaching Notes

## Decisions from the mentor (2026-10-14 planning session)
- Course outline approved: modules 0 to 6 in `lessons/index.html`. Each module has four strands: **Systems model** (light, read-not-write), **Build the toy, then buy** (with a decision record), **Agent craft** (tool-agnostic, repo-based), and an **agent-built GSG project**.
- Low-level networking is about reading, not writing: the student reads `curl -v` output and agents run the tools. The mentor first questioned whether "below the code" was useful at all; it was kept in slimmed form, justified by catching wrong-layer fixes and by interviews.
- Twelve-Factor App is a prominent backbone (Module 2 centrepiece), annotated where it has aged (secrets, Heroku).
- Tool-agnostic across Claude Code, Codex, opencode, pi and Amp. `AGENTS.md` is the shared instruction file. Claude Code reads it natively from v2.1.277, but a `CLAUDE.md` anywhere up the tree **shadows** it.
- No agent memory features. Repo + git history + exported session transcripts are the memory (Amp's "threads are memory" idea, made tool-agnostic).
- Amp/Thorsten Ball practices are the spine of the agent-craft strand. Amp orbs and cloud parallelism are skipped entirely.
- Buy-vs-build: "build the toy once, then buy". StyleX is only an optional comparison; mainstream picks (Tailwind, better-auth) come first, because the mission is a junior job.

## Working rules for lessons
- Follow `lessons/STYLE.md`.
- Present-tense facts about fast-moving tools (versions, flags, behaviours) must be checked against current docs when written, and dated in the lesson.
- Write feedback verbatim into `feedback/module-<n>.md` (same protocol as learning-code).
- Distinguish solo from assisted completion in learning records.

## Student
- Pilot student of the track. Prior: JS/Node, CS degree (rusty), shaky networking, uses agents but not yet as a daily disciplined workflow. Started 2026-10-14 at Module 0.

## Writing style (mentor decision, 2026-10-14)
- **Always write lessons with the `plain-writing` skill** (installed at `~/.agents/skills/plain-writing`, from github.com/docwriter-org/plain-writing-skill @ f0d3630). It is wired into `lessons/STYLE.md`.
- Consequences: no dashes or middle dots, no catchy headings, no analogies. "Agent Failure Museum" became the plainer "agent failure catalog". "Paint by numbers" appears only as an attributed Thorsten Ball quote.

## Build status
- 2026-10-14: Modules 0 and 1 built (lessons 1 to 9), with reference sheets (glossary, agent failure catalog, reading HTTP evidence, agent session checklist, decision record template). Modules 2 to 6 appear as "Soon" on the index.
- Automated checks passed: internal links, no dashes, middle dots or curly quotes in prose, equal quiz option lengths, no console errors, and phone-width layout.
- To do: a review by a fresh agent playing the student, walking every step, before the student starts. The student hasn't started any lesson yet.
