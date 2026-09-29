// ============================================
// LA RUCHE GOURMANDE — nav.js (Phase 1)
// Badge panier commun à toutes les pages.
// Logique identique à l'existant (clé localStorage 'cart', somme des qty)
// afin de ne rien casser dans commander.html / produits.html.
// ============================================
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cart-badge, #cartCount').forEach(badge => {
    badge.textContent = totalQty;
  });
}
document.addEventListener('DOMContentLoaded', updateCartBadge);
window.addEventListener('storage', e => { if (e.key === 'cart') updateCartBadge(); });
