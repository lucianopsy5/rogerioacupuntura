const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); navigation.classList.remove('is-open'); }
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('is-open', expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const privacyDialog = document.querySelector('#privacy-dialog');
document.querySelector('#privacy-open').addEventListener('click', () => privacyDialog.showModal());
document.querySelector('#privacy-close').addEventListener('click', () => privacyDialog.close());
privacyDialog.addEventListener('click', event => { if (event.target === privacyDialog) { const rect = privacyDialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) privacyDialog.close(); } });
const portrait = document.querySelector('#portrait');
portrait.addEventListener('error', () => { portrait.style.display = 'none'; });
if (portrait.complete && !portrait.naturalWidth) portrait.style.display = 'none';
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    document.body.classList.toggle('show-mobile-contact', !entry.isIntersecting && entry.boundingClientRect.bottom < 0);
  }).observe(document.querySelector('.hero-actions .button'));
}
