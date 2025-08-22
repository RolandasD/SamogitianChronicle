// Minimal lightbox for images with [data-lightbox]
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-lightbox]');
  if(!a) return;
  e.preventDefault();
  const overlay = document.createElement('div');
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:1000;';
  const img = document.createElement('img');
  img.src = a.href; img.style.maxWidth='95vw'; img.style.maxHeight='95vh'; img.alt='';
  overlay.appendChild(img);
  overlay.addEventListener('click', ()=>overlay.remove());
  document.body.appendChild(overlay);
});