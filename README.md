# keybit
outsource/outstaff company

Static site hosted on Cloudflare Workers (static assets), served straight from the repository root. No build step except the tiny banner script below.

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

## The "Coming soon" banner switch

The overlay is controlled by one Cloudflare **build variable**, `COMING_SOON_BANNER`:

| `COMING_SOON_BANNER` | Result |
|---|---|
| `false` | banner off, the full site is visible |
| `true`, empty, not set, or anything else (even a typo) | banner on, covers the whole site |

Cloudflare: Workers & Pages → `keybit` → **Settings → Build**:
- **Build command:** `node scripts/apply-banner.js` (writes the value into `config.js` during the build)
- **Deploy command:** `npx wrangler deploy` (unchanged)
- **Build variables:** `COMING_SOON_BANNER` = `false` or `true`

Changing a variable does not redeploy by itself: Deployments → **Retry build** on the latest production build
(or push to `main`). The build log prints `Coming Soon banner: ON` or `OFF`.

Manual deploy:
```
COMING_SOON_BANNER=false node scripts/apply-banner.js && npx wrangler deploy
git checkout config.js    # undo the local rewrite
```

You can also edit `comingSoonEnabled` in `config.js` by hand and commit.

Note: the banner is drawn in the browser on top of the page. It does not hide the page source, and the repository
is public anyway. Do not rely on it for confidential content.
