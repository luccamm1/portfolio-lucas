document.addEventListener('DOMContentLoaded', () => {
  I18n.init();

  /* ==================== Cursor ==================== */
  const cursor = document.getElementById('cursor');
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .project-card, .contact-card, .skill-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.opacity = '0.5';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursor.style.opacity = '1';
    });
  });

  /* ==================== Navbar ==================== */
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  });

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  const sections = document.querySelectorAll('.section, .hero');
  const observerNav = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -55% 0px' });

  sections.forEach(s => observerNav.observe(s));

  /* ==================== Typewriter ==================== */
  const typingEl = document.querySelector('.typing-text');
  const roles = [
    'Full-Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 70;

    if (!isDeleting && charIndex < currentRole.length) {
      charIndex++;
      typingEl.textContent = currentRole.slice(0, charIndex);
      setTimeout(typeEffect, speed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      typingEl.textContent = currentRole.slice(0, charIndex);
      setTimeout(typeEffect, speed);
    } else if (!isDeleting && charIndex === currentRole.length) {
      isPaused = true;
      setTimeout(() => {
        isDeleting = true;
        isPaused = false;
        typeEffect();
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 300);
    }
  }
  typeEffect();

  /* ==================== Scroll Reveal ==================== */
  const revealElements = document.querySelectorAll(
    '.project-card, .skill-item, .contact-card, .section-header, .hero-content'
  );

  const observerReveal = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerReveal.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  revealElements.forEach((el, i) => {
    el.classList.add('reveal');
    if (el.classList.contains('project-card') || el.classList.contains('skill-item')) {
      const delay = Math.min((i % 6) * 0.05, 0.25);
      el.style.transitionDelay = delay + 's';
    }
    observerReveal.observe(el);
  });

  /* ==================== Parallax Orbs ==================== */
  document.querySelectorAll('.orb').forEach((orb, i) => {
    const speed = 0.02 + i * 0.01;
    window.addEventListener('mousemove', e => {
      const x = (window.innerWidth / 2 - e.clientX) * speed;
      const y = (window.innerHeight / 2 - e.clientY) * speed;
      orb.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
});
