# Faculty Website Template

This is a static faculty website template designed to be managed with OmniCMS. The website includes pages for a professor's home/about, research, teaching, publications, and contact information.

## Structure

The site is organized by type:

- `index.html` - Lightweight redirect to the main homepage under `pages/`
- `pages/` - HTML entry points: `index.html`, `publications.html`, `teaching.html`, `people.html`
- `css/` - Stylesheets (e.g., `styles-new.css`, `slideshow.css`, `nav-fix.css`)
- `js/` - JavaScript for interactive elements
- `assets/images/` - Images used across the site
- Navbar is injected by `js/navbar.js` into any page that has `<header data-nav>`.

## Customization

To customize this template for a specific professor:

1. Replace all instances of "Professor Name" with the actual professor's name
2. Update department and university information
3. Add actual content to the editable regions
4. Replace placeholder images with actual images
5. Update contact information and social media links

## Responsive Design

The website is fully responsive and works on all device sizes:
- Desktop computers
- Tablets
- Mobile phones

## Browser Compatibility

The website is compatible with modern browsers:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## Local Development

To view the website locally, simply open any HTML file in a web browser. For more advanced development, you can use a local server.


