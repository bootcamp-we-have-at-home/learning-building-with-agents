# Building Software with Agents resources

All URLs were verified on 2026-10-14 unless marked otherwise. ★ = primary source for its area.

## Knowledge

### Agent craft
- ★ [Anthropic, Building Effective AI Agents](https://www.anthropic.com/engineering/building-effective-agents)
  Workflows vs agents; the model + tools + loop pattern. Use for: Module 0 mental model.
- ★ [Thorsten Ball, How to Build an Agent](https://ampcode.com/how-to-build-an-agent)
  "An LLM, a loop, and enough tokens", in under 400 lines of Go. Use for: lesson 0001; showing that context is all the model sees.
- [Thorsten Ball, How I Use Amp](https://ampcode.com/notes/how-i-use-amp)
  Paint-by-numbers prompting, fresh threads, agent reviews the diff, VCS as the safety net. Written in May 2025 for an older Amp, so read it for the practices, not for current features. Use for: session discipline (0002).
- [Amp, Read Bigger Threads](https://ampcode.com/news/read-bigger-threads) and [Amp, Rebuilt](https://ampcode.com/news/neo)
  Threads as re-readable memory; the May 2026 reversal (handoff out, auto-compaction in). Use for: the repo-as-memory lesson (0003).
- [Amp, Handoff](https://ampcode.com/news/handoff), [Amp threads docs](https://ampcode.com/docs/threads)
  Goal-directed handoff briefs; `Amp-Thread-ID` commit trailers. Use for: handoff notes and session trailers.
- [Amp, Context management guide](https://ampcode.com/guides/context-management) (archived, Nov 2025)
  Why less context gives better results.
- [Raising an Agent S2E4 (Quinn Slack, Thorsten Ball)](https://ampcode.com/podcast/season-02/episode-04)
  "All of our intent, all of our history is … in threads … legible to the agent."
- [Anthropic, Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
  Context as a finite resource; compaction.
- [AGENTS.md](https://agents.md/)
  The tool-neutral instruction-file format.
- [Claude Code docs, memory / AGENTS.md](https://code.claude.com/docs/en/memory#agents-md)
  Native AGENTS.md support from v2.1.277; a CLAUDE.md up the tree shadows it.
- [Claude Code docs: best practices](https://code.claude.com/docs/en/best-practices), [hooks](https://code.claude.com/docs/en/hooks), [permissions](https://code.claude.com/docs/en/permissions), [sandboxing](https://code.claude.com/docs/en/sandboxing)
  Use for: the per-tool notes (Claude Code column).
- [Birgitta Böckeler, Context Engineering for Coding Agents](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html)
  Practitioner view on rules files and scoping.
- [Kent Beck, Augmented Coding: Beyond the Vibes](https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes)
  TDD as the guardrail; the "genie" that cheats on tests. Use for: Module 3.
- [Simon Willison, The lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
  Private data + untrusted content + external communication = exfiltration risk. Use for: Module 4.
- [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/)
  Standard taxonomy of LLM risks (prompt injection, etc.).
- [METR, Early-2025 AI and experienced OSS developer productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
  Developers felt faster but were measured slower. Use for: "demand proof, don't trust feelings".
- [METR, February 2026 update](https://metr.org/blog/2026-02-24-uplift-update/)
  METR says the 2025 numbers are out of date. Cite it whenever the 2025 study is cited.
- [How Thorsten uses Amp (updated September 2026)](https://ampcode.com/docs/using-amp/thorsten)
  Source of the "irrefutable proof" quote. Most of the page is about Amp-only features, which the course skips.
- Per-tool instruction and transcript docs, checked 2026-10-14:
  - [Codex AGENTS.md guide](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
  - [opencode rules](https://opencode.ai/docs/rules/) and [opencode CLI](https://opencode.ai/docs/cli/)
  - [Amp AGENTS.md](https://ampcode.com/docs/customize/agents-md) and [Amp threads](https://ampcode.com/docs/threads)
  - pi docs in the earendil-works/pi repo (configuration.md, sessions.md)
  - [Claude Code commands](https://code.claude.com/docs/en/commands) for `/export`
  Use for the per-tool tables in lesson 3.
- [Chris Beams, How to Write a Git Commit Message](https://cbea.ms/git-commit/) and [git interpret-trailers](https://git-scm.com/docs/git-interpret-trailers)
  Commit messages that say why, and trailers such as `Session:`.
- [llmstxt.org](https://llmstxt.org/)
  The llms.txt format for documentation that language models can read.
- [DORA, State of AI-assisted Software Development 2025](https://dora.dev/research/2025/dora-report/)
  Which team practices determine whether AI helps or hurts.

### Systems model (light)
- ★ [MDN, Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
  The first read on request/response. Use for: Module 1.
- [RFC 9110, HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)
  The authority on methods, status codes and headers. Look things up here; don't read it cover to cover.
- [Everything curl, Daniel Stenberg](https://everything.curl.dev/)
  Use for: what each line of `curl -v` means.
- [High Performance Browser Networking, Ilya Grigorik](https://hpbn.co/)
  TCP/TLS/HTTP latency underneath. Optional depth; it predates HTTP/3.
- [The Illustrated TLS 1.3 Connection](https://tls13.xargs.org/)
  Optional, byte-level. Out of scope for required work.
- [Julia Evans, networking posts](https://jvns.ca/categories/networking/), [Mess With DNS](https://messwithdns.net/)
  Friendly intuition for DNS and TCP.
- [MDN, CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS), [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy), [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)
  Use for: Modules 1 and 4.

### Architecture, servers, security
- ★ [The Twelve-Factor App](https://12factor.net/)
  The backbone of Module 2. Annotate where it has aged (secrets, Heroku-era deploys).
- [Express, Using middleware](https://expressjs.com/en/guide/using-middleware/)
  The middleware pipeline model.
- ★ [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/): [Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html), [Authentication](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html), [SQL Injection](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html), [REST Security](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html), [CSRF](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html), [Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
  Use for: Modules 2 to 4.
- [OWASP Top 10 (web)](https://top10.owasp.org/)

### Build, buy or self-host
- [Michael Nygard, Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) and [adr.github.io](https://adr.github.io/)
  The original decision record format. Use for: lesson 8 and the template.
- [ky](https://github.com/sindresorhus/ky)
  A small fetch wrapper (version 2.2.0 on 2026-10-14, MIT licence). Use for: lessons 4 and 8.
- [MDN, Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
  fetch() doesn't reject on HTTP error statuses.
- Auth options for Module 4: [better-auth](https://www.better-auth.com/docs/installation), [Keycloak](https://www.keycloak.org/), [Clerk](https://clerk.com/), [Auth0](https://auth0.com/)
- Styling options for Module 5: [Tailwind CSS](https://tailwindcss.com/), and [StyleX](https://stylexjs.com/) as an optional comparison
- [public-apis](https://github.com/public-apis/public-apis)
  A list of public APIs with Auth and CORS columns. Use for: the lesson 9 project.
- [GitHub Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
  Free hosting for static sites. Use for: the lesson 9 deploy.

### Project spine
- GSG Code Academy coursebook: `../learning-code/curriculum/coursebook/`. Each module's project is a GSG week project brief, rebuilt agent-first.

## Wisdom (Communities)
- ★ [Claude Developers Discord](https://www.anthropic.com/discord)
  Official and large. Use for: agent workflow questions (not Claude-only in practice).
- [Hacker News](https://news.ycombinator.com/)
  Discussion threads on agent/engineering posts (Willison, Anthropic and Amp posts usually land here).
- [Lobsters](https://lobste.rs/)
  Smaller and more technical; invite-only for posting.
- [r/ExperiencedDevs](https://www.reddit.com/r/ExperiencedDevs/)
  Hiring and career reality checks. Activity not verifiable by tooling; check by hand.
- Mentor review: each module's project artefacts go to the mentor, like GSG's Friday code review.

## Gaps
- pi: not confirmed which file pi reads when AGENTS.md and CLAUDE.md are in the same directory. Codex: no export command found, and the session storage path wasn't confirmed.
- No dedicated JWT source yet (candidate: RFC 8725, unverified).
- Buy-vs-build sources for better-auth, Drizzle and Tailwind docs: to vet when Modules 3 to 5 are built.
