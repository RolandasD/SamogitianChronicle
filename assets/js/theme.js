(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  function setTheme(theme){
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  const saved = localStorage.getItem('theme') || 'light';
  setTheme(saved);

  if(toggle){
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }
})();
