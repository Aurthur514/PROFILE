document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all sections with the 'hidden' class
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));


    // --- 2. Typing Animation ---
    new Typed('#typing-effect', {
        strings: ['Data Engineer', 'Data Analyst'],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        smartBackspace: true
    });


    // --- 3. Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});