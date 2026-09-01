// script.js — smooth scroll and basic interactions

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for back-to-top
    const btt = document.getElementById('backToTop');
    if (btt) {
        btt.addEventListener('click', e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scroll for sidebar top link
    const topLinks = document.querySelectorAll('.top-link');
    topLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Nav link hover feedback
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
