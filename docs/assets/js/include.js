// Simple HTML include: replace elements with data-include attr using relative fetch
document.addEventListener('DOMContentLoaded', async () => {
  const inc = document.querySelectorAll('[data-include]');
  await Promise.all([...inc].map(async el => {
    const url = el.getAttribute('data-include');
    const depth = (location.pathname.match(/\//g)||[]).length - (location.pathname.endsWith('/')?2:1);
    const prefix = depth<=0 ? '' : '../'.repeat(depth);
    const resp = await fetch(prefix + url);
    el.innerHTML = await resp.text();
  }));
});