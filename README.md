# Rahwa Travel — Static Website

This repository contains a modern, responsive travel agency website built with HTML, Bootstrap 5, and a small amount of custom CSS and JavaScript.

Structure:

- `index.html` — Home page with hero, featured destinations, testimonials, and booking widget.
- `destinations.html` — Grid of popular destinations.
- `packages.html` — Travel packages with pricing and inquiry buttons.
- `about.html` — Company story, mission, team and trust elements.
- `contact.html` — Contact form, office details, and embedded Google Map.
- `blog.html` — Blog / travel tips listing.
- `assets/css/styles.css` — Custom styles and color variables.
- `assets/js/main.js` — Client-side interactivity (form validation, smooth scroll).

How to view locally:

1. Open `index.html` in your browser. No server required for basic preview.

Optional (local server):

Windows PowerShell:

```powershell
# from project root
python -m http.server 8000;
# then open http://localhost:8000 in your browser
```

Notes & next steps:
- Forms are client-side only and display a success alert. Add a backend (e.g., Netlify Functions, Formspree, or your own API) to process submissions.
- Images link to Unsplash; replace with optimized local images for production and add proper credits where required.
- For deployment, host on GitHub Pages, Netlify, or Vercel.
