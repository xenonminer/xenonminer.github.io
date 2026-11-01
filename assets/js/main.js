(function () {
  var root = document.documentElement;

  // Theme toggle. The initial theme is set inline in <head> before first paint.
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  });

  // Mobile menu.
  var menuBtn = document.querySelector('[data-menu-toggle]');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }

  // Copy buttons on code blocks.
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.closest('.code-block').querySelector('pre code');
      if (!code || !navigator.clipboard) return;
      navigator.clipboard.writeText(code.innerText).then(function () {
        btn.textContent = 'Copied';
        btn.classList.add('is-done');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('is-done');
        }, 1500);
      });
    });
  });

  // Side contents: highlight the section currently being read.
  var toc = document.querySelector('[data-toc]');
  if (toc) {
    var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    var targets = links.map(function (a) {
      return document.getElementById(decodeURIComponent(a.hash.slice(1)));
    });
    var active = null;
    var ticking = false;

    var update = function () {
      ticking = false;
      var line = parseFloat(getComputedStyle(root).scrollPaddingTop) || 80;
      var current = -1;
      targets.forEach(function (el, i) {
        if (el && el.getBoundingClientRect().top <= line + 8) current = i;
      });
      // At the very bottom the last short sections can never reach the line, so take the last one.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = targets.length - 1;
      var link = links[current] || null;
      if (link === active) return;
      if (active) active.classList.remove('is-active');
      active = link;
      if (!active) return;
      active.classList.add('is-active');
      // Keep the highlighted entry visible when the contents list itself scrolls.
      var box = toc.getBoundingClientRect();
      var r = active.getBoundingClientRect();
      if (r.top < box.top || r.bottom > box.bottom) {
        toc.scrollTop += r.top - box.top - box.height / 3;
      }
    };

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  // Search and kind filter on list pages.
  var filterRoot = document.querySelector('[data-filter-root]');
  if (filterRoot) {
    var input = filterRoot.querySelector('[data-filter-search]');
    var count = filterRoot.querySelector('[data-filter-count]');
    var chips = filterRoot.querySelectorAll('[data-filter-kind]');
    var cards = document.querySelectorAll('[data-filter-grid] .card');
    var empty = document.querySelector('[data-filter-empty]');
    var kind = '';

    var apply = function () {
      var terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
      var shown = 0;
      cards.forEach(function (card) {
        var hay = card.dataset.search;
        var match = (!kind || card.dataset.kind === kind) &&
          terms.every(function (t) { return hay.indexOf(t) !== -1; });
        card.hidden = !match;
        if (match) shown++;
      });
      count.textContent = terms.length || kind ? shown + ' / ' + cards.length : '';
      empty.hidden = shown !== 0;
    };

    input.addEventListener('input', apply);
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        kind = chip.dataset.filterKind;
        chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
        apply();
      });
    });
  }
})();
