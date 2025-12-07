document.addEventListener("DOMContentLoaded", () => {
    // Attente du chargement du DOM
    console.log("DOM chargé avec succès");
    // Redirection vers la section Cookies de la page Mentions légales
    const cookiesLink = document.getElementById('cookiesLink');
    const cookiesSection = document.getElementById('cookies');
    const radioCookies = document.getElementById('radioCookies');

    if (cookiesLink) {
        cookiesLink.addEventListener('click', () => {
            cookiesSection.scrollIntoView({ behavior: 'smooth' });
            cookiesSection.setAttribute("checked", "checked");
            radioCookies.checked = true;
            radioCookies.style.visibility = 'hidden';
        });
    } else {
        console.warn("Le lien vers la section cookies n'a pas été trouvé.");
    }

    // Si la section cookies existe alors on ajoute un écouteur d'événement
    if (cookiesSection) {
        cookiesSection.addEventListener('click', () => {
            cookiesSection.scrollIntoView({ behavior: 'smooth' });
            cookiesSection.setAttribute("checked", "checked");
        });
    } else {
        console.warn("La section cookies n'a pas été trouvée.");
    }
});