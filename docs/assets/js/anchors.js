// Add anchor links to headings h2/h3
document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  if(!content) return;
  const headers = content.querySelectorAll('h2, h3');
  headers.forEach(h => {
    const id = h.id || h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-');
    h.id = id;
    const a = document.createElement('a');
    a.href = '#' + id;
    a.className = 'anchor';
    a.textContent = '¶';
    a.style.marginLeft = '.5rem';
    a.style.textDecoration = 'none';
    h.appendChild(a);
  });
});