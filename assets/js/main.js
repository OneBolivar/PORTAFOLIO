/**
 * OneBolivar Core Frontend Logic
 * Control interactivo del bus de tema visual y persistencia nativa
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Aplicación estricta de atributos en el nodo raíz
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-moon';
        }
    };

    // Estrategia de inicialización híbrida (Storage o Preferencias de Sistema)
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Bus de eventos click para mutación de tema
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.hasAttribute('data-theme');
        const nextTheme = isDark ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem('portfolio-theme', nextTheme);
    });
});
