window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Theme toggle logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        if (theme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    };

    // Apply stored theme or default to light
    if (currentTheme) {
        applyTheme(currentTheme);
    } else {
        applyTheme('light-mode'); // Default to light mode if no preference is stored
    }

    themeToggleBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const newTheme = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

// Add fade-in animation to elements as they scroll into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .skill-item, .glass-panel').forEach(el => {
    el.style.opacity = '0'; // Initial state
    el.classList.add('fade-in'); // Add class to trigger animation (handled by CSS now, but good to have JS fallback/control if needed)
    // Actually, let's use the observer to add the class
    el.classList.remove('fade-in');
    observer.observe(el);
});
