#!/usr/bin/env node
/*
 * Builds the folder that gets published (dist/).
 *
 *   COMING_SOON_BANNER=false   -> the full website is published
 *   anything else / not set    -> ONLY the "Coming soon" page is published
 *
 * Why the banner is decided at build time and not in the browser:
 *   A banner drawn on top of the real site hides nothing. The real pages, texts and scripts are still
 *   sent to every visitor and are one "View source" away. Here, while the banner is on, the real
 *   site is simply not part of what gets published.
 *
 * Safety rules built into this script:
 *   1. Fail closed: only the exact value "false" (any letter case, spaces ignored) publishes the site.
 *      Unset, empty, "true", or a typo such as "flase" all keep the Coming soon page.
 *   2. Allow-list copy: only the listed files are published, never the whole repository
 *      (so scripts, .git, notes, .env files and the like can never end up on the website).
 *   3. Self-check: the build fails if the result is not what the mode promises.
 *
 * On Vercel this runs as the Build Command (see vercel.json) and the Output Directory is dist/.
 * COMING_SOON_BANNER is a Vercel environment variable (Project -> Settings -> Environment Variables).
 *
 * Usage:  COMING_SOON_BANNER=false node scripts/build.js
 * No dependencies, Node 18+.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// What the full site consists of. Add new files/folders here when the site grows.
const LIVE_FILES = ['index.html', 'privacy.html', 'terms.html', 'config.js', 'translations.js'];
const LIVE_DIRS = ['assets'];

// What the Coming soon page needs: the page itself and the self-hosted fonts.
const SOON_PAGE = 'coming-soon.html';
const SOON_DIRS = ['assets/fonts'];
const SOON_FILES = ['assets/css/fonts.css'];

const raw = process.env.COMING_SOON_BANNER;
const live = typeof raw === 'string' && raw.trim().toLowerCase() === 'false';

function note(level, msg) {
  console.log(`${level.toUpperCase()}: ${msg}`);   // shows up in the Vercel build log
}
function fail(msg) { note('error', msg); process.exit(1); }

function copy(rel, destRel) {
  const src = path.join(ROOT, rel);
  if (!fs.existsSync(src)) fail(`Missing file or folder: ${rel}`);
  const dest = path.join(DIST, destRel || rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

function walk(dir, base = dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p, base) : [path.relative(base, p).split(path.sep).join('/')];
  });
}

// ---------------------------------------------------------------- build
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

if (live) {
  LIVE_FILES.forEach(f => copy(f));
  LIVE_DIRS.forEach(d => copy(d));
} else {
  copy(SOON_PAGE, 'index.html');
  copy(SOON_PAGE, '404.html');          // any other address shows the same page instead of a GitHub 404
  SOON_FILES.forEach(f => copy(f));
  SOON_DIRS.forEach(d => copy(d));
  if (raw !== undefined && raw.trim() !== '' && raw.trim().toLowerCase() !== 'true') {
    note('warning', `COMING_SOON_BANNER="${raw}" is not "true" or "false". Treating it as "true" (Coming soon page stays up).`);
  }
}

// ---------------------------------------------------------------- self-check
const files = walk(DIST);
const read = f => fs.readFileSync(path.join(DIST, f), 'utf8');

if (live) {
  if (!files.includes('index.html') || !read('index.html').includes('id="hero"')) fail('Live build has no real index.html.');
  if (files.includes('404.html') || read('index.html').includes('coming-soon')) fail('Live build still contains the Coming soon page.');
} else {
  const allowed = f => f === 'index.html' || f === '404.html' || f === 'assets/css/fonts.css' || /^assets\/fonts\/[\w.-]+\.woff2$/.test(f);
  const extra = files.filter(f => !allowed(f));
  if (extra.length) fail('Coming soon build contains files it must not publish: ' + extra.join(', '));
  const html = read('index.html');
  // fingerprints of the real site: none of them may appear in the placeholder
  const leaks = ['id="hero"', 'KEYBIT_TRANSLATIONS', 'data-i18n="hero', 'privacy.html'].filter(s => html.includes(s));
  if (leaks.length) fail('Coming soon page contains parts of the real site: ' + leaks.join(', '));
}

const kb = files.reduce((n, f) => n + fs.statSync(path.join(DIST, f)).size, 0) / 1024;
console.log(`\nMode: ${live ? 'LIVE (full site)' : 'COMING SOON (placeholder only)'}   COMING_SOON_BANNER=${raw === undefined ? '(not set)' : JSON.stringify(raw)}`);
console.log(`dist/: ${files.length} files, ${kb.toFixed(0)} KB`);
