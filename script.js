// Highlight nav-link based on scroll position
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

function activateNavByScroll() {
  let index = sections.length - 1;
  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect();
    if (rect.top + rect.height / 2 > 0) {
      index = i;
      break;
    }
  }
  navLinks.forEach((link, i) => {
    if (i === index) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('.scroll-main').addEventListener('scroll', activateNavByScroll);
window.addEventListener('load', activateNavByScroll);
window.addEventListener('resize', activateNavByScroll);
