/**
 * Juan Esteban Bolívar | Core Frontend Logic
 * Control interactivo del tema visual (Light/Dark) y persistencia nativa
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Función pura para aplicar las variables de tema en el nodo raíz (HTML)
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-moon';
        }
    };

    // Inicialización híbrida: Verifica localStorage o respeta la preferencia del sistema operativo
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Bus de eventos click para mutar el tema bajo demanda
    themeToggleBtn.addEventListener('click', () => {
        const isDarkNow = document.documentElement.hasAttribute('data-theme');
        const nextTheme = isDarkNow ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem('portfolio-theme', nextTheme);
    });
});
