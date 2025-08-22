// Build right-side ToC from h2/h3
document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const toc = document.getElementById('page-toc');
  if(!content || !toc) return;
  const h = content.querySelectorAll('h2, h3');
  if(!h.length){ toc.innerHTML=''; return; }
  const wrap = document.createElement('div');
  const title = document.createElement('h3'); title.textContent='Contents';
  wrap.appendChild(title);
  const ul = document.createElement('ul'); ul.className='toc-rt';
  h.forEach(el=>{
    const li = document.createElement('li');
    li.className = el.tagName.toLowerCase();
    const a = document.createElement('a');
    a.href = '#' + el.id;
    a.textContent = el.textContent.replace('¶','').trim();
    li.appendChild(a); ul.appendChild(li);
  });
  wrap.appendChild(ul);
  toc.innerHTML=''; toc.appendChild(wrap);
});