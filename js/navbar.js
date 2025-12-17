// Injects a shared navbar into any page containing <header data-nav>
(function() {
    const navMarkup = `
        <nav class="main-navigation">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="teaching.html">Teaching</a></li>
                <li><a href="people.html">People</a></li>
            </ul>
        </nav>
    `;

    // Use DOMContentLoaded to ensure the header exists
    document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('header[data-nav]');
        if (!header) return;
        // Avoid re-rendering if it already has content
        if (!header.innerHTML.trim()) {
            header.innerHTML = navMarkup;
        }
    });
})();
