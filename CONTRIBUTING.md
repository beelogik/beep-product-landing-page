# Contributing

Thanks for your interest. This guide covers how we work on the project.
Please read it once before opening your pull request.

## Communication

If you choose to collaborate with us, be it in issues, PR descriptions, review
comments, or anywhere else, **please use your own words.**

This project recommends your own words in a concise way, even if you used AI-rewritten prose. 
That includes bug reports, feature requests, PR descriptions, and review comments. If you used
a tool to translate or spell-check, that's fine. If a model written your message, you must have
the ability to understand the text in full (every line) so that we can work together.

Why:

- We can't ask you follow-up questions if you're not sure about what you wrote.
- Verbose reports cost reviewer time and rarely contain the signal we need.
- A bug you care about is worth two sentences in your own words.

A short, imperfect, human-written report is worth more than a polished, model-
generated one. We'd rather ask a clarifying question than parse 600 words of
generated summary.

## Prerequisites

- [Bun](https://bun.sh/) (v1.4.1 or later)
- Git and a GitHub account
- An editor with Biome support, e.g., Zed Editor or VSCode (optional but recommended)

## Setup

1. **Fork** the repository on GitHub: `beelogik/beep-product-landing-page`

2. **Clone your fork:**
   ```bash
   git clone https://github.com/<your-username>/beep-product-landing-page.git
   cd beep-product-landing-page
   ```
   Remember to replace `<your-username>` with yours.

3. **Add upstream as a remote:**
   ```bash
   git remote add upstream https://github.com/beelogik/beep-product-landing-page.git
   ```

4. **Install dependencies:**
   ```bash
   bun install
   ```
   This also installs the Lefthook pre-commit hook automatically.

5. **Verify your setup:**
   ```bash
   bun run check
   bun run build
   ```

## Branch Workflow

We use a **fork + feature branch** workflow. Your fork's `main` is a read-only
mirror of upstream, never commit to it.

### Starting new work

Always branch from `upstream/main`, not from your fork's `main`:

```bash
git fetch upstream
git checkout -b feat/short-description upstream/main
```

This is the single most important habit. Branching from your fork's `main`
carries stale commits into your PR and makes review harder for everyone.

### Naming

Use the same prefix as the commit type (see [Commit Conventions](#commit-conventions)):

| Prefix       | Use for                                              |
| :----------- | :--------------------------------------------------- |
| `feat/`      | New features                                         |
| `fix/`       | Bug fixes                                            |
| `docs/`      | Documentation only                                   |
| `refactor/`  | Restructure without behavior change                  |
| `perf/`      | Performance improvements                             |
| `ci/`        | CI/CD and workflow changes                           |
| `chore/`     | Maintenance, tooling, config                         |
| `test/`      | Adding or fixing tests                               |

Examples: `feat/qr-checkout`, `fix/splash-timeout`, `ci/deploy`.

### Keeping your branch up to date

```bash
git fetch upstream
git rebase upstream/main
```

Prefer `rebase` over `merge` to keep history linear.

## Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Rules

- **Imperative mood:** `add`, not `added` or `adds`.
- **Lowercase** after the colon.
- **No period** at the end of the subject.
- **Try to fit subject within 72 characters.**
- **Body (if any):** explain *why*, not *what*. The `diff` already shows the what.
- **Footer:** reference issues (`Closes #12`, `Relates to #7`).

### Examples

```
feat(checkout): add QR code support

The SDK now exposes a QR generator. We render it inline when the
user selects a payment method, avoiding a redirect to a separate
page.

Closes #42
```

```
fix(splash): correct timeout for slow connections

The 3s minimum was cutting off the splash animation on 3G. Bumped to 5s.
```

```
ci(actions): update bun to 1.4.1 in setup-bun step
```

### What not to do

```
❌ Fixed stuff
❌ WIP
❌ Update files
❌ feat: this adds a new feature that lets users do X, Y, and Z (too long, splits in multiple commits or add a body)
```

## Code Style

Formatting and linting are handled by [Biome](https://biomejs.dev/). You don't
need to configure anything, the pre-commit hook runs Biome on staged files
before every commit.

### Manual runs

```bash
bun run check        # Lint + format check (dry-run, no writes)
bun run check:fix    # Auto-fix everything
```

## Pre-Push Checklist

Before you push, run all three locally. CI runs the same checks and will fail
if any of them break:

```bash
bun run check          # Biome lint + format
bun run build          # Production build
```

### Quick sanity checks

- [ ] No `console.log`, `debugger`, or commented-out code (unless for docs)
- [ ] No secrets, tokens, or `.env` files staged
- [ ] No unrelated formatting changes (Biome handles this)
- [ ] Commits are scoped to a single concern
- [ ] Branch is rebased on the latest `upstream/main`

If all three commands pass, push:

```bash
git push -u origin feat/your-branch
```

## Pull Request Process

1. **Open the PR** from `<your-username>:<branch>` into `beelogik:main`.

2. **Fill out the template.** The default template auto-loads. For bug fixes
   or features, append `?template=bug_fix.md` or `?template=feature.md` to the
   compare URL to load a specialized template.

3. **Keep the description short.** Two sentences in your own words beat a
   AI-generated 4 giant paragraphs. Include:
   - What changed (one sentence)
   - Why it changed (one sentence)
   - How you tested it

4. **Respond to review comments in your own words.** A short human reply is really
   a welcome one.

### What happens after you open a PR

- CI runs `bun run check`, `astro check`, and `bun run build`.
- CodeQL scans the Actions and JavaScript/TypeScript code for security issues.
- Branch protection requires both checks to pass before the PR can be merged.
- A maintainer reviews and either approves, requests changes, or asks a question.

## Reviewing

If you're reviewing a PR:

- **Read the description first.** If it reads like it was generated, ask the
  author for clarification to check understanding/motivation before reviewing the code.
- **Focus on behavior and correctness**, not style. Biome handles style.
- **Ask questions instead of issuing directives.** "What happens if X?" is better
  than "You should do Y."
- **Approve explicitly.** A green checkmark without a comment is ambiguous.

## Reporting Bugs

Before opening a bug report:

1. Search existing issues — someone may have already reported it.
2. Try to reproduce it on the latest `main`.

The structured issue form will ask for:

- What happened
- What you expected to happen
- Steps to reproduce
- Your environment

Write these in your own words. Short, specific, concrete. Attach a screenshot
or a console log if it helps. Don't paste an long AI summary.

## Security Issues

Do not open a public issue for security vulnerabilities. See
[`.github/SECURITY.md`](.github/SECURITY.md) for the private disclosure process.

## Code of Conduct

By participating, you agree to follow the
[Code of Conduct](.github/CODE_OF_CONDUCT.md). Be kind. Assume good faith.
Disagree about code, not about people.
