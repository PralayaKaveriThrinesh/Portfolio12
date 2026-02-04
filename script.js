// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    // Change icon based on state
    const icon = menuToggle.querySelector('i');
    if(navList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        header.style.background = 'rgba(15, 23, 42, 0.9)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(15, 23, 42, 0.7)'; // Keep it slightly transparent
    }
});

// Scroll Reveal Animation (Simple Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Add 'hidden' class to elements we want to animate
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .section-title, .hero-text, .hero-img-box');
animatedElements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Add CSS for animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    .hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    .show {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
