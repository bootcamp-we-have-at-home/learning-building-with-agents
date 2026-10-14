# Mission: Building Software with Agents

## Why
Get hired as an **AI-native developer**: someone who directs coding agents to build and ship real full-stack apps, and who understands the systems around the code well enough to judge, constrain and fix what the agents produce. In short, the student steers the agent; the agent never steers the student.

## Success looks like
- Takes a GSG-style project brief (API app → Express + Postgres + auth → full-stack e-commerce) and ships it with an agent. The student owns the spec, the architecture, the constraints and the review; the agent writes the code.
- Reads the evidence an agent produces (`curl -v` output, Network tab, logs, stack traces, diffs) and catches fixes made at the wrong layer.
- Makes and defends buy-vs-build-vs-self-host decisions (e.g. better-auth vs a hand-rolled session) in a written decision record.
- Gets familiar with a new library fast by having agents read its real docs and source, enough to steer.
- Sets up any repo so that any agent (Claude Code, Codex, opencode, pi, Amp) works well and safely: `AGENTS.md`, tests, linters, CI, git discipline. The repo and past sessions are the memory.
- Can tell the "agent failure museum" story in an interview: symptom → root cause → guardrail.

## Constraints
- Pace: ~20 h/week, roughly one module per week. Lessons are short; most hours go into agent-built projects.
- Background: writes JS/Node; rusty CS degree; shaky on networking.
- Tool-agnostic: the course teaches the repo as the harness. Tool-specific features appear only in small per-tool notes.
- One laptop. No cloud or remote parallel agents (Amp orbs etc.). Parallelism means local worktrees.
- No agent "memory" features. Memory is the codebase, git history and saved session transcripts.
- Pilot student first; the material is later generalised into a reusable track. Lessons stay free of personal details; personal state lives in this file, `NOTES.md` and `learning-records/`.

## Out of scope
- Writing networking tooling by hand (reading `curl -v`, yes; composing curl incantations, no).
- Byte-level protocol detail (TLS internals, packet formats).
- Cloud agent fleets, model training and fine-tuning, building LLM products.

_Last updated: 2026-10-14_
