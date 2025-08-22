// Client-side search: fetch manifest, crawl pages, build index on first use
let indexBuilt = null;
async function buildIndex(){
  const manifest = await fetch('data/manifest.json').then(r=>r.json());
  const docs = [];
  for (const page of manifest.pages){
    try{
      const html = await fetch(page.url).then(r=>r.text());
      const tmp = document.createElement('div'); tmp.innerHTML = html;
      const main = tmp.querySelector('#content') || tmp;
      const text = main.textContent.replace(/\s+/g,' ').trim();
      docs.push({title: page.title, url: page.url, text});
    }catch(e){/*ignore*/}
  }
  return new MiniSearch(docs);
}
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  const box = document.getElementById('search-results');
  if(!input || !box) return;
  input.addEventListener('input', async () => {
    const q = input.value.trim();
    if(!q){ box.style.display='none'; box.innerHTML=''; return; }
    if(!indexBuilt) indexBuilt = await buildIndex();
    const results = indexBuilt.search(q);
    box.innerHTML = results.map(r=>`<a href="${r.url}"><strong>${r.title}</strong><br><span>${r.text.slice(0,140)}…</span></a>`).join('');
    box.style.display = results.length ? 'block' : 'none';
  });
  document.addEventListener('click', (e)=>{
    if(!e.target.closest('.search')){ box.style.display='none'; }
  });
});