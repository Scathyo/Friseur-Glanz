// Sidebar / drawer toggle (mobile)
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function closeDrawer() {
  sidebar.classList.remove('open');
  menuToggle.classList.remove('open');
  overlay.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  overlay.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

overlay.addEventListener('click', closeDrawer);
document.getElementById('sideNav').querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeDrawer);
});

// Scroll-spy: highlight active section link
const sideLinks = document.querySelectorAll('.side-nav a');
const sections = [...sideLinks].map((link) => document.querySelector(link.getAttribute('href')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const link = document.querySelector(`.side-nav a[href="#${entry.target.id}"]`);
    if (!link) return;
    sideLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach((section) => section && observer.observe(section));

// Contact form (demo only, no backend)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Danke für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen. 💇';
  contactForm.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
