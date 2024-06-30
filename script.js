// Get the menu icon element and the navbar element
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle menu and navbar classes on menu click
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Remove menu and navbar classes on window scroll
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Initialize ScrollReveal with configuration
const sr = ScrollReveal({
  distance: '60px',  // Movement distance of elements
  duration: 2500,    // Animation duration in milliseconds
  reset: true        // Enable resetting animations
});

// Reveal elements with specific configurations
sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 400, origin: 'top' });
sr.reveal('.about, .cta, .resume, .contact, .footer', { delay: 200, origin: 'top' });
