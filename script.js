document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navigation
  const header = document.getElementById('main-nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Scroll Animations using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Select all elements to animate
  const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
  animatedElements.forEach(el => observer.observe(el));

  const contactForm = document.getElementById('form');
  if (contactForm) {
    window.addEventListener('pageshow', event => {
      const navigationEntries = performance.getEntriesByType?.('navigation') || [];
      const navigationType = navigationEntries[0]?.type || '';
      if (event.persisted || navigationType === 'back_forward') {
        contactForm.reset();
      }
    });
  }

});
