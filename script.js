// Highlights the navbar link based on the section currently visible while scrolling

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const OFFSET = 140; // Pretend the section starts 140px earlier for active navbar
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - OFFSET) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {    // If the nav link points to the currently visible section
    if (link.getAttribute('href') === `#${current}`) {   // add active class to highlight it
      link.classList.add('active');
    } else {  // remove active class from other links
      link.classList.remove('active');
    }
  });
});
