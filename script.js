// script.js — minimal interactions for the reconstructed page

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for back-to-top link
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Nav link active state on click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Service card hover ripple (subtle feedback)
    const cards = document.querySelectorAll('.service-card, .stat-card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.2s ease';
        });
    });
});
