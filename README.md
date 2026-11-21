# keybit
outsource/outstaff company

Static site hosted on Vercel (`keybit.dev`). Vercel builds it with `node scripts/build.js` (see `vercel.json`).

## Legal & privacy

The site ships with a cookie consent banner, a Privacy & Cookie Policy (`privacy.html`) and Terms of Use
(`terms.html`) in English, Russian and Azerbaijani, links in the footer, and a consent checkbox on the contact form.

### Before launch — checklist

1. **Operator details** in `config.js` → `window.KEYBIT_LEGAL`. Everything is optional for now: empty values fall back to
   "KeyBit" as operator and Azerbaijan (Baku) as governing law and courts, and `address` / `regNumber` are simply left
   out. Once a legal entity exists, fill in `company`, `address`, `regNumber` (and change law/courts if needed).
2. **Confirm the retention period** (`retentionMonths`, default 24) matches how long you really keep enquiries.
3. **Have a lawyer review** the texts in `assets/js/legal-content.js`, especially the Russian and Azerbaijani wording.
   They are a solid baseline, not legal advice.
4. If you change the texts materially, update `effectiveDate` in `config.js`.

### How privacy works on this site

- Fonts (`assets/fonts`) and tech icons (`assets/css/icons.css`) are self-hosted, so visiting the site sends nothing to
  third parties. A Content-Security-Policy `<meta>` in each page enforces this.
- The only things stored in the browser are `keybit-lang`, `keybit-theme` and `keybit-consent` (listed in the policy).
- Analytics and marketing are **off** and not used.

### When you add a tool that touches visitors' data

Analytics, a form backend, a CRM, a chat widget, maps, embedded video, etc.:

1. Load it only after consent, e.g. `KeyBitConsent.whenGranted('analytics', () => { /* inject the script */ })`
   (see the header comment in `assets/js/consent.js`). Essential tools needed to answer a user's own request
   (such as the contact-form backend) need no consent but must be disclosed.
2. Allow its domain in the Content-Security-Policy `<meta>` in `index.html`, `privacy.html` and `terms.html`.
3. Describe it in `assets/js/legal-content.js` (data collected, purpose, provider, transfers, retention).
4. Bump `VERSION` in `assets/js/consent.js` if you add a new category or purpose, so everyone is asked again.

Note: the contact form currently does not send anything (`onsubmit="return false"`). When you connect a backend,
the consent checkbox is already in place; list the provider in the policy.

## Publishing and the "Coming soon" switch

Vercel deploys every push to `main` to production. What it publishes is decided by one Vercel **environment variable**:

| `COMING_SOON_BANNER` | Result |
|---|---|
| `false` | the full website is published |
| `true`, empty, not set, or anything else (even a typo) | only the "Coming soon" page is published |

While the banner is on, the real site is **not published at all** (not just hidden behind a banner), so nothing of it
can be read through "View source". Unknown addresses (`/privacy.html`, `/config.js`, ...) show the same placeholder.
The build is configured in `vercel.json` (Build Command `node scripts/build.js`, Output Directory `dist`).

### Launch (or go back to the placeholder)
1. Vercel → your project → **Settings → Environment Variables** → add/edit `COMING_SOON_BANNER`
   (`false` = live, `true` = placeholder). Choose the **Production** environment.
2. **Deployments → latest production deployment → ⋯ → Redeploy.** A changed variable only applies to *new*
   deployments, so a redeploy (or any push to `main`) is required. The change is live as soon as the build finishes.
3. Check the build log: it prints `Mode: LIVE (full site)` or `Mode: COMING SOON (placeholder only)`.

Preview deployments (branches / PRs) use the variable of the **Preview** environment; if it is not set they show the
placeholder. Set it to `false` for Preview too if you want to review the full site there.

### Try it locally
```
COMING_SOON_BANNER=false node scripts/build.js   # full site -> dist/
COMING_SOON_BANNER=true  node scripts/build.js   # placeholder only -> dist/
python3 -m http.server -d dist 8000
```
`scripts/build.js` copies only an allow-list of files (add new site files there) and fails the build if the output is not
what the mode promises. Opening `index.html` directly shows the full site (no banner) for development.

Note: while the repository is public, the source code of the full site is visible on GitHub even when the placeholder is
what visitors get.
