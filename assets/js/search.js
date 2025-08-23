(async function(){
  const input = document.getElementById('searchBox');
  if(!input) return;
  try {
    const data = await fetch('assets/js/searchIndex.json').then(r => r.json());
    const idx = lunr(function(){
      this.ref('url');
      this.field('title');
      data.forEach(doc => this.add(doc));
    });

    const resultsBox = document.createElement('div');
    resultsBox.className = 'search-results';
    resultsBox.style.position = 'absolute';
    resultsBox.style.background = '#fff';
    resultsBox.style.border = '1px solid #ccc';
    resultsBox.style.display = 'none';
    resultsBox.style.zIndex = '1000';
    input.parentNode.appendChild(resultsBox);

    input.addEventListener('input', function(){
      const query = this.value.trim();
      resultsBox.innerHTML = '';
      if(!query){
        resultsBox.style.display = 'none';
        return;
      }
      const results = idx.search(query);
      if(results.length === 0){
        resultsBox.style.display = 'none';
        return;
      }
      resultsBox.style.display = 'block';
      results.slice(0,5).forEach(r => {
        const match = data.find(d => d.url === r.ref);
        if(match){
          const link = document.createElement('a');
          link.href = match.url;
          link.textContent = match.title;
          link.style.display = 'block';
          link.style.padding = '4px 8px';
          resultsBox.appendChild(link);
        }
      });
    });
  } catch(err) {
    console.error('Search init failed', err);
  }
})();
