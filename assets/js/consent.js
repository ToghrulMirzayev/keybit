/*
 * KeyBit cookie consent manager.
 *
 * Rules this file enforces:
 *  - Nothing optional runs until the visitor opts in (default = everything off).
 *  - "Reject all" is as easy as "Accept all"; there is no cookie wall (the site works either way).
 *  - The choice is stored with a date and a version; it expires after 12 months and whenever VERSION
 *    is bumped (do that if you add a category or a new tool), so visitors are asked again.
 *  - The choice can be changed or withdrawn at any time from the footer ("Cookie settings").
 *
 * How to add analytics / marketing later (example):
 *
 *   KeyBitConsent.whenGranted('analytics', function () {
 *     var s = document.createElement('script');
 *     s.src = 'https://analytics.example.com/script.js';
 *     s.defer = true;
 *     document.head.appendChild(s);
 *   });
 *
 * Also allow that domain in the Content-Security-Policy <meta> in index.html, list the tool in the
 * Privacy Policy (assets/js/legal-content.js) and bump VERSION below.
 * If the visitor withdraws consent, the page reloads so the tool stops running.
 */
(function () {
  'use strict';
  if (window.KeyBitConsent) return;

  var KEY = 'keybit-consent';
  var VERSION = 1;
  var MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
  var CATS = ['analytics', 'marketing'];

  var state = { decided: false, analytics: false, marketing: false };
  var waiting = [];
  var banner = null, overlay = null, modal = null, lastFocus = null, prevOverflow = '';

  /* ---------- storage ---------- */
  function load() {
    try {
      var r = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (r && r.v === VERSION && typeof r.ts === 'number' && Date.now() - r.ts < MAX_AGE_MS) {
        state = { decided: true, analytics: r.analytics === true, marketing: r.marketing === true };
      }
    } catch (e) { /* storage blocked: the choice simply lasts for this page view */ }
  }

  function save(choice) {
    var before = { analytics: state.analytics, marketing: state.marketing };
    state = { decided: true, analytics: !!choice.analytics, marketing: !!choice.marketing };
    try {
      localStorage.setItem(KEY, JSON.stringify({ v: VERSION, ts: Date.now(), analytics: state.analytics, marketing: state.marketing }));
    } catch (e) {}
    var withdrawn = CATS.some(function (c) { return before[c] && !state[c]; });
    if (withdrawn) { location.reload(); return; }
    flush();
  }

  function flush() {
    waiting = waiting.filter(function (w) {
      if (!state[w.cat]) return true;
      try { w.fn(); } catch (e) { if (window.console) console.error(e); }
      return false;
    });
  }

  /* ---------- i18n (reads the same dictionary as the site) ---------- */
  function dict() {
    var all = window.KEYBIT_TRANSLATIONS || {};
    var l = document.documentElement.getAttribute('lang') || 'en';
    return { cur: all[l] || {}, en: all.en || {} };
  }
  function t(key) {
    var d = dict();
    return d.cur[key] !== undefined ? d.cur[key] : d.en[key];
  }
  function render(root) {
    if (!root) return;
    root.querySelectorAll('[data-i18n]').forEach(function (n) {
      var v = t(n.getAttribute('data-i18n')); if (v !== undefined) n.textContent = v;
    });
    root.querySelectorAll('[data-i18n-html]').forEach(function (n) {
      var v = t(n.getAttribute('data-i18n-html')); if (v !== undefined) n.innerHTML = v;
    });
    root.querySelectorAll('[data-i18n-aria]').forEach(function (n) {
      var v = t(n.getAttribute('data-i18n-aria')); if (v !== undefined) n.setAttribute('aria-label', v);
    });
  }
  function renderAll() { render(banner); render(overlay); }

  /* ---------- UI ---------- */
  function build() {
    banner = document.createElement('div');
    banner.className = 'kb-consent';
    banner.id = 'kb-consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-labelledby', 'kb-c-title');
    banner.hidden = true;
    banner.innerHTML =
      '<div class="kb-card">' +
        '<div class="kb-title" id="kb-c-title" data-i18n="consent.title"></div>' +
        '<p class="kb-text" data-i18n-html="consent.desc.html"></p>' +
        '<div class="kb-actions">' +
          '<button type="button" class="kb-btn kb-btn-solid" data-kb="reject" data-i18n="consent.reject"></button>' +
          '<button type="button" class="kb-btn kb-btn-ghost" data-kb="customize" data-i18n="consent.customize"></button>' +
          '<button type="button" class="kb-btn kb-btn-solid" data-kb="accept" data-i18n="consent.accept"></button>' +
        '</div>' +
      '</div>';

    overlay = document.createElement('div');
    overlay.className = 'kb-overlay';
    overlay.id = 'kb-prefs';
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="kb-modal" role="dialog" aria-modal="true" aria-labelledby="kb-p-title" tabindex="-1">' +
        '<button type="button" class="kb-x" data-kb="close" data-i18n-aria="consent.close">×</button>' +
        '<div class="kb-title" id="kb-p-title" data-i18n="consent.prefs.title"></div>' +
        '<p class="kb-text" data-i18n="consent.prefs.desc"></p>' +
        '<div class="kb-cat">' +
          '<div class="kb-cat-head"><span class="kb-cat-name" data-i18n="consent.cat.necessary.title"></span><span class="kb-always" data-i18n="consent.always"></span></div>' +
          '<p data-i18n="consent.cat.necessary.desc"></p>' +
        '</div>' +
        catHtml('analytics') + catHtml('marketing') +
        '<div class="kb-actions">' +
          '<button type="button" class="kb-btn kb-btn-solid" data-kb="reject" data-i18n="consent.reject"></button>' +
          '<button type="button" class="kb-btn kb-btn-ghost" data-kb="save" data-i18n="consent.save"></button>' +
          '<button type="button" class="kb-btn kb-btn-solid" data-kb="accept" data-i18n="consent.accept"></button>' +
        '</div>' +
      '</div>';
    modal = overlay.firstChild;

    document.body.appendChild(banner);
    document.body.appendChild(overlay);
    renderAll();
  }

  function catHtml(cat) {
    return '<div class="kb-cat">' +
      '<div class="kb-cat-head">' +
        '<span class="kb-cat-name" id="kb-n-' + cat + '" data-i18n="consent.cat.' + cat + '.title"></span>' +
        '<label class="kb-switch"><input type="checkbox" id="kb-' + cat + '" aria-labelledby="kb-n-' + cat + '"><span class="kb-slider"></span></label>' +
      '</div>' +
      '<p data-i18n="consent.cat.' + cat + '.desc"></p>' +
    '</div>';
  }

  function showBanner(show) { if (banner) banner.hidden = !show; }

  function openPrefs() {
    if (!overlay) return;
    lastFocus = document.activeElement;
    CATS.forEach(function (c) { overlay.querySelector('#kb-' + c).checked = !!state[c]; });
    overlay.hidden = false;
    prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modal.focus();
  }

  function closePrefs() {
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    document.body.style.overflow = prevOverflow;
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }

  function decide(choice) {
    closePrefs();
    showBanner(false);
    save(choice);
  }

  function onClick(e) {
    var opener = e.target.closest && e.target.closest('[data-kb-open]');
    if (opener) { e.preventDefault(); openPrefs(); return; }
    var btn = e.target.closest && e.target.closest('[data-kb]');
    if (!btn) {
      if (e.target === overlay) closePrefs();   // click on the dimmed background
      return;
    }
    switch (btn.getAttribute('data-kb')) {
      case 'accept':    decide({ analytics: true, marketing: true }); break;
      case 'reject':    decide({ analytics: false, marketing: false }); break;
      case 'customize': openPrefs(); break;
      case 'close':     closePrefs(); break;
      case 'save':
        decide({ analytics: overlay.querySelector('#kb-analytics').checked, marketing: overlay.querySelector('#kb-marketing').checked });
        break;
    }
  }

  function onKey(e) {
    if (!overlay || overlay.hidden) return;
    if (e.key === 'Escape') { closePrefs(); return; }
    if (e.key !== 'Tab') return;
    var f = modal.querySelectorAll('button, input, a[href]');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === modal)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function init() {
    load();
    build();
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    // keep the banner in the visitor's language when they switch it
    new MutationObserver(renderAll).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    if (!state.decided) showBanner(true);
    flush();
  }

  /* ---------- public API ---------- */
  window.KeyBitConsent = {
    /** true only if the visitor opted in to this category ('analytics' | 'marketing') */
    granted: function (cat) { return state[cat] === true; },
    /** run fn now if consent is already given, otherwise as soon as it is given. Never runs without consent. */
    whenGranted: function (cat, fn) {
      if (CATS.indexOf(cat) === -1) throw new Error('Unknown consent category: ' + cat);
      waiting.push({ cat: cat, fn: fn });
      flush();
    },
    /** open the preferences dialog (used by the "Cookie settings" link) */
    open: openPrefs
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
