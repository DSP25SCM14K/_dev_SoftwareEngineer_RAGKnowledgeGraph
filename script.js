// ═══════════════════════════════════════════════════
// Portfolio interactions — minimal, performance-first
// ═══════════════════════════════════════════════════

// Scroll-reveal using IntersectionObserver
(function() {
  const targets = document.querySelectorAll(
    '.metric, .highlight, .tl-entry, .project, .stack-col, .contact__link'
  );

  targets.forEach(el => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => io.observe(el));
})();

// Smooth-scroll with nav offset (already handled by scroll-padding-top in CSS,
// but prevent any jumpiness for in-page links)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Subtle nav shadow on scroll
(function() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 20;
        nav.style.borderBottomColor = scrolled ? 'var(--border)' : 'var(--border-soft)';
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();
