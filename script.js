/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id === '#') return;

    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ================= ACTIVE NAV LINK ================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const OFFSET = 140; // offset for fixed navbar

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - OFFSET) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${current}`
    );
  });
});
