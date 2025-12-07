// JavaScript
// Router minimal: chaque route redirige vers le fichier statique correspondant

const routes = {
    '/': () => {
        // Accueil -> index.html
        if (window.location.pathname !== '/index.html') {
            window.location.replace('/index.html');
        }
    },
    '/mentions_legales': () => {
        // Mentions légales -> mentions_legales/index.html
        if (window.location.pathname !== '/mentions_legales/index.html') {
            window.location.replace('/mentions_legales/index.html');
        }
    },
};

// Chemin de la page 404
const notFoundPath = '/404_error/index.html';

// Normalise un chemin (sans query ni hash)
function normalizePath(pathname) {
    try {
        const url = new URL(window.location.href);
        url.pathname = pathname;
        url.search = '';
        url.hash = '';
        return url.pathname;
    } catch {
        return pathname;
    }
}

// Charge une route si connue, sinon redirige vers 404
function handleRoute(pathname = window.location.pathname) {
    const cleanPath = normalizePath(pathname === '/index.html' ? '/' : pathname);
    const handler = routes[cleanPath];
    if (handler) {
        handler();
    } else {
        window.location.replace(notFoundPath);
    }
}

// Navigation via History API (liens internes marqués data-nav)
function navigateTo(pathname) {
    const cleanPath = normalizePath(pathname);
    if (routes[cleanPath]) {
        window.history.pushState({}, '', cleanPath);
        handleRoute(cleanPath);
    } else {
        window.location.replace(notFoundPath);
    }
}

// Init du router
function initRouter() {
    handleRoute();
    window.addEventListener('popstate', () => handleRoute());
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-nav]');
        if (!link) return;
        e.preventDefault();
        navigateTo(link.getAttribute('href'));
    });
}

// Bouton "go top" existant
const btn = document.getElementById('goTop');
const showAfter = 200;
const onScroll = () => {
    if (window.scrollY > showAfter) {
        btn.classList.remove('opacity-0', 'pointer-events-none');
        btn.classList.add('opacity-100');
    } else {
        btn.classList.add('opacity-0', 'pointer-events-none');
        btn.classList.remove('opacity-100');
    }
};
window.addEventListener('scroll', onScroll, { passive: true });
btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
onScroll();

// Démarrage
initRouter();
