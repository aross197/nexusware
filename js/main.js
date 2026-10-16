/* NexusWare — Main interactions */

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Pricing toggle
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  const priceValues = document.querySelectorAll('.price-amount .value');
  const pricePeriods = document.querySelectorAll('.price-amount .period');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const period = btn.dataset.period;

      priceValues.forEach(el => {
        const value = el.dataset[period];
        if (value) {
          el.textContent = value;
        }
      });

      pricePeriods.forEach(el => {
        el.textContent = period === 'once' ? '/once' : '/year';
      });
    });
  });

  // Smooth header shadow on scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = 'var(--shadow)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Fake download buttons (demo)
  document.querySelectorAll('.download-buttons a, a[href="#download"]').forEach(btn => {
    if (btn.classList.contains('platform') || btn.textContent.includes('Download') || btn.textContent.includes('Try Free')) {
      btn.addEventListener('click', (e) => {
        if (btn.getAttribute('href') === '#download' || btn.classList.contains('platform')) {
          e.preventDefault();
          // In a real site this would trigger the actual download
          const platform = btn.querySelector('strong')?.textContent || 'your platform';
          alert(`🚀 Download started for ${platform}!\n\n(This is a demo — replace with real download links)`);
        }
      });
    }
  });
});
