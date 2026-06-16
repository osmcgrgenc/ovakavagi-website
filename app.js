/**
 * Ovakavağı Mahallesi - App JavaScript
 * Minimal, vanilla JS for mobile menu and scroll behavior
 * 2030 Neo-Geometric Civic Interface
 */

(function() {
  'use strict';

  // ============================================
  // Mobile Navigation Toggle
  // ============================================

  var menuToggle = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  var mobileNavLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];
  var header = document.getElementById('header');

  /**
   * Toggle mobile navigation open/closed
   */
  function toggleMobileNav() {
    var isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    mobileNav.classList.toggle('mobile-nav--open', !isExpanded);
    mobileNav.setAttribute('aria-hidden', String(isExpanded));

    // Prevent body scroll when menu is open
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  }

  /**
   * Close mobile navigation
   */
  function closeMobileNav() {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('mobile-nav--open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', toggleMobileNav);

    // Close menu when clicking a link
    mobileNavLinks.forEach(function(link) {
      link.addEventListener('click', closeMobileNav);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('mobile-nav--open')) {
        closeMobileNav();
        menuToggle.focus();
      }
    });

    // Close menu on resize to desktop
    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth >= 768 && mobileNav.classList.contains('mobile-nav--open')) {
          closeMobileNav();
        }
      }, 100);
    });
  }

  // ============================================
  // Header Scroll State
  // ============================================

  var lastScrollY = 0;
  var scrollThreshold = 10;

  function handleScroll() {
    var currentScrollY = window.scrollY;

    // Add scrolled class when scrolled past threshold
    if (header) {
      if (currentScrollY > scrollThreshold) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }

    lastScrollY = currentScrollY;
  }

  // Throttle scroll handler for performance
  var scrollTicking = false;
  window.addEventListener('scroll', function() {
    if (!scrollTicking) {
      window.requestAnimationFrame(function() {
        handleScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Initial check
  handleScroll();

  // ============================================
  // Smooth Scroll Enhancement
  // ============================================

  // Handle anchor links with proper focus management
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = this.getAttribute('href');

      // Skip if just "#"
      if (href === '#') return;

      var target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        // Close mobile nav if open
        if (mobileNav && mobileNav.classList.contains('mobile-nav--open')) {
          closeMobileNav();
        }

        // Calculate target position
        var headerHeight = header ? header.offsetHeight : 0;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Set focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // ============================================
  // Active Section Highlighting
  // ============================================

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.header__nav-link, .mobile-nav__link');

  // Only enable if IntersectionObserver is available
  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var sectionId = entry.target.getAttribute('id');
          navLinks.forEach(function(link) {
            link.classList.remove('is-active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('is-active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    });

    sections.forEach(function(section) {
      sectionObserver.observe(section);
    });
  }

  // ============================================
  // Keyboard Navigation Support
  // ============================================

  // Ensure mobile nav is closable with keyboard
  if (mobileNav) {
    var focusableElements = mobileNav.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
      var firstElement = focusableElements[0];
      var lastElement = focusableElements[focusableElements.length - 1];

      mobileNav.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      });
    }
  }

  // ============================================
  // Gallery: Progressive Local Image with CSS Fallback
  // ============================================

  // Her galeri media kutusu için aday görsel yollarını sırayla dener. İlk
  // yüklenen görsel, her zaman mevcut olan CSS geometrik fallback'in üzerine
  // <img> olarak (object-fit: cover) enjekte edilir. Hiçbiri yüklenemezse
  // broken image gösterilmez — fallback olduğu gibi kalır. Media kutusunun
  // sabit aspect-ratio'su sayesinde görsel enjekte edilse de layout kaymaz (CLS yok).
  var galleryMedia = document.querySelectorAll('.gallery__media[data-gallery-src]');

  galleryMedia.forEach(function(media) {
    var raw = media.getAttribute('data-gallery-src') || '';
    var candidates = raw.split(',').map(function(s) {
      return s.trim();
    }).filter(Boolean);

    if (candidates.length === 0) return;

    var altText = media.getAttribute('data-gallery-alt') || '';

    function loadCandidate(index) {
      if (index >= candidates.length) return; // tümü başarısız → CSS fallback kalsın

      var probe = new Image();

      probe.onload = function() {
        var img = document.createElement('img');
        img.src = candidates[index];
        img.alt = altText;
        img.className = 'gallery__image';
        img.loading = 'lazy';
        img.decoding = 'async';
        media.appendChild(img);

        // Görseli sonraki frame'de yumuşakça göster.
        window.requestAnimationFrame(function() {
          img.classList.add('gallery__image--loaded');
        });

        // Artık alt metni <img> taşıyor; kapsayıcıdaki gereksiz etiketi kaldır.
        media.removeAttribute('role');
        media.removeAttribute('aria-label');
      };

      probe.onerror = function() {
        loadCandidate(index + 1);
      };

      probe.src = candidates[index];
    }

    loadCandidate(0);
  });

})();
