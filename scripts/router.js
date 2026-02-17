/* SPA Router using History API with Scroll Restoration */

class Router {
    constructor() {
        this.appContainer = document.getElementById('app') || document.body;
        this.init();

        // Save scroll position periodically
        window.addEventListener('scroll', this.debounce(() => {
            const currentPath = window.location.pathname;
            const scrollPos = window.scrollY;
            window.history.replaceState({ ...window.history.state, scroll: scrollPos }, '', currentPath);
        }, 100)); // Debounce 100ms
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    init() {
        // Handle clicks on <a> tags
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && !link.hasAttribute('data-external') && link.origin === window.location.origin) {
                // Ignore hash links on the same page (anchors)
                if (link.hash && link.pathname === window.location.pathname) {
                    return;
                }

                e.preventDefault();
                this.navigate(link.pathname);
            }
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (event) => {
            // State is already updated to the target page's state
            const state = event.state || {};
            this.loadPage(window.location.pathname, state.scroll);
        });

        // Initial load - don't reset scroll if browser restored it
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }

    async navigate(path) {
        if (path === window.location.pathname) return;

        // Save current page scroll before leaving
        window.history.replaceState({ ...window.history.state, scroll: window.scrollY }, '', window.location.pathname);

        // Push new state with scroll 0
        window.history.pushState({ scroll: 0 }, '', path);
        await this.loadPage(path, 0);
    }

    async loadPage(path, restoredScrollPos = 0) {
        // NO animation, direct update
        try {
            // Determine which HTML file to fetch
            let fetchPath = path;
            if (path.endsWith('/')) fetchPath += 'index.html';
            else if (!path.includes('.')) fetchPath += '.html';

            const response = await fetch(fetchPath);
            if (!response.ok) throw new Error('Page not found');

            const html = await response.text();

            // Parse content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newContent = doc.querySelector('#app') || doc.body;

            // Update DOM
            this.appContainer.innerHTML = newContent.innerHTML;

            // CRITICAL: Update Body Classes (Themes/Page-specific styles)
            // Should preserve basic theme (light/dark) but remove page-specifics like 'oopsify-theme'
            // Best approach: Copy classList from new doc body, but keep current theme if it was toggled by user?
            // Actually, if we use the theme switcher logic, it stores theme in localStorage.
            // So we can safely reset body classes to match the new page + current global theme.

            const currentTheme = localStorage.getItem('portfolio-theme') || document.documentElement.getAttribute('data-theme');
            document.body.className = doc.body.className; // Reset to new page's defaults

            // Re-apply global theme if needed (ensure it's consistent)
            if (currentTheme) {
                document.documentElement.setAttribute('data-theme', currentTheme);
                // Some pages might not have theme classes on body by default, so we ensure it matches
                document.body.classList.remove('light-theme', 'dark-theme');
                document.body.classList.add(currentTheme + '-theme');
            }

            // Update title
            document.title = doc.title || 'Arsen Muradian Portfolio';

            // Restore scroll position
            window.scrollTo(0, restoredScrollPos);

            // Re-run scripts
            this.executeScripts(newContent);

        } catch (error) {
            console.error('Navigation failed:', error);
        }
    }

    executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }
}

// Global instance
window.router = new Router();
