# yoann.gini.me

Professional website for **Yoann Gini** — entreprise individuelle (sole proprietorship)
presenting two activities under one SIRET:

- **IT consulting** (primary) — Apple, security & mobility expert (macOS/iOS, MDM/IDP,
  directory services, reverse engineering), with a conference & open-source portfolio.
- **ULM instruction** (occasional) — multiaxe flight instructor, instructor of instructors,
  competition course director and flight director for air shows.

Bilingual (French default, English under `/en/`), fully static, no cookies and no trackers.

## Tech stack

- [Astro](https://astro.build/) (static output, TypeScript)
- Built-in Astro i18n routing (`fr` at the root, `en` under `/en/`)
- `@astrojs/sitemap` for `sitemap-index.xml`
- Custom CSS design system (system fonts only — no external requests)
- Hosted on **GitHub Pages** (custom domain `yoann.gini.me`)

## Local development

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:4321)
npm run build      # astro check + astro build -> ./dist
npm run preview    # serve the production build locally
npm run check      # type/content diagnostics only
npm run gen:og     # regenerate public/og.png (social share image)
```

Requires Node 22+ (Astro 7 needs Node >=22.12.0).

## Project structure

```
public/            static assets (CNAME, robots.txt, favicon.svg, og.png, .nojekyll)
scripts/
  generate-og.mjs  builds the 1200x630 Open Graph image
src/
  data/            talks.ts, projects.ts  (bilingual, edit these to update the portfolio)
  i18n/ui.ts       shared UI strings + social links + contact email
  lib/
    paths.ts       routes, locales, and the withBase() link helper
    jsonld.ts      Person + ProfessionalService structured data
  components/       Header, Footer, Section, ActivityCard, Timeline, TalksList, ProjectCard
  layouts/Layout.astro   <head> SEO (canonical, hreflang, OG, JSON-LD)
  pages/           index, conseil-informatique, ulm, mentions-legales (+ en/ equivalents), 404
```

## Editing content

- **Talks / projects**: edit `src/data/talks.ts` and `src/data/projects.ts`. Each entry has
  `fr` and `en` fields.
- **Nav / footer / labels**: `src/i18n/ui.ts`.
- **Contact email & social links**: `src/i18n/ui.ts` (`CONTACT_EMAIL`, `SOCIAL_LINKS`).
- **Legal identifiers**: `src/pages/mentions-legales.astro` and `src/pages/en/legal-notice.astro`.

## Deployment (GitHub Pages, PR-gated with previews)

`main` is protected: every change lands via a pull request, each PR gets a live preview, and
merging to `main` publishes production.

Two workflows:

- **`.github/workflows/deploy.yml`** — on push to `main` (or manual dispatch): builds and deploys
  `dist/` to the **root of the `gh-pages` branch** via `peaceiris/actions-gh-pages`
  (`keep_files: true`, so open PR previews are preserved).
- **`.github/workflows/pr-preview.yml`** — on pull requests: runs `astro check` + a build with
  `PREVIEW_BASE=/pr-preview/pr-<n>/`, then `rossjrw/pr-preview-action` deploys the preview to
  `pr-preview/pr-<n>/` on `gh-pages`, comments the preview URL
  (`https://yoann.gini.me/pr-preview/pr-<n>/`) on the PR, and removes it when the PR closes.

> Preview deployments are publicly reachable on the live domain and are excluded from search
> engines via `robots.txt` (`Disallow: /pr-preview/`).

### One-time repository setup

1. **Workflow permissions** — Settings → Actions → General → Workflow permissions:
   select **Read and write permissions** (lets the actions write to `gh-pages`).
2. **Pages source** — Settings → Pages → Build and deployment → Source:
   **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**.
   (Run the production deploy at least once first, so the `gh-pages` branch and its `CNAME` exist.)
3. **Custom domain / DNS** — at your DNS provider for `gini.me`, add a single record:

   | Type  | Name    | Value              |
   | ----- | ------- | ------------------ |
   | CNAME | `yoann` | `ygini.github.io.` |

   The `public/CNAME` file already pins the domain to `yoann.gini.me`. A subdomain uses a
   `CNAME` record (not apex `A`/`AAAA` records).

4. **Branch protection** — require PRs and a passing preview build before merging `main`.
   Via the GitHub CLI:

   ```bash
   gh api -X PUT repos/ygini/website/branches/main/protection \
     -H "Accept: application/vnd.github+json" \
     -f "required_status_checks[strict]=true" \
     -f "required_status_checks[contexts][]=preview" \
     -F "enforce_admins=true" \
     -F "required_pull_request_reviews[required_approving_review_count]=0" \
     -F "restrictions=null"
   ```

   (Adjust the repository slug and the status-check context name to match the PR Preview job.
   `enforce_admins=true` means even the owner merges through PRs.)

## Privacy

The site is fully static: no cookies, no analytics, no third-party requests (system fonts only),
so no cookie banner is needed. See the mentions légales / legal notice page.
