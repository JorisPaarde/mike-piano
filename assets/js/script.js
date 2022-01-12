const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav',
    offset: 200
  });
