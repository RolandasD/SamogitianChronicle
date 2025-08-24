(async function(){
  const input = document.getElementById('searchBox');
  if(!input) return;
  try {
    const data = await fetch('assets/js/searchIndex.json').then(r => r.json());
    const idx = lunr(function(){
      this.ref('url');
      this.field('title');
      this.field('description');
      data.forEach(doc => this.add(doc));
    });

    const resultsBox = document.createElement('div');
    resultsBox.className = 'search-results';
    resultsBox.style.position = 'absolute';
    resultsBox.style.background = '#fff';
    resultsBox.style.border = '1px solid #ccc';
    resultsBox.style.display = 'none';
    resultsBox.style.zIndex = '1000';
    resultsBox.setAttribute('role', 'listbox');
    input.parentNode.appendChild(resultsBox);

    let currentIndex = -1;

    function hideResults(){
      resultsBox.style.display = 'none';
      resultsBox.innerHTML = '';
      currentIndex = -1;
    }

    function updateSelection(newIndex){
      const options = resultsBox.querySelectorAll('a[role="option"]');
      if(options.length === 0) return;
      if(newIndex < 0) newIndex = 0;
      if(newIndex >= options.length) newIndex = options.length - 1;
      currentIndex = newIndex;
      options.forEach((opt,i) => {
        if(i === currentIndex){
          opt.classList.add('selected');
          opt.style.background = '#eef';
          opt.focus();
        } else {
          opt.classList.remove('selected');
          opt.style.background = '';
        }
      });
    }

    input.addEventListener('input', function(){
      const query = this.value.trim();
      resultsBox.innerHTML = '';
      currentIndex = -1;
      if(!query){
        hideResults();
        return;
      }
      const results = idx.search(query);
      if(results.length === 0){
        hideResults();
        return;
      }
      resultsBox.style.display = 'block';
      results.slice(0,5).forEach(r => {
        const match = data.find(d => d.url === r.ref);
        if(match){
          const link = document.createElement('a');
          link.href = match.url;
          link.setAttribute('role','option');
          link.tabIndex = -1;
          link.style.display = 'block';
          link.style.padding = '4px 8px';
          const title = document.createElement('div');
          title.textContent = match.title;
          title.style.fontWeight = 'bold';
          const desc = document.createElement('div');
          desc.textContent = match.description;
          desc.style.fontSize = 'smaller';
          link.appendChild(title);
          link.appendChild(desc);
          resultsBox.appendChild(link);
        }
      });
    });

    function handleKey(e){
      if(resultsBox.style.display === 'none') return;
      const options = resultsBox.querySelectorAll('a[role="option"]');
      switch(e.key){
        case 'ArrowDown':
          e.preventDefault();
          updateSelection(currentIndex + 1);
          break;
        case 'ArrowUp':
          e.preventDefault();
          if(currentIndex <= 0){
            currentIndex = -1;
            input.focus();
          } else {
            updateSelection(currentIndex - 1);
          }
          break;
        case 'Enter':
          if(currentIndex >= 0 && options[currentIndex]){
            window.location = options[currentIndex].href;
          }
          break;
        case 'Escape':
          hideResults();
          input.focus();
          break;
      }
    }

    input.addEventListener('keydown', handleKey);
    resultsBox.addEventListener('keydown', handleKey);

    input.addEventListener('blur', () => {
      setTimeout(() => {
        if(!resultsBox.contains(document.activeElement)){
          hideResults();
        }
      }, 100);
    });
  } catch(err) {
    console.error('Search init failed', err);
  }
})();
