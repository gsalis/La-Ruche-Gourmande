// ============================================
// LA RUCHE GOURMANDE — lang-switcher.js (Phase 3)
// Sélecteur de langue + mémorisation localStorage + suggestion douce.
//
// Architecture : chaque langue vit dans son propre dossier (/de/, /en/, /pt/, /it/)
// avec les MÊMES noms de fichiers qu'à la racine (français, langue par défaut).
// Pour ajouter une langue : créer le dossier + traduire les pages, sans toucher
// à ce script ni aux autres pages.
// ============================================

const LANGUAGES = {
  fr: { label: "Français",   flag: "🇫🇷", prefix: "" },
  de: { label: "Deutsch",    flag: "🇩🇪", prefix: "de/" },
  en: { label: "English",    flag: "🇬🇧", prefix: "en/" },
  pt: { label: "Português",  flag: "🇵🇹", prefix: "pt/" },
  it: { label: "Italiano",   flag: "🇮🇹", prefix: "it/" },
};

// Pages actuellement traduites dans chaque langue (à étendre au fur et à mesure).
// Une page absente de cette liste pour une langue donnée n'apparaît pas dans le switcher pour cette langue.
const TRANSLATED_PAGES = [
  "index.html", "nos-miels.html", "nos-gourmandises.html", "coffrets-cadeaux.html",
  "essaims-et-conseils.html", "notre-histoire.html", "livraison-locale.html",
  "actualites.html", "videos.html", "contact.html", "commander.html",
  "confirmation.html", "merci.html"
];

function currentPageFile() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const last = parts[parts.length - 1];
  return (last && last.endsWith('.html')) ? last : 'index.html';
}

function currentLangFromPath() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const first = parts[0];
  return LANGUAGES[first] ? first : 'fr';
}

function buildLangUrl(langCode, page) {
  const prefix = LANGUAGES[langCode].prefix;
  return '/' + prefix + page;
}

function renderLangSwitcher() {
  const container = document.getElementById('lang-switcher');
  if (!container) return;
  const page = currentPageFile();
  const current = currentLangFromPath();
  const availableCodes = Object.keys(LANGUAGES).filter(code => code === 'fr' || TRANSLATED_PAGES.includes(page));

  if (availableCodes.length <= 1) { container.innerHTML = ''; return; } // page pas encore traduite : pas de sélecteur inutile

  let html = `<button class="lang-current" id="lang-toggle" aria-haspopup="true" aria-expanded="false">
    ${LANGUAGES[current].flag} ${LANGUAGES[current].label} <i class="fas fa-chevron-down"></i>
  </button>
  <ul class="lang-menu" id="lang-menu" hidden>`;

  availableCodes.forEach(code => {
    const active = code === current ? ' aria-current="true"' : '';
    html += `<li><a href="${buildLangUrl(code, page)}" data-lang="${code}"${active}>${LANGUAGES[code].flag} ${LANGUAGES[code].label}</a></li>`;
  });
  html += `</ul>`;
  container.innerHTML = html;

  const toggle = document.getElementById('lang-toggle');
  const menu = document.getElementById('lang-menu');
  toggle.addEventListener('click', () => {
    const open = !menu.hidden;
    menu.hidden = open;
    toggle.setAttribute('aria-expanded', String(!open));
  });
  container.querySelectorAll('a[data-lang]').forEach(link => {
    link.addEventListener('click', () => {
      localStorage.setItem('prefLang', link.dataset.lang);
    });
  });
}

// Mémorisation + suggestion douce (uniquement sur les pages d'accueil, pour ne pas
// perturber la navigation en profondeur — important pour un public peu à l'aise avec le web).
function suggestPreferredLanguage() {
  const page = currentPageFile();
  if (page !== 'index.html') return;
  const current = currentLangFromPath();
  const preferred = localStorage.getItem('prefLang');
  if (!preferred || preferred === current) return;
  if (!LANGUAGES[preferred]) return;
  if (sessionStorage.getItem('langBannerDismissed') === preferred) return;

  const s = t();
  const banner = document.createElement('div');
  banner.className = 'lang-suggest-banner';
  banner.innerHTML = `
    <span>${LANGUAGES[preferred].flag} ${s.langSwitchSuggestion(LANGUAGES[preferred].label)}</span>
    <a href="${buildLangUrl(preferred, 'index.html')}" class="btn-secondary" style="padding:8px 16px;">${s.switchTo}</a>
    <button class="lang-dismiss" aria-label="${s.noThanks}">✕</button>
  `;
  document.body.appendChild(banner);
  banner.querySelector('.lang-dismiss').addEventListener('click', () => {
    sessionStorage.setItem('langBannerDismissed', preferred);
    banner.remove();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderLangSwitcher();
  // Initialisation douce : si aucune préférence n'est encore mémorisée (première visite),
  // on retient la langue de la toute première page consultée. Ensuite, seul un clic
  // explicite sur le sélecteur peut modifier cette préférence (voir renderLangSwitcher).
  if (!localStorage.getItem('prefLang')) {
    localStorage.setItem('prefLang', currentLangFromPath());
  }
  if (!sessionStorage.getItem('justLoaded')) {
    sessionStorage.setItem('justLoaded', '1');
    suggestPreferredLanguage();
  }
});
