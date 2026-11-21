# keybit
outsource/outstaff company

Static site hosted on Cloudflare Workers (static assets). `node scripts/build.js` builds `dist/`, `wrangler.jsonc` uploads it.

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

What gets published is decided by one **build variable**, `COMING_SOON_BANNER`:

| `COMING_SOON_BANNER` | Result |
|---|---|
| `false` | the full website is published |
| `true`, empty, not set, or anything else (even a typo) | only the "Coming soon" page is published |

While the banner is on, the real site is **not published at all** (not just hidden behind a banner), so nothing of it
can be read through "View source". Unknown addresses (`/privacy.html`, `/config.js`, ...) show the same placeholder.

### Cloudflare setup (Git-connected builds)
Workers & Pages → `keybit` → **Settings → Build**:
- **Build command:** `node scripts/build.js`
- **Deploy command:** `npx wrangler deploy` (the production branch). Non-production branches keep `npx wrangler versions upload`.
- **Root directory:** `/`
- **Build variables:** `COMING_SOON_BANNER` = `false` (live) or `true` (placeholder).

Changing the variable does not deploy by itself: open Deployments → **Retry build** on the latest production build
(or push to `main`). The build log prints `Mode: LIVE (full site)` or `Mode: COMING SOON (placeholder only)`.

### Manual deploy with wrangler
```
npx wrangler login    # once
COMING_SOON_BANNER=false node scripts/build.js && npx wrangler deploy   # full site
COMING_SOON_BANNER=true  node scripts/build.js && npx wrangler deploy   # placeholder only
```

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
