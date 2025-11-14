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
            themeToggleBtn.textContent = 'Light Mode'; // Update text
        } else {
            document.body.classList.remove('dark-mode');
            themeToggleBtn.textContent = 'Dark Mode'; // Update text
        }
    };

    // Apply stored theme or default to light
    if (currentTheme) {
        applyTheme(currentTheme);
    } else {
        applyTheme('light-mode'); // Default to light mode if no preference is stored
    }

    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
