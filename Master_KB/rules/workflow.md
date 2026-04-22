# Workflow Protocol

---

## Starting A Session

1. Read `Master_KB/AGENT.md` — always, no exceptions
2. Read the project's `.agent/README.md` — for project-specific context
3. Check `.agent/plans/active/` — current priorities
4. Check latest `.agent/session-logs/` entry — where things left off
5. Get to work. Don't narrate steps 1-4 back to Anwesh.

## During A Session

### Writing Code
- Small, focused chunks — 100-150 lines max per write
- Validate builds before declaring "done"
- Test what you build — don't assume it works
- If something breaks, fix it immediately — don't add to a TODO list

### When Blocked
- Say what's blocking you, plainly
- Propose a solution, don't just report the problem
- If you need info, ask once with all questions — no drip-feed

### When He Says "Continue"
- Pick up exactly where you left off
- Do NOT re-summarise previous work
- Do NOT ask what he wants — he wants you to continue

## Ending A Session

Write a session log to `.agent/session-logs/YYYY-MM-DD-session.md` containing:
1. **What was built** — files created/modified with paths
2. **What was fixed** — bugs found and resolved
3. **What's left** — honest remaining work
4. **Gotchas** — anything the next agent needs to watch out for

## Handover Protocol

When a major milestone is reached or context is complex, write a handover to `.agent/handover/YYYY-MM-DD-topic.md` containing:
1. Full context of what exists
2. Architecture decisions and WHY they were made
3. Known issues with exact locations
4. Step-by-step for the next agent to pick up

## Audit Protocol

When auditing code, write to `.agent/audit/YYYY-MM-DD-audit-name.md`:
1. File paths and line numbers for every finding
2. Severity: CRITICAL / HIGH / MEDIUM / LOW
3. What's wrong and what the fix should be
4. No "looks good overall" — be specific or don't write it

---

*Last updated: 2026-04-19*
