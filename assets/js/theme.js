/**
 * Light / dark mode toggle.
 * The saved choice (or the system setting) is applied early by a small script
 * in each page's <head>, so the page never flashes the wrong colours.
 */
(function () {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');

  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function saved() {
    try {
      const value = localStorage.getItem('theme');
      return value === 'dark' || value === 'light' ? value : null;
    } catch (e) {
      return null;
    }
  }

  function render() {
    if (!button) return;
    const dark = current() === 'dark';
    button.setAttribute('aria-pressed', String(dark));
    const icon = button.querySelector('i');
    if (icon) icon.className = dark ? 'bi bi-sun' : 'bi bi-moon-stars';
  }

  function apply(theme, remember) {
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-bs-theme', theme);
    if (remember) {
      try { localStorage.setItem('theme', theme); } catch (e) { /* storage unavailable */ }
    }
    render();
  }

  if (button) {
    button.addEventListener('click', function () {
      apply(current() === 'dark' ? 'light' : 'dark', true);
    });
  }

  // Follow the system setting until the visitor picks a mode themselves.
  const media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (media && media.addEventListener) {
    media.addEventListener('change', function (event) {
      if (!saved()) apply(event.matches ? 'dark' : 'light', false);
    });
  }

  render();
})();
