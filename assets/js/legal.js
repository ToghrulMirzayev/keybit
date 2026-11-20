/*
 * Renders privacy.html / terms.html: picks the document and language, fills the {{placeholders}}
 * from window.KEYBIT_LEGAL (config.js) and handles the language + theme switches.
 * Uses the same localStorage keys as the main site (keybit-lang, keybit-theme).
 */
(function () {
  'use strict';
  var root = document.getElementById('lg-doc');
  if (!root) return;

  var which = root.getAttribute('data-doc');
  var LANGS = ['en', 'ru', 'az'];
  var LOCALES = { en: 'en-GB', ru: 'ru-RU', az: 'az-AZ' };
  var lang = 'en';
  try { var saved = localStorage.getItem('keybit-lang'); if (saved && LANGS.indexOf(saved) > -1) lang = saved; } catch (e) {}

  var L = window.KEYBIT_LEGAL || {};
  var TODO = {
    company:         { en: '[legal entity name]',   ru: '[юридическое лицо]',   az: '[hüquqi şəxsin adı]' },
    address:         { en: '[registered address]',  ru: '[юридический адрес]',  az: '[hüquqi ünvan]' },
    regNumber:       { en: '[registration no.]',    ru: '[рег. номер]',         az: '[qeydiyyat nömrəsi]' },
    governingLaw:    { en: '[governing law]',       ru: '[применимое право]',   az: '[tətbiq olunan hüquq]' },
    jurisdiction:    { en: '[jurisdiction]',        ru: '[юрисдикция]',         az: '[yurisdiksiya]' },
    retentionMonths: { en: '[retention period]',    ru: '[срок хранения]',      az: '[saxlama müddəti]' },
    email:           { en: '[contact email]',       ru: '[email для связи]',    az: '[əlaqə emaili]' }
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Used when config.js leaves a value empty, so the pages never show blanks.
  var DEFAULTS = {
    company: 'KeyBit',
    governingLaw: { en: 'the laws of the Republic of Azerbaijan', ru: 'законодательство Азербайджанской Республики', az: 'Azərbaycan Respublikasının qanunvericiliyi' },
    jurisdiction: { en: 'Baku, Azerbaijan', ru: 'г. Баку, Азербайджан', az: 'Bakı, Azərbaycan' }
  };
  function value(key) {
    var v = L[key];
    if (v !== undefined && v !== null && String(v).trim() !== '') return String(v).trim();
    var d = DEFAULTS[key];
    return d ? (typeof d === 'string' ? d : d[lang]) : null;
  }
  function fill(html) {
    html = html.replace(/\[\[(\w+)\|([\s\S]*?)\]\]/g, function (_, key, text) { return value(key) === null ? '' : text; });
    return html.replace(/\{\{(\w+)\}\}/g, function (_, key) {
      var v = value(key);
      if (v !== null) return esc(v);
      var label = (TODO[key] && TODO[key][lang]) || ('[' + key + ']');
      return '<mark class="kb-todo">' + esc(label) + '</mark>';
    });
  }
  function t(key) {
    var all = window.KEYBIT_TRANSLATIONS || {};
    return (all[lang] && all[lang][key] !== undefined) ? all[lang][key] : ((all.en || {})[key] || '');
  }
  function formatDate() {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(L.effectiveDate || '');
    if (!m) return '';
    var d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
    return d.toLocaleDateString(LOCALES[lang] || 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  // Tell the developer (once) which legal details are still missing.
  var OPTIONAL = ['address', 'regNumber'];
  var missing = Object.keys(TODO).filter(function (k) { return OPTIONAL.indexOf(k) === -1 && value(k) === null; });
  if (missing.length && window.console) {
    console.warn('[KeyBit legal] Fill in these values in config.js (window.KEYBIT_LEGAL) before launch: ' + missing.join(', '));
  }

  function render() {
    var d = (window.KEYBIT_LEGAL_DOCS || {})[which];
    var c = d && (d[lang] || d.en);
    if (!c) return;

    var html = '<h1>' + esc(c.title) + '</h1>' +
      '<p class="lg-updated">' + esc(t('legal.updated')) + ': ' + esc(formatDate()) + '</p>';
    c.sections.forEach(function (s, i) {
      html += '<section><h2><span class="lg-num">' + (i < 9 ? '0' : '') + (i + 1) + '</span><span>' + esc(s.h) + '</span></h2>' + fill(s.html) + '</section>';
    });
    root.innerHTML = html;

    document.title = c.title + ' — KeyBit';
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      var v = t(n.getAttribute('data-i18n')); if (v) n.textContent = v;
    });
    document.querySelectorAll('.lg-langs button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.lg-langs button').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      try { localStorage.setItem('keybit-lang', lang); } catch (e) {}
      render();
    });
  });

  var toggle = document.getElementById('theme-toggle');
  if (toggle) toggle.addEventListener('click', function () {
    var html = document.documentElement;
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('keybit-theme', next); } catch (e) {}
  });

  render();
})();
