const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');
const hero = document.querySelector('.section-hero');
const sectionAbout = document.querySelector('.about');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('hidden');
});

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: '96px',
};

const heroObserver = new IntersectionObserver(stickyNav, obsOptions);
heroObserver.observe(hero);

const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
mobileMenuLinks.forEach((mobileMenuLink) => {
  mobileMenuLink.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
  });
});
