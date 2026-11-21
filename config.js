// KeyBit feature flags
//
// Coming Soon overlay: true = overlay ON (covers the whole site), false = overlay OFF (full site visible).
//
// You normally do NOT edit this by hand. On Cloudflare the value is set at build time from the
// build variable COMING_SOON_BANNER (true / false) by `node scripts/apply-banner.js`.
// Editing it here still works too: commit and the site updates on the next deploy.

window.KEYBIT_FLAGS = {
    comingSoonEnabled: true
  };

// Legal details used by privacy.html and terms.html.
//
// Empty values fall back to defaults: company = "KeyBit", governing law and courts = Azerbaijan (Baku).
// Fill them in once you have a legal entity. Have a lawyer review the texts in assets/js/legal-content.js.
window.KEYBIT_LEGAL = {
    company: '',                 // who runs the site. Default: "KeyBit". Later put the legal entity name (e.g. "KeyBit LLC")
    address: '',                 // OPTIONAL. Registered address; leave empty to omit it (then email is the only contact)
    regNumber: '',               // OPTIONAL. Company registration / tax number; leave empty if you have none
    email: 'hello@keybit.dev',   // address for privacy requests (shown in the policy)
    governingLaw: '',            // OPTIONAL. Default: the laws of the Republic of Azerbaijan
    jurisdiction: '',            // OPTIONAL. Default: Baku, Azerbaijan (courts for disputes)
    retentionMonths: 24,         // how long enquiries that lead to no contract are kept. Must match reality!
    effectiveDate: '2026-11-20'  // date of the latest change to the legal texts (YYYY-MM-DD)
  };