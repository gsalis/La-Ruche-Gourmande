// ════════════════════════════════════════════════════
// La Ruche Gourmande — Logique de la page produits
// ════════════════════════════════════════════════════

const PRICES = { 250: 5, 500: 10, 1000: 18 };
let currentLang = localStorage.getItem('lang') || 'fr';

// ─────────────────────────────────────────────
// 1) GESTION DE LA LANGUE
// ─────────────────────────────────────────────
function applyTranslations(lang) {
  const dict = I18N[lang] || I18N.fr;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Direction RTL pour l'arabe
  const isRTL = RTL_LANGS.includes(lang);
  document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Classe spéciale pour la police arabe
  document.body.classList.toggle('lang-ar', lang === 'ar');

  // Boutons actifs dans la barre de langue
  document.querySelectorAll('.lang-bar button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Recalcule les prix affichés avec la bonne unité
  document.querySelectorAll('.product-showcase').forEach(card => updateCardPriceDisplay(card));
}

document.querySelectorAll('.lang-bar button').forEach(btn => {
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
});

// ─────────────────────────────────────────────
// 2) GESTION DE CHAQUE CARTE PRODUIT
// ─────────────────────────────────────────────
const toast = document.getElementById('toast');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

const cardStates = new Map(); // card -> {selectedSize, selectedPrice, qty}

function updateCardPriceDisplay(card) {
  const state = cardStates.get(card);
  if (!state) return;
  const dict = I18N[currentLang] || I18N.fr;
  const priceDisplay = card.querySelector('.js-price-display');
  const priceDetail = card.querySelector('.js-price-detail');
  const total = state.selectedPrice * state.qty;
  const unitLabel = state.selectedSize < 1000
    ? `${state.selectedSize} ${dict.unit_g}`
    : `1 ${dict.unit_kg}`;
  priceDisplay.textContent = `${total} €`;
  priceDetail.textContent = `${state.qty} × ${unitLabel}`;
}

document.querySelectorAll('.product-showcase').forEach(card => {
  cardStates.set(card, { selectedSize: 250, selectedPrice: 5, qty: 1 });

  const formatBtns = card.querySelectorAll('.format-btn');
  const qtyDisplay = card.querySelector('.js-qty-display');

  formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      formatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const state = cardStates.get(card);
      state.selectedSize = parseInt(btn.dataset.size);
      state.selectedPrice = parseInt(btn.dataset.price);
      updateCardPriceDisplay(card);
    });
  });

  card.querySelector('.js-qty-plus').addEventListener('click', () => {
    const state = cardStates.get(card);
    state.qty = Math.min(state.qty + 1, 99);
    qtyDisplay.textContent = state.qty;
    updateCardPriceDisplay(card);
  });

  card.querySelector('.js-qty-minus').addEventListener('click', () => {
    const state = cardStates.get(card);
    state.qty = Math.max(state.qty - 1, 1);
    qtyDisplay.textContent = state.qty;
    updateCardPriceDisplay(card);
  });

  card.querySelector('.js-add-cart').addEventListener('click', () => {
    const state = cardStates.get(card);
    const dict = I18N[currentLang] || I18N.fr;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const unitLabel = state.selectedSize < 1000 ? `${state.selectedSize} g` : '1 kg';

    // Nom du produit dans la langue FRANÇAISE pour le panier/commande
    // (le panier et la commande restent en français pour l'apiculteur,
    // seul l'affichage produit change de langue)
    const productKey = card.dataset.product;
    const frenchName = productKey === 'cremeux'
      ? I18N.fr.product_cremeux_name
      : I18N.fr.product_brut_name;

    cart.push({
      name: `${frenchName} – ${unitLabel}`,
      qty: state.qty,
      size: state.selectedSize,
      price: state.selectedPrice
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showToast();
  });

  card.querySelector('.js-open-lightbox').addEventListener('click', () => {
    const img = card.querySelector('.product-image-wrap img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => { lightbox.style.display = 'none'; });

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = count;
}

function showToast() {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}

// ─────────────────────────────────────────────
// 3) INITIALISATION
// ─────────────────────────────────────────────
updateCartBadge();
applyTranslations(currentLang);
