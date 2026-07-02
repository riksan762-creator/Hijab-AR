/* Shared UI behaviors used across every storefront page */

function arToast(message){
  let el = document.getElementById('ar-toast');
  if(!el){
    el = document.createElement('div');
    el.id = 'ar-toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.__arToastTimer);
  window.__arToastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

document.addEventListener('DOMContentLoaded', () => {
  arUpdateCartBadge();

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('mobile-open');
      links.style.cssText = open
        ? 'display:flex;flex-direction:column;gap:16px;position:absolute;top:100%;left:0;right:0;background:#F7F1E8;padding:20px 24px;border-bottom:1px solid rgba(43,38,32,.12);'
        : '';
    });
  }

  // keep cart badge synced across tabs
  window.addEventListener('storage', (e) => {
    if(e.key === AR_KEYS.CART) arUpdateCartBadge();
  });
});
