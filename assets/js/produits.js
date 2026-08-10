// ============================================
// LA RUCHE GOURMANDE — produits.js (Phase 3+ : multilingue + photos optionnelles)
// Lit produits-data.js (structure i18n{fr,de,en,pt,it} par produit) et affiche
// automatiquement la langue de la page (document.documentElement.lang).
// Les chaînes d'interface (boutons, aria-labels, messages) viennent de
// I18N_STRINGS / t() (voir assets/js/i18n-strings.js).
// Le panier reste au format existant : { name, qty, size, price }.
//
// Un produit sans photo réelle disponible doit avoir "image": null dans
// produits-data.js — un espace réservé "Photo à venir" s'affiche alors
// à la place, plutôt qu'une image manquante ou ne correspondant pas au produit.
// ============================================

// Retourne le sous-objet localisé d'un produit (repli sur le français si la langue est absente)
function pl(product) {
  const lang = document.documentElement.lang || 'fr';
  return product.i18n[lang] || product.i18n.fr;
}

function addToCart(item) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  showToast();
}

function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${t().addedToCart}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function sizeLabel(size) {
  return size < 1000 ? `${size} ${t().unit_g}` : t().unit_kg;
}

// Bloc image : photo réelle avec loupe/lightbox si product.image existe,
// sinon un espace réservé "Photo à venir" (pas de lightbox, rien à agrandir).
function imageBlock(product, info) {
  const s = t();
  if (product.image) {
    return `<div class="product-image-wrap js-open-lightbox" title="${s.zoomHint}">
      <img src="${product.image}" alt="${info.name} – La Ruche Gourmande" loading="lazy">
      <div class="zoom-hint"><i class="fas fa-search-plus"></i></div>
    </div>`;
  }
  return `<div class="product-image-wrap product-image-placeholder">
    <i class="fas fa-camera"></i>
    <span>${s.photoSoon}</span>
  </div>`;
}

function bindLightbox(card) {
  const trigger = card.querySelector('.js-open-lightbox');
  if (!trigger) return; // pas de photo -> pas de lightbox à activer
  trigger.addEventListener('click', () => {
    const img = card.querySelector('.product-image-wrap img');
    const lb = document.getElementById('lightbox'), lbImg = document.getElementById('lightbox-img');
    if (lb && lbImg && img) { lbImg.src = img.src; lbImg.alt = img.alt; lb.style.display = 'flex'; }
  });
}

// Carte produit "classique" avec sélecteur format + quantité (miels, Noisimiel, ...)
function renderFormatCard(product, container) {
  const s = t();
  const info = pl(product);
  const card = document.createElement('div');
  card.className = 'product-showcase card';
  card.innerHTML = `
    ${imageBlock(product, info)}
    <div class="product-info">
      <div class="product-name"><span>${info.badge || ''}</span>${info.name}</div>
      <div class="product-tags">${(info.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <p class="product-desc">${info.desc}</p>
      <div>
        <div class="format-label">${s.chooseFormat}</div>
        <div class="format-options js-format-options">
          ${product.formats.map((f, i) => `<button class="format-btn${i===0?' active':''}" data-size="${f.size}" data-price="${f.price}">${sizeLabel(f.size)} – ${f.price} €</button>`).join('')}
        </div>
      </div>
      <div class="qty-row">
        <span class="qty-label">${s.quantity}</span>
        <div class="qty-ctrl">
          <button class="js-qty-minus" aria-label="${s.qtyMinus}">−</button>
          <span class="js-qty-display">1</span>
          <button class="js-qty-plus" aria-label="${s.qtyPlus}">+</button>
        </div>
      </div>
      <div class="price-total">
        <span class="js-price-display">${product.formats[0].price} €</span>
        <small class="js-price-detail">${s.priceDetail(1, sizeLabel(product.formats[0].size), product.formats[0].price)}</small>
      </div>
      <button class="btn-add-cart js-add-cart"><i class="fas fa-shopping-basket"></i> ${s.addToCart}</button>
    </div>`;
  container.appendChild(card);

  let selectedSize = product.formats[0].size, selectedPrice = product.formats[0].price, qty = 1;
  const formatBtns = card.querySelectorAll('.format-btn');
  const qtyDisplay = card.querySelector('.js-qty-display');
  const priceDisplay = card.querySelector('.js-price-display');
  const priceDetail = card.querySelector('.js-price-detail');

  function updatePrice() {
    const total = selectedPrice * qty;
    priceDisplay.textContent = `${total} €`;
    priceDetail.textContent = t().priceDetail(qty, sizeLabel(selectedSize), selectedPrice);
  }
  formatBtns.forEach(btn => btn.addEventListener('click', () => {
    formatBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = parseInt(btn.dataset.size);
    selectedPrice = parseInt(btn.dataset.price);
    updatePrice();
  }));
  card.querySelector('.js-qty-plus').addEventListener('click', () => { qty = Math.min(qty + 1, 99); qtyDisplay.textContent = qty; updatePrice(); });
  card.querySelector('.js-qty-minus').addEventListener('click', () => { qty = Math.max(qty - 1, 1); qtyDisplay.textContent = qty; updatePrice(); });
  card.querySelector('.js-add-cart').addEventListener('click', () => {
    addToCart({ name: `${info.name} – ${sizeLabel(selectedSize)}`, qty, size: selectedSize, price: selectedPrice });
  });
  bindLightbox(card);
}

// Carte produit "prix fixe" (coffrets à prix unique, quantité seule)
function renderFixedPriceCard(product, container) {
  const s = t();
  const info = pl(product);
  const card = document.createElement('div');
  card.className = 'product-showcase card';
  card.innerHTML = `
    ${imageBlock(product, info)}
    <div class="product-info">
      <div class="product-name"><span>${info.badge || ''}</span>${info.name}</div>
      <div class="product-tags">${(info.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <p class="product-desc">${info.desc}</p>
      <div class="qty-row">
        <span class="qty-label">${s.quantity}</span>
        <div class="qty-ctrl">
          <button class="js-qty-minus" aria-label="${s.qtyMinus}">−</button>
          <span class="js-qty-display">1</span>
          <button class="js-qty-plus" aria-label="${s.qtyPlus}">+</button>
        </div>
      </div>
      <div class="price-total">
        <span class="js-price-display">${product.fixedPrice} €</span>
        <small class="js-price-detail">1 × ${info.name}</small>
      </div>
      <button class="btn-add-cart js-add-cart"><i class="fas fa-shopping-basket"></i> ${s.addToCart}</button>
    </div>`;
  container.appendChild(card);

  let qty = 1;
  const qtyDisplay = card.querySelector('.js-qty-display');
  const priceDisplay = card.querySelector('.js-price-display');
  const priceDetail = card.querySelector('.js-price-detail');
  function updatePrice() {
    priceDisplay.textContent = `${product.fixedPrice * qty} €`;
    priceDetail.textContent = `${qty} × ${info.name}`;
  }
  card.querySelector('.js-qty-plus').addEventListener('click', () => { qty = Math.min(qty + 1, 99); qtyDisplay.textContent = qty; updatePrice(); });
  card.querySelector('.js-qty-minus').addEventListener('click', () => { qty = Math.max(qty - 1, 1); qtyDisplay.textContent = qty; updatePrice(); });
  card.querySelector('.js-add-cart').addEventListener('click', () => {
    addToCart({ name: info.name, qty, size: null, price: product.fixedPrice });
  });
  bindLightbox(card);
}

// Carte "sur commande" (Nougat, Pain d'épices) : pas de panier, renvoi vers le formulaire de précommande
function renderOnOrderCard(product, container) {
  const s = t();
  const info = pl(product);
  const card = document.createElement('div');
  card.className = 'product-showcase card';
  card.innerHTML = `
    ${imageBlock(product, info)}
    <div class="product-info">
      <div class="product-name"><span>${info.badge || ''}</span>${info.name}</div>
      <div class="product-tags">${(info.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <p class="product-desc">${info.desc}</p>
      <div class="info-box"><i class="fas fa-clock"></i><span>${s.onOrderNotice(info.leadTime, info.seasonal)}</span></div>
      <a href="#precommande" class="btn-add-cart js-scroll-preorder" data-product="${info.name}"><i class="fas fa-phone"></i> ${s.preorder}</a>
    </div>`;
  container.appendChild(card);
  bindLightbox(card);
}

// Carte "sur devis" (coffret entreprise) : pas de prix affiché, lien vers formulaire
function renderDevisCard(product, container) {
  const s = t();
  const info = pl(product);
  const card = document.createElement('div');
  card.className = 'product-showcase card';
  card.innerHTML = `
    ${imageBlock(product, info)}
    <div class="product-info">
      <div class="product-name"><span>${info.badge || ''}</span>${info.name}</div>
      <div class="product-tags">${(info.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <p class="product-desc">${info.desc}</p>
      <a href="#devis" class="btn-add-cart"><i class="fas fa-file-signature"></i> ${s.requestQuote}</a>
    </div>`;
  container.appendChild(card);
  bindLightbox(card);
}

function renderProductList(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  products.forEach(p => {
    if (p.devis) renderDevisCard(p, container);
    else if (p.onOrder) renderOnOrderCard(p, container);
    else if (p.fixedPrice !== undefined) renderFixedPriceCard(p, container);
    else renderFormatCard(p, container);
  });
}
