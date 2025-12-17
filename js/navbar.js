// Injects a shared, mobile-friendly navbar into any page containing <header data-nav>
(function() {
    const navMarkup = `
        <nav class="main-navigation">
            <button class="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="teaching.html">Teaching</a></li>
                <li><a href="people.html">People</a></li>
            </ul>
        </nav>
    `;

    document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('header[data-nav]');
        if (!header) return;

        if (!header.innerHTML.trim()) {
            header.innerHTML = navMarkup;
        }

        const toggle = header.querySelector('.nav-toggle');
        const links = header.querySelector('.nav-links');
        if (toggle && links) {
            toggle.addEventListener('click', () => {
                const expanded = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', String(!expanded));
                links.classList.toggle('open', !expanded);
                toggle.classList.toggle('open', !expanded);
            });
        }
    });
})();
