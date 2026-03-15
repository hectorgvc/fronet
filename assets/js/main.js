/* ============================================
   FRONET TECNOLOGÍA SRL — main.js
   Navbar sticky, mobile menu, scroll animations,
   dropdown, año dinámico, smooth scroll
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- 1. NAVBAR STICKY SHADOW ----- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
  }


  /* ----- 2. MOBILE MENU ----- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const navClose = document.getElementById('navClose');

  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    document.body.classList.add('nav-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    document.body.classList.remove('nav-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileNav && mobileNav.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (navClose) {
    navClose.addEventListener('click', closeMobileNav);
  }

  // Close mobile nav when clicking a link
  if (mobileNav) {
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    // Close when clicking outside the nav content
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) {
        closeMobileNav();
      }
    });
  }

  // Close mobile nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
      closeMobileNav();
    }
  });


  /* ----- 3. SCROLL ANIMATIONS (IntersectionObserver) ----- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const fadeElements = document.querySelectorAll('.fade-up');

    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      fadeElements.forEach(el => observer.observe(el));
    }
  } else {
    // If reduced motion is preferred, make all elements visible immediately
    document.querySelectorAll('.fade-up').forEach(el => {
      el.classList.add('visible');
    });
  }


  /* ----- 4. DROPDOWN NAVBAR (Tienda) ----- */
  // On desktop (>768px): hover is handled via CSS
  // On mobile: the Tienda link in mobile-nav goes directly to tienda.html (no dropdown needed)
  // No additional JS required for the dropdown — CSS :hover handles it


  /* ----- 5. AÑO DINÁMICO EN FOOTER ----- */
  const yearElements = document.querySelectorAll('.footer__year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });


  /* ----- 6. SMOOTH SCROLL ----- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        // Close mobile nav if open
        closeMobileNav();
      }
    });
  });


  /* ----- 7. ACCORDION (FAQ) ----- */
  const accordionHeaders = document.querySelectorAll('.accordion__header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion__item');
      if (!item) return;

      const isOpen = item.classList.contains('open');

      // Close all items in the same accordion
      const accordion = item.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion__item').forEach(i => {
          i.classList.remove('open');
        });
      }

      // Toggle the clicked item
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });


  /* ----- 8. TABS (Políticas) ----- */
  const tabButtons = document.querySelectorAll('.tabs__btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabGroup = btn.closest('.tabs');
      const tabContainer = tabGroup ? tabGroup.parentElement : document;
      const targetPanel = btn.getAttribute('data-tab');

      // Deactivate all tabs in this group
      if (tabGroup) {
        tabGroup.querySelectorAll('.tabs__btn').forEach(b => b.classList.remove('active'));
      }

      // Deactivate all panels
      tabContainer.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

      // Activate clicked tab and its panel
      btn.classList.add('active');
      const panel = tabContainer.querySelector(`#${targetPanel}`);
      if (panel) {
        panel.classList.add('active');
      }
    });
  });

});
