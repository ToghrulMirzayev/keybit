#!/usr/bin/env node
/*
 * Sets the Coming Soon banner switch in config.js from the build variable COMING_SOON_BANNER.
 *
 *   COMING_SOON_BANNER=false  -> banner OFF, the full site is visible
 *   anything else / not set   -> banner ON  (safe default, also for typos)
 *
 * On Cloudflare this is the Build command:  node scripts/apply-banner.js
 * Locally:  COMING_SOON_BANNER=false node scripts/apply-banner.js   (then `git checkout config.js` to undo)
 *
 * Note: the banner is an overlay drawn in the browser. It covers the page but does not hide its source.
 * No dependencies, Node 14+.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '..', 'config.js');
const raw = process.env.COMING_SOON_BANNER;
const bannerOff = typeof raw === 'string' && raw.trim().toLowerCase() === 'false';
const enabled = !bannerOff;

const src = fs.readFileSync(file, 'utf8');
const pattern = /(comingSoonEnabled\s*:\s*)(true|false)/;
if (!pattern.test(src)) {
  console.error('ERROR: could not find "comingSoonEnabled: true|false" in config.js');
  process.exit(1);
}
fs.writeFileSync(file, src.replace(pattern, `$1${enabled}`));

const known = raw === undefined || ['true', 'false'].includes(String(raw).trim().toLowerCase());
if (!known) console.warn(`WARNING: COMING_SOON_BANNER=${JSON.stringify(raw)} is not "true" or "false"; treating it as "true".`);
console.log(`Coming Soon banner: ${enabled ? 'ON (site is covered)' : 'OFF (full site visible)'}   COMING_SOON_BANNER=${raw === undefined ? '(not set)' : JSON.stringify(raw)}`);
