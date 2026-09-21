# Beep Product Landing Page

**Beep** is a cross-border Pix payments (BRL → RMB) for LATAM ⇄ China.

## Prerequisites

- [Bun](https://bun.sh/) (v1.4.1 or later)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/beelogik/beep-product-landing-page.git
   cd beep-product-landing-page
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```
   The development server will be available at `http://localhost:4321`.

## Available Scripts

| Command             | Action                                    |
| :------------------ | :---------------------------------------- |
| `bun run dev`       | Starts the local dev server with HMR      |
| `bun run build`     | Builds the production site to `./dist/`   |
| `bun run preview`   | Previews the production build locally     |
| `bun run check`     | Runs Biome lint + format check (no writes)|
| `bun run check:fix` | Auto-fixes Biome issues                   |

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static output)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [Basecoat UI](https://basecoatui.com/)
- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Language:** TypeScript
- **Formatter & Linter:** [Biome](https://biomejs.dev/)
- **CI/CD:** GitHub Actions + Cloudflare deploy

## Project Structure

```text
beep-product-landing-page/
│
├── .github/                          # GitHub-specific configuration
│   ├── CODEOWNERS                    # Default reviewers for PRs
│   ├── SECURITY.md                   # Vulnerability disclosure policy
│   ├── PULL_REQUEST_TEMPLATE.md      # Default PR template (auto-loads)
│   ├── PULL_REQUEST_TEMPLATE/        # Specialized PR templates (?template=…)
│   ├── ISSUE_TEMPLATE/               # Structured issue forms
│   └── workflows/
│       ├── ci.yml                    # Build, Biome check, artifact upload
│       └── codeql.yml                # Security scanning (Actions + JS/TS)
│
├── public/                           # Static assets served at the site root
├── src/                              # Application source
│   ├── assets/                       # Local files processed by Vite
│   ├── components/                   # Reusable Astro components
│   ├── data/
│   │   └── site.ts                   # Site content, pricing, FAQs
│   ├── layouts/
│   │   └── Base.astro                # Root HTML shell, theme tokens
│   ├── lib/
│   │   └── structuredData.ts         # JSON-LD schema builders
│   ├── pages/                        # File-based routing
│   │   └── index.astro               # Home (/)
│   └── styles/
│       └── global.css                # Tailwind + Basecoat imports, theme tokens
│
├── .editorconfig                     # Cross-editor indentation, LF, trailing WS
├── .gitattributes                    # Enforces cross-platform LF line endings
├── .gitignore
├── astro.config.mjs                  # Astro config (sitemap, Tailwind Vite plugin)
├── biome.json                        # Biome formatter + linter definitions
├── lefthook.yml                      # Pre-commit hook: Biome on staged files
├── package.json
├── tsconfig.json
├── bun.lock
│
├── CONTRIBUTING.md                   # Branch workflow, commit conventions
├── LICENSE
└── README.md                         # This file
```

## Styling & UI

Tailwind CSS and Basecoat UI are installed as **local npm dependencies** and
wired into the build via `astro.config.mjs` using `@tailwindcss/vite`. There are
no CDN calls, no runtime fetching, and no browser-side CSS compilation.

Global styles, theme tokens, and Basecoat imports live in `src/styles/global.css`.
The Basecoat interactive JavaScript is bundled from the package's ESM entry
point in `src/layouts/Base.astro`:

```astro
<script>
  import 'basecoat-css/all';
</script>
```

### Verifying the build

```bash
bun install
bun run build
```

A successful build produces `dist/index.html`, `dist/_astro/`, and
`dist/sitemap-index.xml`.

## Code Quality

Formatting and linting are handled by **Biome**, driven by a single `biome.json`.
The same binary is used by:

- The **Lefthook** pre-commit hook — auto-fixes staged files before every commit
- Your editor — via `.zed/settings.json` pointing at `node_modules/.bin/biome`
- The CI pipeline — runs `bun run check` on every push and PR

This guarantees formatting never drifts between local and CI.

### Pre-commit hook

Lefthook installs automatically during `bun install`. To reinstall manually:

```bash
bun x lefthook install
```

## CI/CD

Two GitHub Actions workflows run on every push and pull request targeting `main`.

### Build & Type Check — `.github/workflows/ci.yml`

Runs on **`ubuntu-26.04-arm`**:

1. Installs dependencies with Bun (`bun install --frozen-lockfile`).
2. Runs Biome check (`bun run check`).
3. Runs `astro check` for TypeScript and Astro diagnostics.
4. Builds the production site (`bun run build`).
5. Uploads `dist/` as a downloadable artifact (retained 7 days).

> Uses least-privilege token permissions (`contents: read`, `actions: write`).

### Security Analysis — `.github/workflows/codeql.yml`

Runs on **`ubuntu-latest`** (x86, per CodeQL's support matrix) and analyzes:

| Language                | What it scans                                     |
| :---------------------- | :------------------------------------------------ |
| `actions`               | Workflow YAML (script injection, untrusted input) |
| `javascript-typescript` | Astro, TypeScript, and library code               |

Triggers on:
- Every push to `main`
- Every PR targeting `main`
- Weekly schedule (Friday)

Results appear in the repository's **Security → Code scanning** tab.

### Branch Ruleset

The `main` branch is protected by:

- PR required before merging (squash merges only)
- Status checks must pass — `CI / Build (ARM64)` and `CodeQL`
- Branches must be up to date before merging
- Force pushes and branch deletion blocked
- Code scanning results required (CodeQL, High severity or higher)

## Contributing

We use a **fork + feature branch** workflow with
[Conventional Commits](https://www.conventionalcommits.org/). Before opening
your first PR, please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) — it covers:

- Setup and remote configuration
- Branch naming and workflow (`feat/`, `fix/`, `docs/`, …)
- Commit message format and examples
- The pre-push checklist
- PR process and review expectations

Please, try to write in your own words. A short, human reply beats a long AI-generated one.

## Security

Do not open a public issue for security vulnerabilities. See
[`.github/SECURITY.md`](.github/SECURITY.md) for the private disclosure process.

## Code Owners

Code ownership is defined in [`.github/CODEOWNERS`](./.github/CODEOWNERS).
The default owner for all files is the **`@beelogik/beep-core-maintainers`**
team. Specific teams or users can be assigned by editing that file.

## License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE)
for details.
