# Coding Standards — The Law

> These are non-negotiable. Violation of any is unacceptable.

---

## The Core Mandates

1. **No band-aids, no shortcuts, no hardcoding, no cheap corner-cutting, no stubs**
2. **Ethical, topmost level of coding and structural integrity. Modular as fuck.**
3. **No MVP-level bullshit** — Anwesh WILL audit your code. Every hardcoded value, every TODO comment, every placeholder will be found.
4. **Type safety everywhere** — Generated DB types, no `as any` casts
5. **Production-grade or nothing** — Write code like it's going into a $40M platform

## Architecture Principles

- **Nothing hardcoded** — All config flows from UI → database → backend
- **Modular files** — Every file is a self-contained module. No god files. No spaghetti.
- **Every feature can evolve independently** — Loose coupling, clear interfaces
- **Audit everything** — Every admin action gets logged
- **Error handling is mandatory** — No silent failures. No swallowed exceptions.
- **Preserve existing comments and docstrings** — Don't delete documentation you didn't write

## Write Patterns

- **Small chunks** — Never write 200+ lines in a single tool call. Tools timeout with large writes.
- **Validate before deploying** — Build must succeed with ZERO errors before restart
- **Match existing patterns** — Read the codebase before inventing new conventions
- **No unnecessary refactoring** — Don't restructure working code unless asked

## Per-Language Standards

### TypeScript
- Strict mode always
- No `as any` — ever
- Proper error types, not generic `Error`
- Async/await, no raw promises unless necessary
- Named exports over default exports

### Rust
- No `unwrap()` in production code — use proper error handling
- `Result<T, E>` everywhere
- Derive macros for serialization
- Clippy-clean code

### React / Frontend
- Functional components only
- Custom hooks for shared logic
- No inline styles — CSS modules or styled system
- Semantic HTML, proper heading hierarchy
- Unique IDs on all interactive elements

---

*Last updated: 2026-04-19*
