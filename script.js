// script.js — smooth scroll and basic interactions

document.addEventListener('DOMContentLoaded', () => {
    // ===== LANGUAGE SELECTOR =====
    const globeBtn = document.getElementById('langGlobeBtn');
    const dropdown = document.getElementById('langDropdown');

    if (globeBtn && dropdown) {
        // Click toggle
        globeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        // Hover open on desktop
        const langControl = document.getElementById('langControl');
        let hoverTimeout;

        langControl.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            dropdown.classList.add('open');
        });

        langControl.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                dropdown.classList.remove('open');
            }, 200);
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!langControl.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                dropdown.classList.remove('open');
            }
        });

        // Prevent dropdown clicks from navigating
        const langOptions = dropdown.querySelectorAll('.lang-option');
        langOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.remove('open');
            });
        });
    }
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

    // ===== REGISTER BUTTON NAVIGATION =====
    const registerBtn = document.getElementById('sidebarRegisterBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            var target = 'register.html';
            try {
                window.top.location.href = target;
            } catch (err) {
                window.location.href = target;
            }
        });
    }

    // ===== PASSWORD TOGGLE (registration page) =====
    const eyeBtn = document.getElementById('regEyeBtn');
    const pwInput = document.getElementById('regPassword');
    if (eyeBtn && pwInput) {
        eyeBtn.addEventListener('click', () => {
            const isPassword = pwInput.type === 'password';
            pwInput.type = isPassword ? 'text' : 'password';
        });
    }

    // ===== AVATAR SELECTION =====
    const avatars = document.querySelectorAll('.reg-avatar');
    avatars.forEach(av => {
        av.addEventListener('click', () => {
            avatars.forEach(a => a.style.borderColor = 'transparent');
            av.style.borderColor = '#4a8ac4';
        });
    });
});
