/* Theme Switcher Logic */

const THEME_KEY = 'portfolio-theme';

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Toggle body classes without overwriting others
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);

    localStorage.setItem(THEME_KEY, theme);

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('theme-changed', { detail: theme }));
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initTheme);

window.toggleTheme = toggleTheme;
